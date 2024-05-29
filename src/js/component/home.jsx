import React, { useState } from "react";
import List from "./List";

const BoxInput = () => {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTask = () => {
    if (inputValue.trim()) {
      setTasks([...tasks, inputValue]);
      setInputValue("");
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleAddTask();
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h1 className="text-center">ToDo List</h1>
          <input
            id="todo-input"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
            className="form-control"
            type="text"
            placeholder="Introduce Tarea"
          />
        </div>
      </div>
      <List tasks={tasks} setTasks={setTasks} />
    </div>
  );
};

export default BoxInput;
