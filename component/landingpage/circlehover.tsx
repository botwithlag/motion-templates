"use client"
import { easeInOut, motion,useAnimate } from "motion/react"
import { span } from "motion/react-client"
import { useState } from "react"

const Circlehover = ({text}:{text:string}) => {
 const [scope,animate]=useAnimate()

    const [hover,setHover]=useState<boolean>(false)
  return (
    <div ref={scope} className="flex">
      <motion.div onMouseEnter={()=>{setHover(true)}} initial={{x:0}} whileHover={{x:10,width:60}} transition={{duration:0.2}}  onMouseLeave={()=>{setHover(false)}} className="bg-neutral-100 relative flex rounded-full z-10 h-5 w-5 border-3 border-neutral-600">
        {hover&&<motion.span initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.3,ease:"easeInOut"}}className="text-xs text-center h-full text-secondary w-full absolute inset-0 ">{text}</motion.span>}
      </motion.div>
    </div>
  )
}

export default Circlehover





