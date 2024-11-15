import { v4 as uuidv4 } from "uuid"

export const taskData = [
    {
        id: uuidv4(),
        taskTitle: "Take out the trash",
        description: "It's full and stinks",
        completeStatus: false
    },
    {
        id: uuidv4(),
        taskTitle: "Feed the Fish",
        description: "The fish are hungry!",
        completeStatus: false
    },
    {
        id: uuidv4(),
        taskTitle: "Mow the lawn",
        description: "Grass too tall!",
        completeStatus: true
    },
    {
        id: uuidv4(),
        taskTitle: "Make a v2 of Task List",
        description: "The user should be able to add tasks!",
        completeStatus: true
    }
]