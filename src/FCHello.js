import React, { useState } from "react";

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

export default FCHello;
