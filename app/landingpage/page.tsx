import React from 'react'
import Container from '@/component/Container'
import SwitchWords from '@/component/landingpage/switchWords'
import Circlehover from '@/component/landingpage/circlehover'
import DraggableCard from '@/component/landingpage/DraggableCard'
function page() {
  return (
    <div className='min-h-screen flex justify-items-start'>
      <Container className='pt-5 md:pt-10'>
          <div className='flex m-3 gap-2'>
            <h1 className='text-primary  md:text-4xl font-bold tracking-tight'>Hello there</h1>
            <div className='p-2'>
          <SwitchWords></SwitchWords>
        </div>
        </div>
        <p className='text-xs text-neutral-500 pt-4 md:pt-8'>
           added 1 package, and audited 732 packages in 4s
            138 packages are looking for funding
            run `npm fund` for details 
        </p>
        <div className='m-5'>
            <DraggableCard></DraggableCard>
        </div>
   
        
      </Container>
    </div>
  )
}

export default page
