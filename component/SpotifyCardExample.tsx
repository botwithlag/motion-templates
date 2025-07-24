"use client"
import React, { useEffect, useState ,useRef} from 'react'
import cardSeedData from '@/constant/spotify'
import { Card } from '@/constant/spotify'
import { motion } from 'motion/react'
function SpotifyCardExample() {

    const [current,setCurrent]=useState<Card|null>(null)
    const cardRef=useRef<HTMLDivElement>(null)
    useEffect(()=>{
    const handleClick=(event:MouseEvent)=>{
        if(cardRef.current && !cardRef.current.contains(event.target as Node))
        {
            setCurrent(null)
        }
    }
        document.addEventListener('mousedown',handleClick)
            
        return()=>{
          document.removeEventListener('mousedown',handleClick)
        }
    
    },[cardRef])
  return (
    <div className=' min-h-screen  flex justify-center items-center bg-white py-20'>
        
        {current&&(<div className='fixed h-full w-[2000px] z-10  inset-0 backdrop-blur-lg '></div>)}
        { current&& (
            <motion.div
            drag
            layoutId={`card-${current.title}`}
             ref={cardRef} className='fixed w-80 h-[500px] z-20 m-auto inset-0  bg-white rounded-2xl'>
                 <motion.img layoutId={`card-img-${current.src}`} src={current.src} alt={current.title}  className='h-70 aspect-square w-full rounded-xl object-cover'/>
                 <motion.div layoutId={`card-content-${current.title}`} className='flex p-3 gap-20 '>
                         <div>
                            <h1 className='font-bold text-[12px]'>{current.title}</h1>
                            <h2 className='h-[12px] w-[50px] overflow-hidden text-gray-500 text-[10px] '>{current.description}</h2>
                         </div>
                         <div>
                            <motion.button layoutId={`card-button-${current.title}`} className='rounded-3xl font-bold text-center text-[10px] p-2.5 bg-neutral-100 hover:bg-green-500'>{current.ctaText}</motion.button></div>
                 </motion.div>
                 <div className='h-60 p-3 text-xs/5 '>
                    {current.content()}
                  </div>
                 <div>

                 </div>
                 </motion.div>
            )
        }
        <div className='flex flex-col gap-5 w-auto'>
         { 
            cardSeedData.map((card,index)=>{
                return <motion.div 
                layoutId={`card-${card.title}`}
                 key={card.title}className=' rounded-2xl flex justify-between gap-10 cursor-pointer bg-white p-5 '>
                    <div className='flex gap-2'>
                        <motion.img layoutId={`card-img-${card.src}`}src={card.src} alt="random" className='h-[50px] rounded-xl' />
                         <motion.div
                        layoutId={`card-content-${card.title}`}>
                            <h1 className='font-bold text-[12px]'>{card.title}</h1>
                            <h2 className='text-gray-500 text-[10px]'>{card.description}</h2>
                         </motion.div>
                    </div>
                    <div><motion.button layoutId={`card-button-${card.title}`} onClick={()=>setCurrent(card)} className='rounded-3xl font-bold text-center text-[10px] p-2.5 bg-neutral-100 hover:bg-green-500'>{card.ctaText}</motion.button></div>
                </motion.div>
            })
         }
        </div>
      
    </div>
  )
}


export default SpotifyCardExample
