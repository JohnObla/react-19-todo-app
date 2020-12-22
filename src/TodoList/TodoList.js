import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Todo from '../Todo/Todo';
import NewTodoForm from '../NewTodoForm/NewTodoForm';

class TodoList extends Component {
  state = { todos: [{ task: 'Get the dog', id: uuidv4() }] };

  addTodo = task => {
    const updatedTodos = [...this.state.todos];
    updatedTodos.push({ task, id: uuidv4() });
    this.setState({ todos: updatedTodos });
  };

  destroyTodo = id =>
    this.setState(state => ({
      todos: state.todos.filter(todo => todo.id !== id),
    }));

  renderTodoList = () =>
    this.state.todos.map(todo => (
      <Todo
        key={todo.id}
        id={todo.id}
        task={todo.task}
        destroyTodo={this.destroyTodo}
      />
    ));

  render() {
    return (
      <div>
        <h1>Todo List!</h1>
        <h5>A Simple React Todo List App.</h5>
        {this.renderTodoList()}
        <NewTodoForm submitForm={this.addTodo} />
      </div>
    );
  }
}

export default TodoList;
