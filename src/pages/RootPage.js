import React from 'react'
import AppContext from '../context/AppContext'
import Navbar from '../component/Navbar'
import { Outlet } from 'react-router-dom'

const RootPage = () => {
    return (
        <div className='w-full min-h-screen'>
            <AppContext>
                <Navbar />
                <Outlet />
            </AppContext>
        </div>
    )
}

export default RootPage