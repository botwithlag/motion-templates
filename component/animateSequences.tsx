"use client"
import { motion,useAnimate} from 'motion/react'
import {useEffect} from 'react'
const AnimateSequences = () => {
  const[scope,animate]=useAnimate()
    const startAnimating=()=>{
         animate('span',{
            opacity:0
         },{
            duration:0.2
            }
         );
         animate('button',{
          width:"3rem",
          borderRadius:"1000px"
         },{
          duration:0.2
         })
    }

  return (
    <div ref={scope} className='max-w-2xl mx-auto py-50'>
      <motion.button onClick={()=>startAnimating()} className='w-30 opacity-100 rounded-xl text-center bg-purple-500  '>
      <motion.span style={{
opacity:1
      }}className='span  text-white text-xs font-bold p-1 block'>Complete Transaction</motion.span>
      </motion.button>
    </div>
  )
}

export default AnimateSequences
