"use client"
import React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import Container from '../Container'
import Link from 'next/link'
import {motion,useScroll,useMotionValueEvent} from 'motion/react'
import { div } from 'motion/react-client'
const navItems=[{
    item:"About",
    href:"/about"
},{
    item:"Projects",
    href:'/projects'
},
{
    item:"Blog",
    href:"/blog"
},
{
    item:"Contacts",
    href:"/contacts"
}]
const Navbar = () => {
    const [hover,setHover]=useState<number|null>(null)
    const [fix,setFix]=useState<boolean>(false)
    const{scrollY}=useScroll()
     useMotionValueEvent(scrollY,"change",(latest)=>{
        console.log(`latest ==> ${latest}`)
         if(latest>10 && fix==false)
         {
            setFix(true);
         }
         if(latest<10 && fix==true)
         {
            setFix(false)
         }
     })
    

    const regularNavbar={
        boxShadow:"none",
        top:"0",
    }

  return (
   <Container>
    <motion.nav
    animate={{
        width:fix?"40%":"100%",
        boxShadow:fix?"var(--shadow-important)":"none",
        y:fix?"10":"0",
    }}
     className='z-5 fixed inset-x-0 flex max-w-xl mx-auto  justify-between p-3 '>
      <Image  className='h-10 w-10 z-50 rounded-full '
      height="20"
      width="50"
      src={"https://assets.aceternity.com/demos/led-zeppelin.jpeg"}
      alt='image'></Image>
      <div className='flex p-2 text-xs z-30'>
        {navItems.map((item,idx)=>{
            return <Link key={item.item} 
               href={item.href} className='relative p-1 group '
               onMouseEnter={()=>{setHover(idx)}}
               onMouseLeave={()=>{setHover(null)}}>
                <span className='relative   z-20 group-hover:text-secondary'>{item.item}</span>
                {hover==idx &&(<motion.div layoutId='hover' className='absolute inset-0 w-full h-full rounded-b-sm bg-neutral-100'> </motion.div>)}
            </Link>
        })}
      </div>
    </motion.nav>
   </Container>
  )
}

export default Navbar
