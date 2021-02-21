import React, { useState, useEffect } from 'react'
import './TodoItem.css'
import { BsFillTrashFill } from 'react-icons/bs'


function TodoItem({task, student, status, handleDelete, id, handleUpdate}) {
    const [isStatus, setIsStatus] = useState()
    const [checked, setChecked] = useState()
    const [color, setColor] = useState()

    useEffect(() => {
        if(status === true) {
            setColor("#28527a")
            setChecked(false)
            setIsStatus(true)
        } else {
            setColor("#e7e6e1")
            setChecked(true)
            setIsStatus(false)
        }
    }, [status])

    return (
        <>
            <div className="todo__item" style={{backgroundColor: color}}>     
                <label>
                    <input type="checkbox" defaultChecked={isStatus} onClick={() => handleUpdate(id, checked)}/>
                    {task} -- {student}
                </label>
                <button onClick={() => handleDelete(id)}><BsFillTrashFill /></button>
            </div>
        </>
    )
}

export default TodoItem
