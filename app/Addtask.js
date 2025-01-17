'use client'

import React, { useState, useEffect } from 'react'

const Addtask = () => {
    const [isEditing, setisEditing] = useState(false)
    let [title, settitle] = useState("")
    let [desc, setdesc] = useState("")
    const [eTitle, seteTitle] = useState("")
    const [eDesc, seteDesc] = useState("")
    const [mainTask, setmainTask] = useState(() => {
        // get the todos from localstorage
        const savedTodos = localStorage.getItem("todos");
        // if there are todos stored
        if (savedTodos) {
            // return the parsed the JSON object back to a javascript object
            return JSON.parse(savedTodos);
            // otherwise
        } else {
            alert("Data is not exist")
            // return an empty array
            return [];
        }
    });
    
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(mainTask));
    }, [mainTask]);
 
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
        setmainTask(copyTask)

    }

    function handleEditClick(i, etitle, edesc) {
        let UpdateTitle = etitle
        let updateDesc = edesc
        seteTitle(UpdateTitle)
        seteDesc(updateDesc)
        console.log(UpdateTitle)
        console.log(updateDesc)
        let copyTask = [...mainTask]
        copyTask.splice(i, 1)
        setmainTask(copyTask)
        setisEditing(true)
    }

    function handleEditFormSubmit(e) {
        e.preventDefault();
        title = eTitle
        console.log(title)
        desc = eDesc
        console.log(desc)
        setmainTask([...mainTask, { title, desc }])
        seteTitle("")
        seteDesc("")
        console.log(mainTask)
        setisEditing(false);
    }


    let randerTask = <h2>No Task Availabel</h2>
    if (mainTask.length > 0) {
        randerTask = mainTask.map((t, i) => {
            return <li key={i} className='flex justify-between items-center  mb-8'>
                <div className='flex items-center justify-between w-1/2'>
                    <h5 className='text-2xl  font-semibold mr-4'>{t.title}</h5>
                    <h6 className='text-lg font-medium mr-3 '>{t.desc}</h6>
                </div>
                <button onClick={() => {
                    deleteHandler(i)
                }}
                    className='bg-red-600 text-white rounded px-2 py-2 ml-8'>Delete</button>
                <button onClick={() => {
                    handleEditClick(i, t.title, t.desc)
                }} className='bg-blue-600 text-white rounded px-2 py-2 ml-4'>Update</button>
            </li>
        })
    }
    return (
        <div className='parent'>
            {isEditing ?
                <form onSubmit={handleEditFormSubmit}>

                    <h1 className='bg-black text-white font-bold text-center text-5xl p-5 w-screen'>Edit To-do List</h1>
                    <div className='flex justify-around items-center mb-5'>
                        <h2 className='text-center  bg-zinc-800 text-white px-4 ml-4 rounded py-4 font-bold w-1/2 lg:w-1/4 text-2xl'>Edit Title:</h2>
                        <input type="text" name="editTodo" id="editTodo" value={eTitle} onChange={(e) => {
                            seteTitle(e.target.value)
                        }} className='text-2xl px-4 py-2 m-8 border-zinc-700 border-4 w-1/2  md:w-[400px]  lg:w-1/3' required placeholder='Edit Title here' />
                    </div>
                    <div className='flex justify-around items-center mb-5'>
                        <h2 className='text-center bg-zinc-800 text-white px-4 ml-4 rounded py-4 font-bold w-1/2 lg:w-1/4 text-2xl'>Edit Description:</h2>
                        <input type="text" name="editTodo" id="editTodo" value={eDesc} onChange={(e) => {
                            seteDesc(e.target.value)
                        }} className='text-2xl px-4 py-2 m-8 border-zinc-700 border-4 w-1/2 md:w-[400px] lg:w-1/3' placeholder='Edit Description here' required />

                    </div>
                    <div className='flex justify-around items-center  '>
                        <button type="submit" className='text-white bg-blue-600 py-2 px-2 rounded text-xl font-semibold'>Update</button>
                        <button className='text-white bg-red-600 py-2 px-2 rounded text-xl font-semibold' type='submit'  onClick={() => setisEditing(false)}>Cancel</button>
                    </div>
                </form>
                :
                (<>
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

                </>)}</div>
    )
}

export default Addtask