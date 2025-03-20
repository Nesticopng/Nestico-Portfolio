"use client"
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion'
import { Link } from 'react-scroll';

const HeroSection = () => {
  return (
    <section className='lg:py-16'>
      <div className='grid grid-cols-1 sm:grid-cols-12'>
        <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }} className='col-span-8 place-self-center text-center sm:text-left justify-self-start'>
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600'>Hola, Soy{" "}</span>
            <br/>
            <TypeAnimation
              sequence={[
                'Néstor',
                1500, 
                'Web Developer',
                1500,
                'Creativo',
                1500,
                'Full Stack Developer',
                1500,
                'Estadístico',
                1500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>
¡Hola! Soy Néstor, un apasionado programador en continuo aprendizaje. Este es mi espacio digital, donde la innovación y la creatividad se unen. Te invito a explorar mi portafolio y a conocer mi camino en el mundo del desarrollo.</p>
          <div> 
            <Link to='contact-section' smooth={true} duration={500} className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:px-16 transition-all duration-300 ease-in-out hover:bg-slate-200 shadow hover:shadow-lg text-white cursor-pointer'>Contáctame</Link>
          </div>
        </motion.div>
        <div className='col-span-4 place-self-center mt-4 lg:mt-0'>
          <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
            <Image className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2' priority src="/images/Nestico-Anime.png" alt='Nestico' width={350} height={350} quality={100}/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
