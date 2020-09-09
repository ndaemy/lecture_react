import React, { Component } from "react";
import ReactDom from "react-dom";

import FCHello from "./FCHello";
import CCHello from "./CCHello";

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
