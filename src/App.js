import React from 'react'
import "./style.css"
import ToDoList from './components/ToDoList';

function App() 
{
    return(
        <div className="container-fluid">
            <ToDoList />
        </div>
    )
}

export default App;