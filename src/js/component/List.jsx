import React from "react";
import "./List.css"; // Importar el archivo CSS para estilos adicionales

const List = ({ tasks, setTasks }) => {
  const handleDeleteTask = (indexToDelete) => {
    const newTasks = tasks.filter((_, index) => index !== indexToDelete);
    setTasks(newTasks);
  };

  return (
    <div className="mt-4">
      {tasks.length === 0 ? (
        <p className="text-center">No hay tareas, añadir tareas.</p>
      ) : (
        <ul className="list-group">
          {tasks.map((task, index) => (
            <li
              key={index}
              className="list-group-item d-flex justify-content-between align-items-center position-relative"
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
    </div>
  );
};

export default List;
