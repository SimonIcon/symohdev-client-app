import { Typography } from '@material-tailwind/react'
import React from 'react'
import { Link } from 'react-scroll'
import skillsData from '../utils/skills'

const Footer = () => {
    return (
        <div className='w-full'>
            <div className='w-full flex flex-row justify-between items-center px-5 py-3'>
                <div>
                    <Typography className="text-cyan-500 font-semibold">@symohdev</Typography>
                </div>
                <ul className='flex flex-row w-[40%] sm:w-[50%] md:w-[40%] lg:w-[35%] justify-evenly items-center'>
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
            <div className='w-full flex flex-col'>
                <div className='w-full flex justify-center'>
                    <div className='w-[90%] sm:w-[75%] md:w-[60%] justify-center grid grid-cols-5'>
                        {
                            skillsData.map((skill) => (
                                <div key={skill.id} className='shadow-xs'>
                                    <p className='py-1 px-1 text-white text-xs font-extralight'>{skill.id}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className='pt-5 flex flex-col justify-center items-start pb-5 mb-4'>
                    <div className="w-[80%] sm:w-[75%] md:w-[60%] flex flex-row  justify-center mb-2">
                        <Typography className="capitalize font-semibold text-sm mr-6">email</Typography>
                        <Typography className="text-sm font-light lowercase tracking-tighter text-start">symohdev21@gmail.com</Typography>
                    </div>
                    <div className="w-[80%] sm:w-[75%] md:w-[60%] flex flex-row justify-center">
                        <Typography className="capitalize font-semibold text-sm mr-4">whatsapp</Typography>
                        <Typography className="text-sm font-light lowercase tracking-tighter">+254702212582</Typography>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer