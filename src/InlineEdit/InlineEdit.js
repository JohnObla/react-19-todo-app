import React, { Component } from 'react';

class InlineEdit extends Component {
  state = { task: `${this.props.task}` };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.submitForm(this.props.id, this.state.task);
  };

  handleChange = evt => this.setState({ task: evt.target.value });

  handleCancel = evt => this.props.cancelEdit();

  render() {
    console.log(this.state.task);
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="task"
          value={this.state.task}
          onChange={this.handleChange}
        />
        <button type="submit">Save</button>
        <button type="button" onClick={this.handleCancel}>
          Cancel
        </button>
      </form>
    );
  }
}

export default InlineEdit;
