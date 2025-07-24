import React from 'react'
import {cn} from '@/lib/utils'
function Container({children,className}:
    {
        children:React.ReactNode,
        className?:string
    }
) {
    
  return (
    <div className={cn("max-w-xl mx-auto bg-white dark:bg-neutral-500 ",className)}>
      {
        children
      }
    </div>
  )
}

export default Container
