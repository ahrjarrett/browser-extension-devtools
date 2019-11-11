import React from "react";
import { useSelector, useDispatch } from "react-redux";

import "./App.css";

function App() {
  const dispatch = useDispatch();
  const message = useSelector(state => state.test);
  const handleClick = () =>
    dispatch({ type: "UPDATE_MESSAGE", payload: "updated message!" });

  return (
    <div className="App">
      <header className="App-header">
        <h2>Redux DevTools with Live Reload</h2>
        <p>{message}</p>
        <button onClick={handleClick}>Click me</button>
      </header>
    </div>
  );
}

export default App;
