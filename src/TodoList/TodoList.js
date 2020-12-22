import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Todo from '../Todo/Todo';
import NewTodoForm from '../NewTodoForm/NewTodoForm';

class TodoList extends Component {
  state = { todos: [{ task: 'Get the dog', id: uuidv4() }] };

  renderTodoList = () =>
    this.state.todos.map(todo => (
      <Todo key={todo.id} id={todo.id} task={todo.task} />
    ));

  renderNewTodoForm = () => <NewTodoForm />;

  render() {
    return (
      <div>
        <h1>Todo List!</h1>
        <h5>A Simple React Todo List App.</h5>
        {this.renderTodoList()}
        {this.renderNewTodoForm()}
      </div>
    );
  }
}

export default TodoList;
