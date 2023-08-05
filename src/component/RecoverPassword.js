import { Typography } from '@material-tailwind/react'
import { useFormik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const RecoverPassword = () => {
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            email: ""
        },
        validate: async (values) => {

        },
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: async (values) => {
            console.log(values)
            navigate('/auth/')
        }
    })


    return (
        <div className='w-full h-full flex flex-col justify-center items-center'>
            <Typography className="text-sm tracking-tighter font-semibold text-center"
            >Recover your password using registration email</Typography>
            <form className='w-full flex flex-col justify-center items-center' onSubmit={formik.handleSubmit}>
                <input type='text' placeholder='email' id="email"
                    className='w-[70%] outline-none py-3 mt-4 px-4 lowercase bg-gray-200 rounded-md font-semibold text-sm'
                    value={formik.values.email} onChange={formik.handleChange}
                />
                <button type='submit'
                    className='w-[70%] outline-none text-center mt-4 py-3 font-semibold hover:bg-cyan-600
                    capitalize bg-cyan-400 rounded-md'
                >
                    recover now
                </button>
            </form>


        </div>
    )
}

export default RecoverPassword