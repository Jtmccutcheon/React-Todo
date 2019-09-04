import React, { Component } from 'react'

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addtask: ''
        }
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit(event) {
        console.log('handling submit');
    }

    render() {
        return (
            <div>
                <h2>TodoForm Component</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <input
                            name='task'
                            type='text'
                            placeholder='Add new task here'
                            title='Task'
                            value={this.state.addtask}
                            onChange={this.handleChange}
                        />
                        <button>Add</button>
                        <button>Clear</button>
                    </label>
                </form>
            </div>
        );
    }
}

{/* <input
type='checkbox'
/> */}

export default TodoForm;