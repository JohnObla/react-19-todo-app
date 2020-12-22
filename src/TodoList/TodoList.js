import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Todo from '../Todo/Todo';
import NewTodoForm from '../NewTodoForm/NewTodoForm';
import InlineEdit from '../InlineEdit/InlineEdit';

class TodoList extends Component {
  state = {
    todos: [
      { task: 'Get the dog', id: uuidv4(), isEditing: false },
      { task: 'Do chores', id: uuidv4(), isEditing: false },
      { task: 'Eat dinner', id: uuidv4(), isEditing: false },
    ],
  };

  addTodo = task => {
    const updatedTodos = [...this.state.todos];
    updatedTodos.push({ task, id: uuidv4(), isEditing: false });
    this.setState({ todos: updatedTodos });
  };

  editTodo = id =>
    this.setState(state => ({
      todos: state.todos.map(todo => {
        todo.isEditing = todo.id === id;
        return todo;
      }),
    }));

  submitInlineEdit = (id, task) => {
    this.setState(state => ({
      todos: state.todos.map(todo => {
        if (todo.id !== id) return todo;

        todo.task = task;
        todo.isEditing = false;
        return todo;
      }),
    }));
  };

  destroyTodo = id =>
    this.setState(state => ({
      todos: state.todos.filter(todo => todo.id !== id),
    }));

  renderTodoList = () =>
    this.state.todos.map(todo => {
      if (todo.isEditing) {
        return (
          <InlineEdit
            key={todo.id}
            task={todo.task}
            id={todo.id}
            submitForm={this.submitInlineEdit}
          />
        );
      }

      return (
        <Todo
          key={todo.id}
          id={todo.id}
          task={todo.task}
          destroyTodo={this.destroyTodo}
          editTodo={this.editTodo}
        />
      );
    });

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
