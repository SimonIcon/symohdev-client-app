import React from 'react'
import styles from "../styles/home.module.scss"
import { Carousel } from "@material-tailwind/react"

const Dashboard = () => {
    return (
        <div name="home" className={`${styles.dashboard} w-full pt-[130px] z-30`}>
            <Carousel transition={{ type: "tween", duration: 2, }} autoplay={false}
                autoplayDelay={7000} loop={true}
                className='w-full h-full'
            >
                <div className='w-full h-full'>
                    <div className='h-full flex flex-row justify-center pt-5' >
                        <div className='w-[95%] sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[50%] h-full flex flex-col 
                    justify-between  items-center'>
                            <p className='text-sm font-semibold px-4 items-center tracking-wide'>
                                Hello there I'm
                                <span className='text-pink-600 capitalize tracking-wide'> Simon Mwangi </span>, an ambitious and driven graduate from Chuka University,
                                where I earned my Bachelor's degree in Applied Computer Science.
                            </p>
                            <p className='text-sm font-light tracking-normal items-center px-4'>
                                As a frontend wizard,I skillfully wield JavaScript libraries such as
                                ReactJS and Angular, seamlessly blending  them with design frameworks like
                                Tailwind CSS, Bootstrap, and Material UI to build stunning and intuitive user interfaces.
                            </p>

                            <p className='text-sm font-light tracking-normal items-center px-4'>
                                I believe that the key to a successful application lies not just in its aesthetics,
                                but also in its performance and reliability. That's why I ventured into
                                backend development, specializing in Node.js with Express.js, and mastering
                                the art of efficiently managing MongoDB and MySQL databases. With every project
                                I undertake, my goal is to create memorable digital experiences that resonate
                                with users and  elevate brands to new heights. Let's collaborate and
                                turn your vision into reality!</p>
                        </div>

                    </div>
                </div>
                <div className='w-full h-full'>
                    <div className='h-full flex flex-row justify-center pt-5' >
                        <div className='w-[95%] sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[50%] h-full flex flex-col 
                    justify-between  items-center'>
                            <p className='text-sm font-semibold px-4 items-center tracking-wide'>
                                As a passionate and skilled Frontend Developer, I possess a diverse range of expertise that
                                allows me to create visually stunning and highly functional web pages.
                            </p>
                            <p className='text-sm font-light tracking-normal items-center px-4'>
                                With a strong foundation in ReactJS, I adeptly harness the power of this JavaScript
                                library to build dynamic and interactive user interfaces. Leveraging my proficiency
                                in Angular, I craft robust and scalable web applications that embody seamless user experiences.
                                To ensure pixel-perfect designs and unparalleled responsiveness,
                                I employ a versatile toolkit that includes Bootstrap, Tailwind CSS, and Material UI.
                            </p>
                            <p className='text-sm font-light tracking-normal items-center px-4'>
                                My keen eye for detail enables me to combine these cutting-edge
                                frameworks and libraries to create user-friendly web pages that adapt flawlessly across devices.
                                From crafting engaging user interactions to developing intuitive layouts, my dedication
                                to innovation and efficiency is reflected in every project I undertake.
                            </p>


                        </div>
                    </div>
                </div>
                <div className='w-full h-full'>
                    <div className='h-full flex flex-row justify-center pt-5' >
                        <div className='w-[95%] sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[50%] h-full flex flex-col 
                    justify-between  items-center'>
                            <p className='text-sm font-semibold px-4 items-center tracking-wide'>
                                As a dedicated Backend Developer, I possess an array of skills that enable me
                                to build robust and secure RESTful APIs. Leveraging the power of Node.js and Express,
                                I create scalable server applications that form the backbone of modern web and mobile applications.
                            </p>
                            <p className='text-sm font-light tracking-normal items-center px-4'>
                                My proficiency in utilizing Mongoose and MySQL ensures seamless integration with databases,
                                allowing for efficient data management and retrieval. Embracing the Model-View-Controller (MVC) pattern, I develop clean and maintainable code that
                                enhances collaboration with frontend developers and delivers exceptional user experiences.

                            </p>
                            <p className='text-sm font-light tracking-normal items-center px-4'>
                                My expertise lies in implementing advanced authentication and authorization mechanisms to
                                fortify API endpoints against potential security threats, ensuring the protection of sensitive data.
                                With a keen eye for performance optimization and a relentless commitment to best practices,
                                I am continuously driven to deliver backend solutions
                                that exceed expectations and contribute to the success of every project.

                            </p>


                        </div>
                    </div>
                </div>
                <div className='w-full h-full'>
                    <div className='h-full flex flex-row justify-center pt-5' >
                        <div className='w-[95%] sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[50%] h-full flex flex-col 
                    justify-evenly  items-center'>
                            <p className='text-sm font-semibold px-4 items-center tracking-wide'>
                                I firmly believe that an essential aspect of being a developer is not only
                                writing quality code but also showcasing it to the world. My experience with GitHub and project
                                deployment on Heroku, Render, and Hostinger has enabled me to effectively demonstrate my
                                technical skills and innovative approach to problem-solving.
                            </p>
                            <p className='text-sm font-light tracking-normal items-center px-4'>
                                This combination of version control proficiency and project deployment capabilities has
                                been instrumental in my personal growth as a developer and has allowed me to collaborate
                                effectively with teams in both professional and open-source settings.
                                As I continue to refine my skills and take on new challenges,
                                I eagerly look forward to expanding my portfolio with more exciting projects
                                and contributing to the ever-evolving landscape of software development.
                            </p>


                        </div>
                    </div>
                </div>


            </Carousel>
        </div>
    )
}

export default Dashboard