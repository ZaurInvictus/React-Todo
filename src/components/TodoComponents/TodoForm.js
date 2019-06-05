import React from 'react';

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: ''
    };
  }

  
  handleChanges = (event) => {
   this.setState({ [event.target.name]: event.target.value });
  }

 
  submitTodo = (e) => {
    e.preventDefault();
     // take the todo off of state
     // send that todo to a function defined on App.js
     this.props.addTodo(this.state.todo)
     // reset the state
     //this.setState({ item: ''});
  }


  render() {
    return (
      <form onSubmit={this.submitTodo}>
       <input
         type='text'
         name='todo'
         value={this.state.task}
         onChange={this.handleChanges}
         placeholder='...todo'
        />
        <button type='submit'>Add ToDo</button>
      
      </form>
    );
  };
};

export default TodoForm;
