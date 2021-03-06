import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import "./TodoList.css";

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo.text) return;
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
  };

  const updateTodo = (editTodo) => {
    if (!editTodo.text) return;

    setTodos((prev) =>
      prev.map((todo) => (todo.id === editTodo.id ? editTodo : todo))
    );
  };

  const removeTodo = (id) => {
    const tempArr = [...todos].filter((todo) => todo.id !== id);
    setTodos(tempArr);
  };

  const completeTodo = (id) => {
    const temArr = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(temArr);
  };

  return (
    <div className="todo-app">
      <p className="title">Todo App</p>
      <div className="form">
        <TodoForm onSubmit={addTodo} />
      </div>
      <div className="todo-list">
        <Todo
          todos={todos}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
          updateTodo={updateTodo}
        />
      </div>
    </div>
  );
}

export default TodoList;
