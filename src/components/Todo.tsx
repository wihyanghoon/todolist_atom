import React, { useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { toDoAtom } from "../atom";

type TodoTypes = {
  id: number;
  text: string;
  category: "TO_DO" | "DOING" | "DONE";
};

const Todo = ({ text, category, id }: TodoTypes) => {
  const [todos, setTodos] = useRecoilState(toDoAtom);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = event.currentTarget;
    console.log(event.currentTarget);
    console.log(id);

    setTodos((prev) => {
      const newTodos = prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, category: name as TodoTypes["category"]  };
        }
        return todo;
      });
      return newTodos;
    });
  };

  useEffect(() => {
    console.log(todos);
  }, [todos]);
  return (
    <li>
      <span>{text}</span>
      {category !== "TO_DO" && (
        <button name="TO_DO" onClick={onClick}>
          Todo
        </button>
      )}
      {category !== "DOING" && (
        <button name="DOING" onClick={onClick}>
          Doing
        </button>
      )}
      {category !== "DONE" && (
        <button name="DONE" onClick={onClick}>
          DONE
        </button>
      )}
    </li>
  );
};

export default Todo;
