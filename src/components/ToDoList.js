import React, { useState } from "react";
import TaskList from "./TaskList";

function ToDoList()
{

    const [taskData, setTaskData] = useState(TaskList);

    const toggleTask = (id) =>
    {
        setTaskData(prevTaskData =>
            prevTaskData.map(task =>
                task.id === id ? { ...task, completeStatus: !task.completeStatus } : task
            )
        );
    };

    return(
        <div className="row">
            <div className="col-12 text-center">

                <table>
                    <tbody>
                        <tr>
                            <td>
                                <h2>Task List</h2>
                            </td>
                        </tr>
                        {taskData.map((task) => (
                            <div key={task.id}>
                                <tr className="task-table">
                                    <th>
                                        <p>{task.taskTitle}</p>
                                        <p>{task.description}</p>
                                        <label htmlFor="completeStatus">Task Complete?</label>
                                        <input type="checkbox" name="completeStatus" id="completeStatus" value={task.completeStatus} checked={task.completeStatus} onChange={() => toggleTask(task.id)} />
                                    </th>
                                </tr>
                            </div>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ToDoList;