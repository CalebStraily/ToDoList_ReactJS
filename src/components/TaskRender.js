import React from "react";

function TaskRender({ task, toggleDone })
{
    return (
        <div>
            <div className="row list-container">
                <div className="col-12 list-column">
                    <div className="row">
                        <div className="col-12">
                            <h3>{ task.completeStatus ? <div><del>{task.taskTitle}</del></div> : <div>{task.taskTitle}</div> }</h3>
                        </div>
                        <div className="col-12 d-flex checkBox justify-content-center">
                            <input type="checkbox" checked={task.completeStatus} onChange={() => toggleDone(task.id)} />
                            <h4>{ task.completeStatus ? <del>{task.description}</del> : <div>{task.description}</div> }</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TaskRender;

//{props.taskStatus ? <div className="checkboxTrue">Done!</div> : <div className="checkboxFalse">Unfinished!</div>}