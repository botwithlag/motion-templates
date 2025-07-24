"use client"
import { motion } from "motion/react"
import { div, span } from "motion/react-client"
import { useEffect, useState } from "react"
import { AnimatePresence } from "motion/react"

import React from 'react'
const words=["Designer","Software Engineer","Vibe Coder"]
export default function SwitchWords() {
 const[change,setChange]=useState<number>(0)
 const [state,setState]=useState<boolean>(true)
setTimeout(()=>{
    setState(!state)
},1000)
useEffect(()=>{
    if(state)
     {
        setChange((change+1)%words.length)
     }
},[state])

  return (
    <div className="w-25  rounded-xl h-10 border-1 shadow-md  text-center text-sm border-neutral-300">
        <AnimatePresence>
            {state && ((<motion.span className="inline-block" initial={{opacity:1,filter:`blur(10px)`,y:10 }} transition={{duration:0.2}} animate={{opacity:1,filter:'blur(0px)',y:0}} exit={{opacity:1,filter:`blur(10px)`,y:10}} >{words[change]}</motion.span>))}
        </AnimatePresence>
    </div>
  )
}
