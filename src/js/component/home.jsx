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
    <div className="container mt-5 d-flex justify-content-center">
      <div className="row w-100 d-flex justify-content-center">
        <div className="col-md-8">
          <h1 className="text-center">ToDo List</h1>
          <input
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
            className="form-control rounded-0"
            type="text"
            placeholder="Introduce Tarea"
          />
          <List tasks={tasks} setTasks={setTasks} />
        </div>
      </div>
    </div>
  );
};

export default BoxInput;
