import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useRecoilState, useRecoilValue } from "recoil";
import { toDoAtom } from "./atom";
import CreateTodo from './components/CreateTodo';
import Todo from "./components/Todo";

const ToDoList = () => {
  const [todos, setTodos] = useRecoilState(toDoAtom)

  return (
    <div>
      <h1>To DO</h1>
      <hr />
      <CreateTodo />
      <h2>todo</h2>
        <ul>
          {todos.map((todo) => {
            if(todo.category ==="TO_DO") {
              return <Todo {...todo}/>;
            }
          })}
      </ul>
      <h2>DONE</h2>
        <ul>
          {todos.map((todo) => {
            if(todo.category === "DONE") {
              return <Todo {...todo}/>;
            }
          })}
      </ul>
      <h2>DOING</h2>
        <ul>
          {todos.map((todo) => {
            if(todo.category === "DOING") {
              return <Todo {...todo}/>;
            }
          })}
      </ul>
    </div>
  );
};

export default ToDoList;
