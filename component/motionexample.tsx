"use client"
import { easeInOut, motion, useMotionValue, useMotionValueEvent, useSpring } from "motion/react"
import { useScroll,useTransform,useMotionTemplate } from "motion/react"
import { useState } from "react"
import { useRef } from "react"
import features from "@/constant/feature"
interface Features{
title:string,
description:string,
content:React.ReactNode
}
const backgrounds=["#46615F","#835C3E","#80599E"]

function MotionExample() {
const [background,setBackground]=useState('')
const containerRef=useRef<HTMLDivElement>(null)
const {scrollYProgress}=useScroll({
    target:containerRef
})

useMotionValueEvent(scrollYProgress,"change",(latest)=>{
   console.log(`latest-->${latest}`)
   setBackground(backgrounds[Math.floor(latest*backgrounds.length)])

})

  return (
    <motion.div 
    animate={{
        background,
    }}
    transition={{
        duration:2,
        ease:"easeInOut"
    }} ref={containerRef}className="flex bg-gray-900 min-h-screen justify-center items-center">
        <div className="flex flex-col gap-10 max-w-4xl mx-auto ">
         {
            features.map((feature,index)=>{
                return <Card key={index}feature={feature}/>
            })
         }

        </div>
      
    </motion.div>
  )
}


function Card({feature}:{feature:Features}){
const ref=useRef<HTMLDivElement>(null)
const { scrollYProgress } = useScroll({
    target:ref,
    offset:["start end","end start"]  // tracks from the start of the div in the viewport to the end of that div 
});

const translateContent=useSpring(useTransform(scrollYProgress,[0,1],[200,-200]),{
    damping:50,

})
const opacityContent=useTransform(scrollYProgress,[0,0.5,1],[0,1,0])
const blur=useTransform(scrollYProgress,[0,0.5,1],[5,0,5])
const scaleText=useTransform(scrollYProgress,[0,0.5,1],[0.5,1.2,0.5])

    return <div ref={ref} key={feature.title} className="grid grid-cols-2 p-15 items-center">

                    <motion.div style={{
                        filter:useMotionTemplate`blur(${blur}px)`,
                        scale:scaleText
                    }}>
                       <h1 className="text-2xl text-white m-2 font-bold">{feature.title}</h1>
                       <p className="text-gray-400 ">{feature.description} </p>
                    </motion.div>
                    <motion.div 
                    style={{
                   y:translateContent,
                   opacity:opacityContent
                    }}>
                        {feature.content}
                    </motion.div>

            </div>

    

}

export default MotionExample
