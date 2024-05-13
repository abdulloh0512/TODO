import React, { useEffect, useRef, useState } from "react";
import { FC } from "react";
import Button from "./Button";
import Filter from "./Filter";
import TodoItem from "./TodoItem";

interface TodoType {
  id: number;
  name: string;
  date: number;
  status: boolean;
}

const TodoApp: FC = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const todoRef = useRef<HTMLInputElement>(null);

  function getData() {
    let data = [];
    if (
      localStorage.getItem("todos") &&
      localStorage.getItem("todos") != null
    ) {
      data = JSON.parse(localStorage.getItem("todos")!);
    }

    return data;
  }

  useEffect(() => {
    const old = getData();
    setTodos(old);
  }, []);

  function openModal() {
    if (document.getElementById("my_modal_3")) {
      (document.getElementById("my_modal_3") as HTMLFormElement).showModal();
    }
  }

  function handleSaveTodo(event: React.MouseEvent) {
    event.preventDefault();
    if (todoRef && todoRef.current && todoRef.current.value) {
      const todo = {
        id: Date.now(),
        name: todoRef.current.value,
        date: new Date(),
        status: false,
      };
      const copied = JSON.parse(JSON.stringify(todos));
      copied.push(todo);
      localStorage.setItem("todos", JSON.stringify(copied));
      setTodos(copied);
      todoRef.current.value = "";
      (document.getElementById("my_modal_3") as HTMLFormElement).close();
    }
  }
  return (
    <>
      <div className="w-1/2 mx-auto mt-4">
        <h1 className="uppercase text-5xl font-bold text-center text-gray-500 mb-10">
          TODO LIST
        </h1>
        <header className="flex justify-between items-center">
          <Button click={openModal}></Button>
          <Filter></Filter>
        </header>

        <div className="todo-wrapper my-8 p-6 bg-gray-300 rounded-lg">
          {todos.length &&
            todos.map((el, index) => {
              return <TodoItem data={el}></TodoItem>;
            })}
        </div>
      </div>

      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <h3 className="text-2xl text-center font-bold mb-3">
            Enter task name
          </h3>
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
            <div className="form flex flex-col gap-3">
              <input
                ref={todoRef}
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
              />
              <button
                onClick={handleSaveTodo}
                className="btn btn-primary text-2xl px-8 w-3/4 mx-auto"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default TodoApp;
