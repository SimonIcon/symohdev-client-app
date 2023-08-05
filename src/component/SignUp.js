import { Typography } from '@material-tailwind/react'
import { useFormik } from 'formik'
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { appContext } from '../context/AppContext'
import isValidEmail from "../utils/emailValidation"
import { Toaster, toast } from "react-hot-toast"

const SignUp = () => {
    // navigation
    const navigate = useNavigate()
    const { createUser, loginSuccess } = useContext(appContext)
    // handling formik

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            username: "",
            country: ""
        },
        validateOnBlur: false,
        validateOnChange: false,
        validate: async (values) => {
            const error = {}
            if (!isValidEmail(values.email)) {
                error.email = toast.error("invalid email")
            } else if (!values.username || values.username === "") {
                error.username = toast.error("username required")
            } else if (!values.country || values.country === "") {
                error.country = toast.error("country required")
            } else if (!values.password || values.password.length === "") {
                error.password = toast.error('password required')
            } else if (values.password.length < 6) {
                error.password = toast.error("weak password")
            }
            return error
        },
        onSubmit: async (values) => {
            createUser(values.email, values.password, values.country, values.username)
            if (loginSuccess === true) {
                setTimeout(() => {
                    navigate('/')
                }, 1500);
            }

        }
    })
    return (
        <div className='w-full h-full flex flex-col justify-center items-center'>
            <Toaster position='top-right' reverseOrder={false}></Toaster>
            <Typography className="capitalize font-semibold text-sm text-center">register</Typography>
            <form onSubmit={formik.handleSubmit} className='w-full flex flex-col items-center'>
                <input type='text' placeholder=' email' id="email"
                    className='w-[70%] outline-none py-3 mt-4 px-4 lowercase bg-gray-200 rounded-md font-semibold text-sm'
                    value={formik.values.email} onChange={formik.handleChange}
                />
                <input type='text' placeholder='username' id="username"
                    className='w-[70%] outline-none py-3 mt-4 px-4 lowercase bg-gray-200 rounded-md font-semibold text-sm'
                    value={formik.values.username} onChange={formik.handleChange}
                />
                <input type='text' placeholder='country' id="country"
                    className='w-[70%] outline-none py-3 mt-4 px-4 lowercase bg-gray-200 rounded-md font-semibold text-sm'
                    value={formik.values.country} onChange={formik.handleChange}
                />
                <input type='password' placeholder='password' id='password'
                    value={formik.values.password} onChange={formik.handleChange}
                    className='w-[70%] outline-none py-3 mt-4 px-4 lowercase bg-gray-200 rounded-md font-semibold text-sm'
                />
                <button type='submit'
                    className='w-[70%] outline-none text-center mt-4 py-3 font-semibold hover:bg-cyan-600
                    capitalize bg-cyan-400 rounded-md'
                >
                    register
                </button>
                <div className='w-[50%] mt-6 flex flex-row justify-between items-center'>
                    <Typography className="tracking-tight font-light text-sm">Already have an account</Typography>
                    <Typography onClick={() => navigate("/auth/")}
                        className="capitalize font-semibold text-cyan-500 text-sm hover:text-pink-500 hover:underline"
                    >login</Typography>
                </div>
            </form>
        </div>
    )
}

export default SignUp