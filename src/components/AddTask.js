import { useRef, useState } from 'react'

export default function AddTask({tasklist,setTasklist,update,setUpdate}) {
  
  const name = useRef("");  

  const handleSubmit =(e)=>{
    e.preventDefault();
    const date = new Date();
    if(update.id){
      const updateTasklist = tasklist.map((task)=>
      task.id === update.id ?{id:task.id,name:update.name,date:`${date.toLocaleTimeString()} ${date.toLocaleDateString()}`}:{id:task.id,name:task.name,date:task.date});
      setTasklist(updateTasklist);
      setUpdate({});
    }
    else{
      const newTask = {
        id: date.getTime(),
        name: name.current.value,
        date: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
      }
     setTasklist([...tasklist,newTask]);
     setUpdate({});
    }
    name.current.value="";
  }

  return (
    <section className='addTask'>
        <form onSubmit={(e)=>handleSubmit(e)} >
        <input type="text" name='task' value={update.name || ""} onChange={(e)=>setUpdate({...update,name:name.current.value})} autoComplete='off' placeholder='add task' maxLength='50' ref={name} />
        <button type='submit'>{update.id?"Update":"Add"}</button>
        </form>
    </section>
  )
}
