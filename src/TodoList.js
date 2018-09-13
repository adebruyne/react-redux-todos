import React, { Component } from "react";
import Todo from "./Todo";
import { connect } from "react-redux";

class TodoList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let todos = [].map((task, index) => (
      <Todo task={task} key={index} />
    ));
    return (
      <div>
        <ul>{todos}</ul>
      </div>
    );
  }
}
function mapStateToProps(reduxState){
  return{

  }
};

export default connect(mapStateToProps)(TodoList);
