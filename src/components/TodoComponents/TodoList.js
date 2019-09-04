// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import Todo from './Todo'


const TodoList = props => {
    console.log(props)

    return (
        <div>
            <h2>Current tasks</h2>
            {props.currenttasks.map(task => {
                // console.log(task)
                return (
                    <Todo key={task.id} task={task} toggleCompleted={props.toggleCompleted}

                    // {task.task}
                    />
                )
            })}
        </div>
    )
}

export default TodoList;