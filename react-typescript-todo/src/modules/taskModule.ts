import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {Task} from '../types'

type State = {
    count: number
    tasks: Task[]
}

const initialState: State = {
    count: 2,
    tasks: [{
        id: 2,
        title: 'next',
        done: false
    },{
        id: 1,
        title: 'first',
        done: true
    }]
}

const tasksModule = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTasks (state: State, action: PayloadAction<string>) {
            state.count++

            const newTask: Task = {
                id: state.count,
                title: action.payload,
                done: false 
            }

            state.tasks = ([newTask, ...state.tasks])
        },
        doneTasks (state: State, action: PayloadAction<Task>) {
            const task = state.tasks.find(t => t.id === action.payload.id)
            if (task) {
                task.done = !task.done
            }
            // state.tasks.map(t => 
            //     t.id === action.payload.id 
            //     ? {...t, done: !action.payload.done} 
            //     : t
            // ))

        },
        deleteTasks (state: State, action: PayloadAction<Task>) {
            state.tasks = state.tasks.filter(t => t.id !== action.payload.id)
        }
    }
})

export const {
    addTasks, doneTasks, deleteTasks
} = tasksModule.actions

export default tasksModule