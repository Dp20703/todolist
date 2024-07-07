'use client'
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const submitHandler = (e) => {
    e.preventDefault()
    console.log(title)
    console.log(desc)
    console.log("Submit kar diya")
    settitle("")
    setdesc("")
  }
  return (
    <>
      <h1 className='bg-black text-white font-bold text-center text-5xl p-5 '>Dp's To-do List</h1>
      <form onSubmit={submitHandler}>
        <input type="text" className='text-2xl px-4 py-2 m-8 border-zinc-700 border-4' placeholder='Enter Title here' value={title} onChange={(e) => {
          settitle(e.target.value)
        }} />
        <input type="text" className='text-2xl px-4 py-2 m-8 border-zinc-700 border-4' placeholder='Enter Description here' value={desc} onChange={(e) => {
          setdesc(e.target.value)
        }} />
        <button className='bg-black text-white px-4 py-3 font-bold rounded text-2xl m-5'>Add Task</button>
      </form>
    </>
  )
}

export default page