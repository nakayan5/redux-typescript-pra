// import { type } from 'os'
import React, {useState} from 'react'
import { Task } from '../types'


type Props = {
    tasks: Task[]
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}

const TaskList: React.FC<Props> = ({tasks, setTasks}) => {

    const [inputTitle, setInputTitle] = useState('')
    const [count, setCount] = useState(tasks.length + 1)

    const hanleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputTitle(e.target.value)
    }

    const handleSubmit = () => {
        setCount(count + 1)

        const newTask: Task = {
            id: count,
            title: inputTitle,
            done: false 
        }

        setTasks([newTask, ...tasks])
        setInputTitle('')
    }

    return (
        <div className='input-form'>
            <div className='inner'>
                <input type="text" className='input' value={inputTitle} onChange={hanleInputChange} />
            </div>
            <button className='btn is-primary' onClick={handleSubmit}>追加</button>
        </div>
    )
}

export default TaskList