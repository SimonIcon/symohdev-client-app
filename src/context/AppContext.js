import React, { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, fetchSignInMethodsForEmail, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { auth, db } from '../config/firebase'
import { setDoc, doc, serverTimestamp, getDoc, updateDoc } from "firebase/firestore"
import { toast } from 'react-hot-toast'


export const appContext = createContext({})
const AppContext = ({ children }) => {
    const [loginModal, setLoginModal] = useState(false)
    const [loginSuccess, setLoginSuccess] = useState(false)
    // creating user
    const createUser = async (email, password, origin, name) => {
        // Check if the user exists
        fetchSignInMethodsForEmail(auth, email).then((user) => {
            if (user.length === 0) {
                const timestamp = serverTimestamp();
                createUserWithEmailAndPassword(auth, email, password).then((res) => {
                    setDoc(doc(db, "members", res.user.uid), {
                        joinedOn: timestamp,
                        userEmail: email,
                        userPassword: password,
                        origin: origin,
                        userName: name,

                    });
                    updateDoc(doc(db, "members", res.user.uid), {
                        displayName: name
                    })
                    toast.success("registered successfully")
                    setLoginSuccess(true)
                }).catch((error) => {
                    toast.error(error.message)
                    // console.log(error)
                })
            } else {
                toast.error("user already exist")
            }

        }).catch((error) => {
            toast.error(error.message)
        })


    }
    // checking if user has logged in
    const [activerMember, setActiveMember] = useState([])
    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                await getDoc(doc(db, "members", user.uid)).then((loggeduser) => {
                    if (loggeduser.exists()) {
                        setActiveMember(loggeduser.data())
                    }
                }).catch((error) => {
                    console.log('error occurred')
                })
            } else {
                setActiveMember([])
            }
        });

    }, [])
    // login user
    const handleSignIn = (email, password) => {
        // Check if the user exists
        fetchSignInMethodsForEmail(auth, email)
            .then((signInMethods) => {
                if (signInMethods.length === 0) {
                    toast.error("invalid user")
                    return;
                }
                signInWithEmailAndPassword(auth, email, password)
                    .then((userCredential) => {
                        const user = userCredential.user;
                        if (user) {
                            toast.success(`welcome`)
                            setLoginSuccess(true)
                        }
                    })
                    .catch((error) => {
                        toast.error("wrong password")
                        console.log(error)

                    });
            })
    }
    // sign out
    // signing out user
    const handleLogout = () => {
        signOut(auth).then(() => {
            setActiveMember([])
        }).catch((error) => {
            toast.error("error while loging out")
        });
    }
    // recovering password
    const handleForgotPassword = (email) => {
        fetchSignInMethodsForEmail(auth, email).then((res) => {
            if (res.length === 0) {
                toast.error("invalid user")
                return;
            }
            sendPasswordResetEmail(auth, email).then((res) => {
                toast.success('check out your email to reset password')
            }).catch(() => {
                toast.error("error while trying to locate your email")
            })
        }).catch(() => {
            toast.error("error while looking user email")
        })

    }

    return (
        <appContext.Provider value={{
            loginModal, setLoginModal, createUser, loginSuccess,
            handleSignIn, handleLogout, activerMember, handleForgotPassword
        }}>
            {children}
        </appContext.Provider>
    )
}

export default AppContext