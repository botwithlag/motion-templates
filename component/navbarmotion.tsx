"use client"
import { div } from 'motion/react-client'
import Link from 'next/link'
import React from 'react'
import {motion} from 'motion/react'
import { useState,useEffect,useRef } from 'react'

const navItems=[
    {item:"About",
     link:"/about"        
    },
    {
        item:"Home",
        link:"/home"
    },
    {
        item:"Store",
        link:"/store"
    },
    {
        item:"Checkout",
        link:"/checkout"
    }
]


function NavBar() {

const [hover,setHover]=useState<number|null>(null)

  return (
    <nav className='max-w-2xl mx-auto  rounded-xl  flex justify-center bg-neutral-100 px-3 '>
      {
        navItems.map((navItem,index)=>{
            return( <Link key={navItem.item}  className="  relative  px-10 py-2 group text-xs text-center" href={navItem.link}
                  onMouseEnter={()=>setHover(index)} onMouseLeave={()=>setHover(null)} >
                
                {hover===index && <motion.div  layoutId="hover" className='absolute inset-0 w-full h-full rounded-full bg-black'> </motion.div>}
                <span className='relative z-20 group-hover:text-neutral-300'>
                {navItem.item}
                </span> 
            </Link>
            ) 
        })
      }
    </nav>
  )
}

export default NavBar
