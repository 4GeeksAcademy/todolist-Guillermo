import React, { useEffect, useState } from "react";
import "./List.css";

const List = ({ tasks, setTasks }) => {
  const [counter, setCounter] = useState(tasks.length);

  useEffect(() => {
    setCounter(tasks.length);
  }, [tasks]);

  const handleDeleteTask = (indexToDelete) => {
    setTasks(tasks.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div>
      {tasks.length === 0 ? (
        <p className="text-center">No hay tareas, añadir tareas.</p>
      ) : (
        <ul className="list-group rounded-0">
          {tasks.map((task, index) => (
            <li
              key={index}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              {task}
              <button
                onClick={() => handleDeleteTask(index)}
                className="btn btn-sm delete-button"
              >
                <i className="fa-solid fa-trash"></i>
              </button>
            </li>
          ))}
        </ul>
      )}
      {counter > 0 && (
        <div className="p-2 border border-top-0 fw-light">
          Tareas pendientes: {counter}
        </div>
      )}
    </div>
  );
};

export default List;
