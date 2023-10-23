"use client"
import React, { useState, useEffect } from 'react'
import NavLink from './NavLink'
import { Link } from 'react-scroll';
import { Rubik } from 'next/font/google'
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import MenuOverlay from './MenuOverlay'

const rubik = Rubik({
  weight: '500',
  subsets: ['latin'],
  display: 'swap',
})

const NavLinks = [
    {
        title: "About",
        path: "about-section",
    },
    {
        title: "Projects",
        path: "projects-section",
    },
    {
        title: "Contact",
        path: "contact-section",
    },
];

const Navbar = () => {
    const [currentColorIndex, setCurrentColorIndex] = useState(0)
    const colors = ['rgb(179, 61, 211)', 'rgb(50, 244, 255)']
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentColorIndex((prevIndex) => (prevIndex === 0 ? 1 : 0))
      }, 3000)
  
      return () => {
        clearInterval(interval);
      };
    }, []);
  
    const symbolStyle = {
      textShadow: `0 0 10px ${colors[currentColorIndex]}`,
      transition: 'text-shadow 3s ease-in-out',
    };

    const [ navbarOpen, setNavbarOpen ] = useState(false)
    return (
        <nav className='fixed mx-auto border border-t-transparent border-r-transparent border-l-transparent border-[#33353F] top-0 left-0 right-0 bg-[#121212] z-50 bg-opacity-100'>
            <div className='flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-3'>
                <Link
                    to='top-section'
                    smooth={true}
                    duration={500}
                    className='text-2xl md:text-[2.5rem] text-white font-semibold cursor-pointer'
                    style={symbolStyle}
                >
                    &lt;<span className={rubik.className}>NESTICO DEV</span>/&gt;
                </Link>
                <div className='mobile-menu block md:hidden'>
                    {
                        !navbarOpen ? (
                            <button onClick={() => setNavbarOpen(true)} className='text-slate-200 flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white'><Bars3Icon className='h-5 w-5'/></button>
                        ) : (
                            <button onClick={() => setNavbarOpen(false)} className='text-slate-200 flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white'><XMarkIcon className='h-5 w-5'/></button>
                        )
                    }
                </div>
                <div className='menu hidden md:block md:w-auto' id='navbar'>
                    <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
                        {NavLinks.map((link, index) => (
                            <li key={index}>
                                <NavLink href={link.path} title={link.title} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {navbarOpen ? <MenuOverlay links={NavLinks}/> : null}
        </nav>
    )
}

export default Navbar
