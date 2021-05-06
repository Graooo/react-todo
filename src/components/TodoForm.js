import React, { useState } from "react";

function TodoForm({ onSubmit, value }) {
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    console.log("value", value);
    const todo = {
      id: value ? value.id : Math.floor(Math.random() * 10000),
      text: input,
      isComplete: value ? value.isComplete : false,
    };
    console.log(todo);
    onSubmit(todo);
    setInput("");
  };

  return (
    <form onSubmit={handleSumbit}>
      <input onChange={handleInput} type="text" value={input} />
      <button>Add</button>
    </form>
  );
}

export default TodoForm;
