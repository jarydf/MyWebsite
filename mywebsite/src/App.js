import React from "react";
import "./App.css";
import Body from "./Components/Body";
import Header from "./Components/Header";

function App() {
  return (
    <div className="App">
      <head className="App-head">
        <title>jaryd's website</title>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"
        />
      </head>

      <body className="App-body">
        <header className="App-header">
          <Header />
        </header>
        <Body />
      </body>

      <footer className="App-footer"></footer>
    </div>
  );
}

export default App;
