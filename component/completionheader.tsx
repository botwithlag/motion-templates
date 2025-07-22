"use client"
import React from 'react'
import { motion,scale,useScroll } from 'motion/react'
function CompletionHeader() {
    const {scrollYProgress}=useScroll()
  return (
    <div>
      <motion.div className='h-2 bg-[#ff0088] top-0 left-0 right-0 fixed rounded-2xl ' style={{
          scaleX:scrollYProgress,
          originX:0
        
      }}>

      </motion.div>
    </div>
  )
}

export default CompletionHeader
