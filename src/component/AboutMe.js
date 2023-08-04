import React from 'react'
import styles from "../styles/home.module.scss"
import { Typography } from '@material-tailwind/react'

const AboutMe = () => {
    return (
        <div name="aboutMe"
            className={`${styles.AboutMe} w-full pt-[130px]`}>
            <div className='flex flex-col justify-center items-center'>
                <div className='w-[80%] sm:w-[60%] md:w-[50%] lg:w-[40%]'>
                    <p className='font-semibold text-sm tracking-tighter py-4 indent-6  text-gray-200 '>
                        Hello there i`m
                        <span className='capitalize tracking-normal'> simon mwangi </span>, born and studied in kenya in all levels
                        of education In 2023, I graduated from
                        <span className=' capitalize tracking-normal'> chuka university </span> with a
                        Bachelors degree in
                        <span className='capitalize tracking-normal'> applied computer science </span>
                    </p>
                    <p className='text-sm font-semibold  tracking-tight indent-6 text-gray-200'>
                        At the university, I grapsed basics in computer programming and specialized In
                        full stack web development. I managed to learned the better part of web development
                        using reactJs and its framework such as Tailwind Css, bootstrap material-ui for frontend.
                        and nodejs for backend development with express framework.
                    </p>
                    <div className='w-full px-3 pt-5 flex flex-row justify-between items-center'>
                        <Typography
                            className="bg-pink-400 rounded-md w-[45%] text-center py-2 capitalize font-semibold
                             text-sm hover:bg-pink-200"
                        >view projects</Typography>
                        <Typography
                            className="bg-pink-400 rounded-md w-[45%] text-center py-2 capitalize font-semibold 
                            text-sm hover:bg-pink-200"
                        >hire me</Typography>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe