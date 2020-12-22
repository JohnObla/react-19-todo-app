import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
  render() {
    return (
      <div>
        {this.props.task}
        <button type="button" className="Todo-close">
          X
        </button>
      </div>
    );
  }
}

export default Todo;
