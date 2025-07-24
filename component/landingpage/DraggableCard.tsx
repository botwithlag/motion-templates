"use client"
import React from 'react'
import Image from 'next/image'
import {motion} from 'motion/react'
import { div } from 'motion/react-client'
function DraggableCard() {
  return (
  <div className="div">
      <motion.div drag dragConstraints={{left:0,right:300,top:0,bottom:100}} className='h-[200px] w-50  rounded-xl shadow-2xl text-center cursor-grab'>
       <Image height="10" width="20" alt="led zepplin" className="h-40 aspect-square w-full px-5 py-3 rounded-3xl" src={"https://assets.aceternity.com/demos/led-zeppelin.jpeg"}></Image>
       <div>someName</div>
    </motion.div>
      
  </div>
  )
}

export default DraggableCard
