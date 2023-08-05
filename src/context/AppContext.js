import React, { createContext, useState } from 'react'
import { createUserWithEmailAndPassword, fetchSignInMethodsForEmail } from "firebase/auth"
import { auth, db } from '../config/firebase'
import { setDoc, doc, serverTimestamp } from "firebase/firestore"
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
    return (
        <appContext.Provider value={{ loginModal, setLoginModal, createUser, loginSuccess }}>
            {children}
        </appContext.Provider>
    )
}

export default AppContext