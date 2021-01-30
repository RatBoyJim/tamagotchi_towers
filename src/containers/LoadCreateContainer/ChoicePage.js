import React, {useState} from "react";
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from "react-router-dom";

const ChoicePage = ({onSubmit}) => {
  
  

  return (
  <div>
    <h4>Create or Load</h4>
    <p>Choose wheather to create a new Tamagotchi or load a previously saved Tamagotchi</p>
    <br></br>
    <Link  from="/choicepage" to="/createpage">
      <button type="button">
          Create
      </button>
    </Link>
    <Link  from="/choicepage" to="/loadpage">
      <button type="button">
          Load
      </button>
    </Link>
  </div>
  )};

export default ChoicePage;