import React, { Component } from 'react';

class InlineEdit extends Component {
  state = { task: `${this.props.task}` };

  handleSubmit = evt => {};

  render() {
    return (
      <form>
        <input type="text" />
        <button>Save</button>
      </form>
    );
  }
}

export default InlineEdit;
