import React from "react";
import ReactDom from "react-dom";

function FCHello() {
  return (
    <>
      <h1>Hello Functional Component!</h1>
    </>
  );
}

class CCHello extends React.Component {
  render() {
    return (
      <>
        <h1>Hello Class Component!</h1>
      </>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <>
        <FCHello />
        <CCHello />
      </>
    );
  }
}

ReactDom.render(<App />, document.getElementById("root"));
