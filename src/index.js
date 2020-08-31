import React from "react";
import ReactDom from "react-dom";

class App extends React.Component {
  render() {
    const name = "Tarrazu";
    return (
      <div>
        <h1 className="title">Hello {name}!</h1>
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById("root"));
