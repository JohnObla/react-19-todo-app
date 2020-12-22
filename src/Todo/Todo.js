import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
  handleDestroy = evt => this.props.destroyTodo(this.props.id);

  handleEdit = evt => this.props.editTodo(this.props.id);

  render() {
    return (
      <div>
        {this.props.task}
        <button onClick={this.handleEdit} type="button" className="Todo-button">
          Edit
        </button>
        <button
          onClick={this.handleDestroy}
          type="button"
          className="Todo-button"
        >
          X
        </button>
      </div>
    );
  }
}

export default Todo;
