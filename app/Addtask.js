'use client'

import React, { useState } from 'react'

const Addtask = () => {
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
    const deleteHandler = (i) => {
        let copyTask = [...mainTask]
        copyTask.splice(i, 1)
        // let removedTask=copyTask.splice(i,1)
        // console.log(removedTask)
        // console.log(copyTask)
        setmainTask(copyTask)

    }
    // const updateHandler = (e,i) => {
    //   e.preventDefault()
    //   setmainTask([...mainTask, { title, desc }])
    //   settitle("")
    //   setdesc("")
    //   // console.log(mainTask)
    // }
    let randerTask = <h2>No Task Availabel</h2>
    if (mainTask.length > 0) {
        randerTask = mainTask.map((t, i) => {
            return <li key={i} className='flex justify-between items-center mb-8'>
                <div className='flex items-center justify-between w-2/3'>
                    <h5 className='text-2xl font-semibold'>{t.title}</h5>
                    <h6 className='text-lg font-medium'>{t.desc}</h6>
                </div>
                <button onClick={() => {
                    deleteHandler(i)
                }}
                    className='bg-red-600 text-white rounded px-2 py-2'>Delete</button>
                {/* <button onClick={() => {
          updateHandler(i)
          }}className='bg-green-600 text-white rounded px-2 py-2'>Update</button> */}
            </li>
        })
    }
    return (
        <>
            <h1 className='bg-black text-white font-bold text-center text-5xl p-5 w-screen'>Dp's To-do List</h1>
            <form onSubmit={submitHandler} >
                <input type="text" className='text-2xl px-4 py-2 m-8 border-zinc-700 border-4 w-[330px]  md:w-[400px]  lg:w-[400px]' required placeholder='Enter Title here' value={title} onChange={(e) => {
                    settitle(e.target.value)
                }} />
                <input type="text" className='text-2xl px-4 py-2 m-8 border-zinc-700 border-4 w-[330px] md:w-[400px] lg:w-[400px]' placeholder='Enter Description here' required value={desc} onChange={(e) => {
                    setdesc(e.target.value)
                }} />
                <button className='bg-black text-white px-4 py-3 font-bold rounded text-2xl m-5'>Add Task</button>
            </form>
            <hr />
            <div className='p-8 bg-slate-200 '>
                <ul>{randerTask}</ul>
            </div>
        </>
    )
}

export default Addtask