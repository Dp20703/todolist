'use client'
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setmainTask] = useState([])
  const submitHandler = (e) => {
    e.preventDefault()
    setmainTask([...mainTask, { title, desc }])
    settitle("")
    setdesc("")
    // console.log(mainTask)
  }
  let randerTask = <h2>No Task Availabel</h2>
  if (mainTask.length > 0) {
    randerTask = mainTask.map((t, i) => {
      return <li><div className='flex justify-between mb-5'>
        <h5 className='text-2xl font-semibold'>{t.title}</h5>
        <h6 className='text-xl font-semibold'>{t.desc}</h6>
      </div></li>
    })
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
      <hr />
      <div className='p-8 bg-slate-200'>
        <ul>{randerTask}</ul>
      </div>
    </>
  )
}

export default page