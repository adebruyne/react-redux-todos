import React, { Component } from "react";
import { removeTodo } from "./actionCreators";

const Todo = ({ task, removeTodo }) => (
  <li>
    {task}
    <button onClick={removeTodo}>X</button>
  </li>
);

export default Todo;
