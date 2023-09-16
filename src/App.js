import logo from "./logo.svg";
import "./App.css";
import { Component, useState } from "react";
import Success from "./success";

function App() {
  const [inputone, setinputone] = useState(0);
  const [inputtwo, setinputtwo] = useState(0);
  const [error, seterror] = useState("");
  const [result, setresult] = useState(null);

  function caluclate(operation) {
    seterror("");
    setresult("");
    if (inputone == "") {
      seterror("input one is required");
    } else if (inputtwo == "") {
      seterror("input two is required");
    } else {
      console.log(operation);

      switch (operation) {
        case "+":
          setresult(Number(inputone) + Number(inputtwo));
          console.log("plus");
          break;
        case "-":
          setresult(Number(inputone) - Number(inputtwo));
          console.log("sub");
          break;
        case "/":
          setresult(Number(inputone) / Number(inputtwo));
          console.log("div");
          break;
        case "x":
          setresult(Number(inputone) * Number(inputtwo));
          console.log("mul");
          break;
      }
    }
  }
  return (
    <>
      <div className="container">
        <div id="main">
          <input
            type="text"
            placeholder="Enter first number"
            onChange={(e) => setinputone(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter second number"
            onChange={(e) => setinputtwo(e.target.value)}
          />

          <div className="button">
            <button onClick={() => caluclate("+")}>+</button>
            <button onClick={() => caluclate("-")}>-</button>
            <button onClick={() => caluclate("/")}>/</button>
            <button onClick={() => caluclate("x")}>X</button>
          </div>
          <div className="result">
            {error || result != null ? (
              <Success message={error} result={result} />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
