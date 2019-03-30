import React from "react";
import ReactDOM from "react-dom";
import News from "./News";

import "./styles.css";

/* function handleRefresh() {
  window.location.reload();
} */

function App() {
  return (
    <div className="App">
      <h1>News Headlines</h1>
      <News />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
