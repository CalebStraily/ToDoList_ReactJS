import React from "react";
import TaskRender from "./TaskRender";

function Body({ tasks, toggleDone })
{
    return(
        <div className="row">
            <div className="col-4"></div>
            <div className="col-4 text-center">
                <table>
                    <tbody>
                        {tasks.map((task) => (
                            <TaskRender key={task.id} task={task} toggleDone={toggleDone} />
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="col-4"></div>
        </div>
    )
}

export default Body;