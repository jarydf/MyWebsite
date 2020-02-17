import React, { useEffect } from "react";
import "./css/App.css";
import Body from "./Components/Body";
import Header from "./Components/Header";
import * as firebase from "firebase";
import config from "./Config";

function App() {

  useEffect(() => {
    if (!firebase) {
      firebase.initializeApp(config);
    }
  });

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
