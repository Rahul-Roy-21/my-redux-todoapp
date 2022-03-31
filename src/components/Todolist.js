import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const Todolist = () => {
  const todos = useSelector(state => state.todos);
  // console.log(todos);


  return (todos.length?
    <ul className="list-group">
      {todos.map((todo) => (
        <TodoItem key={todo.id} id={todo.id} title={todo.title} completed={todo.completed} />
      ))}
    </ul>: <h5 className="text-warning">No Todos Yet</h5>
  );
};

export default Todolist;
