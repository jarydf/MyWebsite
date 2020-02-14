import React from "react";
import "./css/App.css";
import Body from "./Components/Body";
import Header from "./Components/Header";

function App() {
  return (
    <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <Body />
    </div>
  );
}

export default App;
