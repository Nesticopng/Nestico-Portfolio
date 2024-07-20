"use client"
import React, { useTransition, useState } from 'react'
import Image from 'next/image'
import TabButton from './TabButton'

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className='list-disc pl-2'>
                <li>Node.js</li>
                <li>React</li>
                <li>Next.js</li>
                <li>TypeScript</li>
                <li>SQL</li>
                <li>MongoDB</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul>
                <li>Full Stack Developer (MEN) - EDTécnica</li>
                <li>Statistical Sciences - Central University of Venezuela </li>
            </ul>
        )
    }
]

const AboutSection = () => {
    const [ tab, setTab ] = useState("skills")
    const [ isPending, startTransition ] = useTransition()

    const handledTabChange = (id) => {
        startTransition(() => {
            setTab(id)
        })
    }

    return (
        <section id="about-section" className='text-white'>
            <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
                <Image src="/images/About-Image.png" width={500} height={500} alt=''/>  
                <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                    <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                    <p className="text-base lg:text-lg">
                        I am a full stack web developer with a passion for creating
                        interactive and responsive web applications. I have experience
                        working with JavaScript, Node.js, React, Next.js, TypeScript, Express, Discord
                        and Git. I am a quick learner and I am always
                        looking to expand my knowledge and skill set. I'm a team player and
                        I'm excited to work with others to create amazing applications.
                    </p>
                    <div className='flex flex-row mt-8'>
                        <TabButton 
                        selectTab={() => handledTabChange("skills")} 
                        active={tab === "skills"}
                        >
                        {" "}
                            Skills{" "}
                        </TabButton>
                        <TabButton 
                        selectTab={() => handledTabChange("education")} 
                        active={tab === "education"}
                        >
                        {" "}
                            Education{" "}
                        </TabButton>
                    </div>
                    <div className='mt-8'>{TAB_DATA.find((t) => t.id === tab).content}</div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection