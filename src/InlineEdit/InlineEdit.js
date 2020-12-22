import React, { Component } from 'react';

class InlineEdit extends Component {
  state = { task: `${this.props.task}` };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.submitForm(this.props.id, this.state.task);
  };

  handleChange = evt => this.setState({ task: evt.target.value });

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="task"
          value={this.state.task}
          onChange={this.handleChange}
        />
        <button>Save</button>
      </form>
    );
  }
}

export default InlineEdit;
