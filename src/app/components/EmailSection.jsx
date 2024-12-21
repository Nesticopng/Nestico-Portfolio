"use client"
import React, { useState } from 'react'
import GithubIcon from "../../../public/icons-github.svg"
import LinkedinIcon from "../../../public/LinkedIn_icon.svg"
import WhatsAppIcon from "../../../public/icons-whatsapp.svg"
import Link from 'next/link'
import Image from 'next/image'

const EmailSection = () => {
  const [ emailSubmitted, setEmailSubmitted ] = useState(false)

  const handleSubmit = async (e) => {
    
    e.preventDefault()
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value
    }

    const JSONdata = JSON.stringify(data)

    const endpoint = "/api/send"

    const options = {
      method: "POST",
      headers: {"Content-Type": "application/json" },
      body: JSONdata
    }

    const response = await fetch(endpoint, options)
    const resData = await response.json()

    if (response.status === 200){
      console.log("message send")
      setEmailSubmitted(true)
    }
  }

  return (
    <section id="contact-section" className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative'>
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-1 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className='z-10'>
          <h5 className='text-xl font-bold text-white my-2'>Contáctame</h5>
          <p className='text-[#ADB7BE] mb-4 max-w-md'>
            {" "}
            Actualmente estoy en busca de nuevas oportunidades, mi bandeja de entrada siempre está abierta. puedes contactarme cuando quieras, ya sea que tengas una pregunta o simplemente quieras saludar, ¡haré mi mejor esfuerzo para responderte!
          </p>
        <div className='socials flex flex-row gap-5'>
          <Link href="https://www.linkedin.com/in/n%C3%A9stor-cano-12a051276/" target="_blank" className='mr-1'>
            <Image className='transition-transform hover:transform hover:scale-110 duration-300 ease-in-out' src={LinkedinIcon} alt='Linkedin Icon' width={65} height={65} />
          </Link>
          <Link href="https://wa.link/d3pt85" target="_blank">
            <Image className='transition-transform hover:transform hover:scale-110 duration-300 ease-in-out' src={WhatsAppIcon} alt='WhatsApp Icon' width={65} height={65} />
          </Link>
          <Link href="https://github.com/Nesticopng" target="_blank">
            <Image className='transition-transform hover:transform hover:scale-110 duration-300 ease-in-out' src={GithubIcon} alt='Github Icon' width={65} height={65} />
          </Link>
        </div>
      </div>
      <div className='z-10'>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Tu email
            </label>
            <input
              name='email'
              type="email"
              id="email"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="jose@example.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block text-sm mb-2 font-medium"
            >
              Asunto
            </label>
            <input
              name='subject'
              type="text"
              id="subject"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Estoy pensando en..."
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Mensaje
            </label>
            <textarea
              name='message'
              id="message"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Vamos a hablar de..."
            />
          </div>
          <button
            type="submit"
            className="bg-primary-500 hover:bg-primary-600 transition duration-300 ease-in-out text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Enviar Mensaje
          </button>
          {
            emailSubmitted && (
              <p className='text-green-500 text-sm mt-2'>
                Email enviado!
              </p>
            )
          }
        </form>
      </div>
    </section>
  )
}

export default EmailSection
