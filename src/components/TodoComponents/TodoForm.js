import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        todo: ""
    };
  }

  
  handleChanges = (event) => {
   this.setState({ [event.target.name]: event.target.value });
  }

 
  submitTodo = (e) => {
    e.preventDefault();
     // take the todo off of state
     // send that todo to a function defined on App.js
     console.log('TodoForm Props: ', this.props.addTodo)
     console.log(this.state.todo)
     this.props.addTodo(this.state.todo);
     // reset the state
     this.setState({ todo: "" });
  }


  render() {
    return (
      <form onSubmit={this.submitTodo}>
       <input
         type='text'
         name='todo'
         value={this.state.todo}
         onChange={this.handleChanges}
         placeholder='...todo'
        />
        <button type='submit'>Add ToDo</button>
        <button onClick={this.props.clearCompleted}>Clear Completed</button>
      </form>
    );
  };
};

export default TodoForm;
