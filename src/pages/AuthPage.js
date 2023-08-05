import { Dialog } from '@material-tailwind/react'
import React, { useContext } from 'react'
import { appContext } from '../context/AppContext'
import { Outlet } from 'react-router-dom'

const AuthPage = () => {
    const { loginModal } = useContext(appContext)
    return (
        <Dialog open={loginModal}>
            <div className='w-full h-[70vh] text-gray-800'>
                <div className='w-full h-full flex justify-center items-center'>
                    <Outlet />
                </div>

            </div>
        </Dialog>
    )
}

export default AuthPage