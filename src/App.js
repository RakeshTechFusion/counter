import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(prevCount => prevCount + 1);
  }

  function decrement() {
    setCount(prevCount => prevCount + 1);
  }

  function double() {
    setCount(prevCount => prevCount * 2);
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={double}>Double</button>
    </div>
  );
}
