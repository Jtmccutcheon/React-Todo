import React from 'react'
import './Todo.css'

class Todo extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        // console.log(this.props)
        return (
            <div onClick={() => this.props.toggleCompleted(this.props.task.id)} className={this.props.task.completed ? 'completed' : ''}>
                {this.props.task.task}
            </div>
        );
    }
}

export default Todo;