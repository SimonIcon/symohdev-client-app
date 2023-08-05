import React, { useContext } from 'react'
import { useFormik } from "formik"
import { Typography } from "@material-tailwind/react"
import { useNavigate } from "react-router-dom"
import { appContext } from '../context/AppContext'

const SignIn = () => {
    const navigate = useNavigate()
    const { createUser } = useContext(appContext)

    // handling formik
    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validateOnBlur: false,
        validateOnChange: false,
        validate: async (values) => {

        },
        onSubmit: async (values) => {
            createUser()
        }
    })
    return (
        <div className='w-full h-full'>
            <Typography className="capitalize font-semibold text-sm text-center">login</Typography>
            <form className='flex flex-col justify-center items-center' onSubmit={formik.handleSubmit}>
                <input type='text' placeholder='your email' id="email"
                    className='w-[70%] outline-none py-3 mt-4 px-4 lowercase bg-gray-200 rounded-md font-semibold text-sm'
                    value={formik.values.email} onChange={formik.handleChange}
                />
                <input type='password' placeholder='password' id='password'
                    value={formik.values.password} onChange={formik.handleChange}
                    className='w-[70%] outline-none py-3 mt-4 px-4 lowercase bg-gray-200 rounded-md font-semibold text-sm'
                />
                <div className='w-[70%] mt-4 flex text-black flex-row justify-end items-center font-semibold text-xs'>
                    <Typography className="mr-4 text-xs font-semibold">Forgot password</Typography>
                    <Typography onClick={() => navigate("/auth/recover")}
                        className="capitalize text-xs font-semibold hover:underline hover:text-red-300">recover</Typography>
                </div>
                <button type='submit'
                    className='w-[70%] outline-none text-center mt-4 py-3 font-semibold hover:bg-cyan-600
                    capitalize bg-cyan-400 rounded-md'
                >
                    login
                </button>
                <div className='w-[50%] mt-6 flex flex-row justify-between items-center'>
                    <Typography className="tracking-tight font-light text-sm">Dont`t have an account</Typography>
                    <Typography onClick={() => navigate("/auth/register")}
                        className="capitalize font-semibold text-cyan-500 text-sm hover:text-pink-500 hover:underline"
                    >register</Typography>
                </div>
            </form>

        </div>
    )
}

export default SignIn