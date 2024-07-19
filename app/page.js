'use client'
import React from 'react'
import dynamic from 'next/dynamic'
 
const Addtask = dynamic(() => import('./Addtask'), {
  ssr: false,
})

const page = () => {
  return (
   <>
   <Addtask/>
   </>
  )
}

export default page