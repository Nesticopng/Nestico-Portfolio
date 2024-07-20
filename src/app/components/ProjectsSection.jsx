"use client"
import React, { useState, useRef } from 'react'
import ProjectCards from './ProjectCards'
import ProjectTag from './ProjectTag'
import { motion, useInView } from 'framer-motion'

const projectsData = [
    {
        id: 1,
        title: "Node Wallet Website",
        description: "Atlas Wallet: Node.js, Express, Bcrypt.js, MongoDB, PayPal",
        image: "/images/projects/1.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/Nesticopng/Atlas-Proyecto-Full-Stack",
        previewUrl: "https://atlas-fgav.onrender.com/"
    },
    {
        id: 2,
        title: "React Portfolio Website",
        description: "My Personal Portfolio: React, Next.js, Tailwind",
        image: "/images/projects/2.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/Nesticopng/Nestico-Portfolio",
        previewUrl: "/"
    },
    {
        id: 3,
        title: "Next.js Dashboard App",
        description:"Next.js App Router Course (by Vercel): TypeScript, Next.js, PostgreSQL",
        image: "/images/projects/3.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/Nesticopng/DB-Next.js",
        previewUrl: "https://db-next-js.vercel.app/"
    }
]


const ProjectsSection = () => {
    const [ tag, setTag ] = useState("All")
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const handledTagChange = (newTag) => {
        setTag(newTag)
    }

    const filteredProjects = projectsData.filter((project) => 
        project.tag.includes(tag)
    )

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 }
    }

    return (
        <section id="projects-section">
            <h2 className='text-center text-white text-4xl font-bold mt-4 mb-8 md:mb-12'>My Projects</h2>
            <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
                <ProjectTag 
                    onClick={handledTagChange} 
                    name="All" 
                    isSelected={tag === "All"}
                />
                <ProjectTag 
                    onClick={handledTagChange} 
                    name="Web" 
                    isSelected={tag === "Web"}
                />
                <ProjectTag 
                    onClick={handledTagChange} 
                    name="Mobile" 
                    isSelected={tag === "Mobile"}
                />
            </div>
            <ul ref={ref} className='grid md:grid-cols-3 gap-8 md:gap-12'>
                {filteredProjects.map((project, index) => (
                    <motion.li key={project.id} variants={cardVariants} initial="initial" animate={isInView ? "animate" : "initial"} transition={{ delay: index * 0.4}}>
                        <ProjectCards 
                            title={project.title} 
                            description={project.description} 
                            imgUrl={project.image}
                            gitUrl={project.gitUrl}
                            previewUrl={project.previewUrl}
                        />
                    </motion.li>
                ))}
            </ul>
        </section>
    )
}

export default ProjectsSection
