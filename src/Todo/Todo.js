import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
  handleDestroy = evt => this.props.destroyTodo(this.props.id);

  render() {
    return (
      <div>
        {this.props.task}
        <button
          onClick={this.handleDestroy}
          type="button"
          className="Todo-close"
        >
          X
        </button>
      </div>
    );
  }
}

export default Todo;
