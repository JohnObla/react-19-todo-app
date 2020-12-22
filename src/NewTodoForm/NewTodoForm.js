import React, { Component } from 'react';

class NewTodoForm extends Component {
  state = { task: '' };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="task">New Todo</label>
        <div>
          <input
            type="text"
            placeholder="New Todo"
            name="task"
            id="task"
            onChange={this.handleChange}
            value={this.state.task}
          />
          <button>Add Todo</button>
        </div>
      </form>
    );
  }
}

export default NewTodoForm;
