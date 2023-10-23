import React from 'react'
import { Sedgwick_Ave_Display, Kanit } from 'next/font/google'

const sedgwick = Sedgwick_Ave_Display({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

const kanit = Kanit({
  weight: '500',
  subsets: ['latin'],
  display: 'swap',
})

const symbolStyle = {
  textShadow: `0 0 10px rgb(50, 244, 255)`
}

const nestorStyle = {
  textShadow: `0 0 10px rgb(49, 155, 106)`
}

const devStyle = {
  textShadow: `0 0 10px rgb(215, 172, 45)`
}

const Footer = () => {
  return (
    <footer className='footer border z-20 border-t-[#33353F] border-b-transparent border-l-transparent border-r-transparent px-12 py-12 text-white text-4xl flex justify-center w-full'>
     <p className={kanit.className}><span style={symbolStyle}>&lt;</span><span className={sedgwick.className}><span style={nestorStyle}>NESTICO</span><span style={devStyle}> DEV</span></span><span style={symbolStyle}>/&gt;</span></p>
    </footer>
  )
}

export default Footer