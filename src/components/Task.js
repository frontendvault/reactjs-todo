import React from 'react'
import {FaTimes} from 'react-icons/fa'


const Task = ({task, onDelete, onToggle}) => {
    return (
      
            <div
                className={ `task bg-light mt-2 p-2 border-bottom  ${task.reminder
                ? 'reminder'
                : ''}`}
                onDoubleClick={() => onToggle(task.id)}>
                <h6 className="d-flex justify-content-between">
                    {task.text}

                    <FaTimes
                        onClick={() => onDelete(task.id)}
                        style={{
                        color: 'red',
                        cursor: 'pointer'
                    }}/>
                </h6>
                <p className="mb-0" >
                    {task.day}
                </p>
            </div>
       
    )
}
export default Task