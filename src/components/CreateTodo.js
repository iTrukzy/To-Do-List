import React from 'react'
import './CreateTodo.css'
import { useForm } from 'react-hook-form'

function CreateTodo({ setIsGetCreate }) {
    const { register, handleSubmit, reset } = useForm()

    const onGetSumbit = (e) => {
        setIsGetCreate({
            task: e.task,
            student: e.student,
            isCompleted: false
        })
        setIsGetCreate(null)
        reset()
    }

    return (
        <>
            <div className="create__todo">
                <form onSubmit={handleSubmit(onGetSumbit)}>
                    <div className="create__todo__body">
                        <input type="text" ref={register} name="task" placeholder="Write Task..."/>
                        <input type="text" ref={register} name="student" placeholder="Student..."/>
                    </div>
                    <button>Add</button>
                </form>
            </div>
        </>
    )
}

export default CreateTodo
