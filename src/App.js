import React from 'react';
import Todo from './components/TodoComponents/Todo'
import TodoForm from './components/TodoComponents/TodoForm'
import TodoList from './components/TodoComponents/TodoList'

let Data = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: Data
    };
  }

  toggleCompleted = (id) => {
    console.log('togglecompleted', id)
    this.setState({
      tasks: this.state.tasks.map(task => {
        if (id === task.id) {
          return { ...task, completed: !task.complted }
        } else {
          return task;
        }
      })
    });
  }

  render() {
    // console.log(this.state)
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm newtask={this.state.tasks} />
        <TodoList currenttasks={this.state.tasks} toggleCompleted={this.toggleCompleted} />
      </div>
    );
  }
}

export default App;
