import React, {useState} from 'react'
import "./style.css"
import { taskData } from './components/TaskList';
import Header from './components/Header';
import Body from './components/Body';

function App() 
{

    const [tasks, setTasks] = useState(taskData);

    function addTask(title, description)
    {
        const newTaskObj = {
            id: tasks.length + 1,
            taskTitle: title,
            description: description,
            completeStatus: false
        };

        setTasks([...tasks, newTaskObj]);
    }

    function toggleDone(id)
    {
        const updatedTasks = tasks.map((task) =>
            task.id === id ? {...task, completeStatus: !task.completeStatus } : task
        )

        setTasks(updatedTasks);
    }

    return(
        <div className="container-fluid">
            <Header addTask={addTask} />
            <Body tasks={tasks} toggleDone={toggleDone} />
        </div>
    )
}

export default App;