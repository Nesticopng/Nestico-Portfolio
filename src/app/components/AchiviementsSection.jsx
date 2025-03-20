"use client"
import React from 'react'
import dynamic from 'next/dynamic'

const AnimatedNumbers = dynamic(() => {return import ("react-animated-numbers")}, {ssr:false})

const achiviementsList = [
    {
        metric: "Proyectos",
        value: 7
    },
    {
        metric: "Años",
        value: 2
    }
]

const AchiviementsSection = () => {
  return (
    <div className='py-8 px-4 xl:gap-16 sm:py-16 xl:px-20'>
        <div className='border-[#33353f] border rounded-lg py-8 px-16 flex flex-row items-center justify-evenly'>
            {
                achiviementsList.map((achiviement, index) => {
                    return (
                        <div key={index} className='flex flex-col items-center justify-center mx-4'>
                            <h2 className='text-white text-4xl font-bold'>
                                <AnimatedNumbers 
                                    includeComma
                                    animateToNumber={parseInt(achiviement.value)}
                                    locale='en-US'
                                    className='text-white text-4xl font-bold'
                                    configs={((_, index) => {
                                        return {
                                            mass: 1,
                                            friction: 100,
                                            tensions: 140 * (index + 1)
                                        }
                                    })}
                                />
                            </h2>
                            <p className='text-[#ADB7BE] text-base'>
                                {achiviement.metric}
                            </p>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default AchiviementsSection
