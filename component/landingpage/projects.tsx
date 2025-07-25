import { div } from 'motion/react-client'
import Image from 'next/image'
import React from 'react'


const projects=[
    {
        title:"macbook",
        src:	""
    },
]
const Projects = () => {
  return (
    <div>
      {
        projects.map((project)=>{
            return <div className="">
                <Image alt={project.title} src={project.src} height="500" width="500" className='aspect-square rounded-3xl' ></Image>
            </div>
        })
      }
    </div>
  )
}

export default Projects
