"use client"
import React, { useState } from 'react'
import cardSeedData from '@/constant/spotify'
import { Card } from '@/constant/spotify'
import { div } from 'motion/react-client'
function SpotifyCardExample() {

    const [current,setCurrent]=useState<Card|null>(null)

  return (
    <div className='relative min-w-creen min-h-screen flex bg-white justify-center items-center'>
        {
            current&& (
            <div className='fixed w-80 h-[500px] z-20 m-auto inset-0  bg-white rounded-xl'>
               
            </div>
            )
        }
        <div className='flex flex-col gap-5 w-auto'>
         { 
            cardSeedData.map((card,index)=>{
                return <div key={card.title}className=' rounded-2xl flex justify-between gap-10 cursor-pointer bg-white p-5 '>
                    <div className='flex gap-2'>
                        <img src={card.src} alt="random" className='h-[50px] rounded-xl' />
                         <div>
                            <h1 className='font-bold text-[12px]'>{card.title}</h1>
                            <h2 className='text-gray-500 text-[10px]'>{card.description}</h2>
                         </div>
                    </div>
                    <div><button onClick={()=>setCurrent(card)} className='rounded-3xl font-bold text-center text-[10px] p-2.5 bg-neutral-100 hover:bg-green-500'>{card.ctaText}</button></div>
                </div>
            })
         }
        </div>
      
    </div>
  )
}


export default SpotifyCardExample
