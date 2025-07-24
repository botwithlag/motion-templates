"use client"
import { useEffect } from 'react'
import { stagger, useAnimate,motion } from 'motion/react'
import { span } from 'motion/react-client'
const AnimatedText = () => {
const text="Compared to display: inline, the major difference is that display: inline-block allows to set a width and height on the element."
const [scope,animate]=useAnimate()
useEffect(()=>{
    animate('span',{
    opacity:1,
    filter:`blur(0px)`,
    translateX:1
},{
    duration:1,
    ease:"easeInOut",
    delay:stagger(0.02)
},
)},[])

  return (
    <div ref={scope} className=' max-w-2xl mx-auto text-xl py-50 text-white'>
     {text.split("").map((t,idx)=>{
        return <motion.span 
        style={{
            filter:`blur(10px)`,
            translateX:0

        }}
        key={idx} className='inline opacity-0'>{t}</motion.span>
     })}
    </div>
  )
}

export default  AnimatedText
