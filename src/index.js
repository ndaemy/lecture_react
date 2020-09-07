import React, { Component } from "react";
import ReactDom from "react-dom";

function FCHello({ name }) {
  return (
    <>
      <h1>Hello {name}!</h1>
    </>
  );
}

class CCHello extends Component {
  render() {
    const { name } = this.props;
    return (
      <>
        <h1>Hello {name}!</h1>
      </>
    );
  }
}

class App extends Component {
  render() {
    return (
      <>
        <FCHello name="Function Component" />
        <CCHello name="Class Component" />
      </>
    );
  }
}

ReactDom.render(<App />, document.getElementById("root"));
