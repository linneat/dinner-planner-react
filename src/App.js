import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div id="container">
        <div className="titleAndSlogan">
          <h1 id="title">dinnerPlanner</h1>
          <h2 id="slogan">recipes and grocery lists</h2>
        </div>
        <div id="categories">
          <h3 id="headingCat">Whats for dinner tonight?</h3>
        </div>
        <a id="category1" href="american.html">
          <img src="img/burger.svg" alt="burger" className="icon" />
          <h4 className="textCat">American</h4>
        </a>
        <a id="category2" href="italian.html">
          <img src="img/vege-lasagna.svg" alt="lasagna" className="icon" />
          <h4 className="textCat">Italian</h4>
        </a>
        <a id="category3" href="salads.html">
          <img src="img/chicken-salad.svg" alt="chicken salad" className="icon" />
          <h4 className="textCat">Salads</h4>
        </a>
        <a id="category4" href="indian.html">
          <img src="img/indian.svg" alt="indian food" className="icon" />
          <h4 className="textCat">Indian</h4>
        </a>
      </div>
    </div>
  );
}

export default App;
