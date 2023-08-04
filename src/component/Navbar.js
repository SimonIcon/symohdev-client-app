import React from 'react'
import { Typography } from "@material-tailwind/react"
import mypic from "../utils/image.js"
import { Link } from "react-scroll"

const Navbar = () => {
    return (
        <div className='fixed z-50 w-full h-[130px] px-2 bg-[#0a192f] text-gray-300'>
            <div className='w-full h-[100px] flex flex-row justify-between items-center'>
                <div className='h-full w-[55%] sm:w-[40%] md:w-[35%] lg:w-[30%] xl:w-[30%] flex flex-col justify-center items-center'>
                    <div className='w-full flex flex-row h-full'>
                        <div className='flex flex-row justify-center items-center'>
                            <img src={mypic} alt='mypic'
                                className='h-[80px] w-[80px] rounded-full  object-cover' />
                        </div>
                        <div className='flex flex-col justify-center h-[80px] items-center ml-2'>
                            <Typography className="text-sm capitalize font-semibold">symohdev</Typography>
                            <Typography className="lowercase text-xs font-extralight">@developer</Typography>
                        </div>
                    </div>
                </div>
                <div className='w-[40%] sm:w-[35%] md:w-[30%] lg:w-[20%] flex flex-row items-center justify-between'>
                    <Typography className="text-sm capitalize font-semibold hover:text-pink-500">projects</Typography>
                    <button
                        className='bg-[#0a192f] outline-none overflow-hidden text-white hover:bg-black-600
                         font-semibold capitalize rounded-md px-4 py-2 text-xs'>login</button>
                </div>
            </div>
            <div className='w-full h-[30px] flex flex-row justify-center items-start'>
                <ul className='flex flex-row w-[60%] sm:w-[50%] md:w-[40%] lg:w-[35%] justify-between items-center'>
                    <Link to="home" spy={true} smooth={true} duration={1000}
                        className='capitalize text-xs font-semibold hover:text-pink-500'
                    >home </Link>
                    <Link to="aboutMe" spy={true} smooth={true} duration={1000}
                        className='capitalize text-xs font-semibold hover:text-pink-500'
                    >about me </Link>
                    <Link to="skills" spy={true} smooth={true} duration={1000}
                        className='capitalize text-xs font-semibold hover:text-pink-500'
                    >skills </Link>

                </ul>
            </div>
        </div>
    )
}

export default Navbar