import React, { Component, useState } from "react";
import ReactDom from "react-dom";

function FCHello({ name }) {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>Hello {name}!</h1>
      <h2>{number}</h2>
      <button
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        Plus
      </button>
    </>
  );
}

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
