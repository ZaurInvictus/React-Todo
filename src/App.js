import React from 'react';
import './components/TodoComponents/Todo.css';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const Todos = [
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
      Todos
      };
  };


// looping over todos
// finding todo by given id
// changing flag to true
// returning updated list to state.
toggleTodo = id => {
  this.setState({
   Todos: this.state.Todos.map(todo => {
    if(todo.id === id) {
      return {
        ...todo, //same as saying as below 
         // task: todo.task,
         // id: todo.id,
         // completed: todo.completed
         completed: !todo.completed
      }
    } 
    return todo;
   })
 });
}



addTodo = todo => {
  const newTodo = {
    task: todo,
    id: Date.now(),
    completed: false
  };

  this.setState({ 
    Todos: [...this.state.Todos, newTodo]
  });
};

  
clearCompleted = () => {
  // use filter
  // looping over all the todos inside of `this.state.Todos`
  // filter out any items, who's todo.completed === true
  const completedTodos = this.state.Todos.filter(todo => todo.completed === false)
  // set your state with your new filtered list.
  this.setState({ Todos: completedTodos });
};

  render() { 
    return (
      <div className="app">
        <h2>Welcome to your Todo App!</h2>
        <TodoList 
         todos={this.state.Todos}
         toggleTodo={this.toggleTodo}
        />
        <div className="form">
          <TodoForm 
          addTodo={this.addTodo} 
          clearCompleted={this.clearCompleted}
          />
           <button onClick={this.clearCompleted}>Clear Completed</button>
        </div>
      </div>
    );
  }
}

export default App;


// this component is going to take care of state, and any change handlers you need to work with your state

//<App /> will hold all the data needed for this project. It will also be the container for your Todo Components.

//All of your application data will be stored here on <App />.

//All of your handler functions should live here on <App />.

