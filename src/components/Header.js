import React, { useState } from "react";

function Header({ addTask })
{

    const [formData, setFormData] = useState({
        title: '',
        description: ''
    });

    function handleChange(event)
    {
        const { name, value } = event.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    }

    function handleSubmit(event)
    {
        event.preventDefault();

        addTask(formData.title, formData.description);
        setFormData({ title: '', description: '' });
    }

    return(
        <div className="row">
            <div className="col-12 text-center">
                <h1>Caleb's To Do List</h1>
            </div>
            <div className="col-12 text-center pb-5 pt-2">
                <form onSubmit={handleSubmit}>
                    <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Enter Task Title..." required />
                    <input type="text" name="description" value={formData.description} onChange={handleChange} placeholder="Enter Task Description..." required />
                    <button type="submit">Add Task</button>
                </form>
            </div>
        </div>
    )
}

export default Header;