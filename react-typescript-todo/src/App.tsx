import React, {useState} from 'react';
import './App.css';
import TaskList from './components/TaskList'
import TaskInput from './components/TaskInput'
import { Task } from './types';

const initialState: Task[] = [
  {
    id: 2,
    title: 'next',
    done: false
  },{
    id: 1,
    title: 'first',
    done: true
  }
]

function App() {

  const [tasks, setTasks] = useState(initialState)

  return (
    <div className="App">
      <TaskInput tasks={tasks} setTasks={setTasks} />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
