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
                <li>Angular</li>
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
                <li>Full Stack Developer (MERN) - EDTécnica</li>
                <li>Ciencias Estadísticas - Universidad Central de Venezuela </li>
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
                    <h2 className='text-4xl font-bold text-white mb-4'>Sobre Mí</h2>
                    <p className="text-base lg:text-lg">
Soy un desarrollador web full stack con pasión por crear aplicaciones web interactivas y optimizadas. Tengo experiencia trabajando con JavaScript, Node.js, React, Next.js, TypeScript, Express, Python y Git. Aprendo rápido y siempre busco expandir mis conocimientos y habilidades. Me gusta trabajar en equipo y colaborar con otros para crear aplicaciones increíbles.
                    </p>
                    <div className='flex flex-row mt-8'>
                        <TabButton 
                        selectTab={() => handledTabChange("skills")} 
                        active={tab === "skills"}
                        >
                        {" "}
                            Habilidades{" "}
                        </TabButton>
                        <TabButton 
                        selectTab={() => handledTabChange("education")} 
                        active={tab === "education"}
                        >
                        {" "}
                            Educación{" "}
                        </TabButton>
                    </div>
                    <div className='mt-8'>{TAB_DATA.find((t) => t.id === tab).content}</div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection
