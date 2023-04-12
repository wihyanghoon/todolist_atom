import React from "react";
import { useForm } from "react-hook-form";
import { toDoAtom } from "../atom";
import { useRecoilState } from "recoil";

type FormTypes = {
  todo: string;
};

const CreateTodo = () => {
  const [todos, setTodos] = useRecoilState(toDoAtom);

  // watch = value값 확인 가능한 function
  // setValue = value 초기화하거나 value에 접근 할수 있음
  const { register, handleSubmit, setValue } = useForm<FormTypes>();

  const onVaild = ({ todo }: FormTypes) => {
    setTodos((prev) => [
      { id: Date.now(), text: todo, category: "TO_DO" },
      ...prev,
    ]);
    setValue("todo", "");
  };

  return (
    <form onSubmit={handleSubmit(onVaild)}>
      <input
        {...register("todo")}
        type="text"
        placeholder="내용을 추가하세요."
      />
      <button>추가</button>
    </form>
  );
};

export default CreateTodo;
