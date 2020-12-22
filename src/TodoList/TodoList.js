import React, { Component } from 'react';
import Todo from '../Todo/Todo';

class TodoList extends Component {
  state = { todos: [{ task: 'Get the dog' }] };

  renderTodoList = () => {};

  render() {
    return (
      <div>
        <Todo name="Get the dog" />
      </div>
    );
  }
}

export default TodoList;
