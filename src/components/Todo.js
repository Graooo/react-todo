import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { TiDeleteOutline, TiEdit } from "react-icons/ti";
import "./Todo.css";

function Todo({ todos, removeTodo, completeTodo, updateTodo }) {
  const [edit, setEdit] = useState({ id: null, text: "" });

  const submitUpdate = (value) => {
    console.log(value);
    updateTodo(value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    console.log(edit);
    return <TodoForm onSubmit={submitUpdate} value={edit} />;
  }

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      <div onClick={() => completeTodo(todo.id)}>{todo.text}</div>
      <div>
        <TiEdit onClick={() => setEdit(todo)} />
        <TiDeleteOutline onClick={() => removeTodo(todo.id)} />
      </div>
    </div>
  ));
}

export default Todo;
