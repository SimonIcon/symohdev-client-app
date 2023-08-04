import React from 'react'
import styles from "../styles/home.module.scss"
import skillsData from '../utils/skills'

const Skills = () => {
    return (
        <div name="skills" className={`${styles.skills}  w-full pt-[130px] z-30`}>
            <div>
                <p className='py-2 tracking-tighter text-sm font-semibold text-white text-center px-5'>
                    As a full stack developer I have  extensively using below technologies to achieve client goals
                </p>
            </div>
            <div className='w-full flex justify-center'>
                <div className='w-[90%] sm:w-[80%] md:w-[70%] justify-center grid grid-cols-2 
                sm:grid-cols-2 md:grid-cols-3 gap-4 text-center py-8'>
                    {
                        skillsData.map((skill) => (
                            <div key={skill.id} className='shadow-md shadow-[#040c16] hover:scale-110 px-3 duration-500'>
                                <img className='w-[50px] h-[50px] mx-auto' src={skill.icon} alt={skill.id} />
                                <p className='my-4 text-[#8892b0] font-semibold capitalize'>{skill.id}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Skills