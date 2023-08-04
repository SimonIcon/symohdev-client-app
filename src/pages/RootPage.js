import React from 'react'
import AppContext from '../context/AppContext'
import Navbar from '../component/Navbar'
import { Outlet } from 'react-router-dom'
import styles from "../styles/home.module.scss"

const RootPage = () => {
    return (
        <div className={`${styles.body} w-full h-full`}>
            <AppContext>
                <Navbar />
                <Outlet />
            </AppContext>
        </div>
    )
}

export default RootPage