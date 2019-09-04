import React, { Component } from 'react'

class TodoForm extends Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            addtask: ''
        };
        console.log(this.state)
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = e => {
        console.log('handling submit');
        e.preventDefault();
        console.log(this.props);
        this.props.addTasks(this.state.addtask)
    }

    render() {
        return (
            <div>
                <h2>TodoForm Component</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <input
                            name='addtask'
                            type='text'
                            placeholder='Add new task here'
                            title='Task'
                            onChange={this.handleChange}
                            value={this.state.addtask}
                        />
                        <button>Add</button>
                        <button>Clear</button>
                    </label>
                </form>
            </div>
        );
    }
}

export default TodoForm;