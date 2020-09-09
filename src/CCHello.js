import React, { Component } from "react";

class CCHello extends Component {
  state = {
    number: 0,
  };

  render() {
    const { name } = this.props;
    return (
      <>
        <h1>Hello {name}!</h1>
        <h2>{this.state.number}</h2>
        <button
          onClick={() => {
            this.setState({ number: this.state.number + 1 });
          }}
        >
          Plus
        </button>
      </>
    );
  }
}

export default CCHello;
