import React, {useState, useEffect} from 'react'
import axios from 'axios'
import CreateTodo from './CreateTodo'
import TodoItem from './TodoItem'
import './TodoConatiner.css'



function TodoConatiner() {
    const [isGetTodos, setIsGetTodos] = useState([])
    const [isGetCreate, setIsGetCreate] = useState(null)
    const [isId, setIsId] = useState(null)
    const [isUpId, setIsUpId] = useState(null)

    const getData = async () => {
        const res = await axios.get(`https://todos-academlo.herokuapp.com/api/todos`)
        setIsGetTodos(res.data.todos)
    }

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        if(isGetCreate) {
            const sendPost = async () => {
                const res = await axios.post(`https://todos-academlo.herokuapp.com/api/todo`, {
                task: isGetCreate.task,
                student: isGetCreate.student,
                isCompleted: isGetCreate.isCompleted
            })
            setIsGetTodos((oldItem) => [res.data, ...oldItem])
            }
            sendPost()
        }
    }, [isGetCreate])

    useEffect(() => {
        if(isId) {
            const deleteId = async () => {
                await axios.delete(`https://todos-academlo.herokuapp.com/api/todo/${isId}`)
                getData()
            }
            deleteId()
        }
    }, [isId])

    useEffect(() => {
        if(isUpId) {
            const updateId = async () => {
                await axios.put(`https://todos-academlo.herokuapp.com/api/todo/${isUpId.id}`, {
                    isCompleted: isUpId.isCompleted
                })
                getData()
            }
            updateId()
        }
    }, [isUpId])  

    const handleDelete = (value) => {
        setIsId(value)
    }

    const handleUpdate = (value, checked) => {
        setIsUpId({
            id: value,
            isCompleted: checked
        })
        
    }

    const todosList = isGetTodos.map((value) => {
        return <TodoItem task={value.task} student={value.student} status={value.isCompleted} key={value._id} handleDelete={handleDelete} id={value._id} handleUpdate={handleUpdate}/>
    })


    return (
        <div className="todo__container">
            <CreateTodo setIsGetCreate={setIsGetCreate}/>
            {isGetTodos && todosList}
        </div>
    )
}

export default TodoConatiner
