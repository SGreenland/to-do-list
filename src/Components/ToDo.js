import React from "react";

function ToDo({ text, todo, todos, setTodos }) {
  const deleteHandler = () => {
    setTodos(todos.filter((item) => item.id !== todo.id));
  };

  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className="row align-items-center py-3 text-center">
      <div className="col-6">
        <li className={`todo-item ${todo.completed ? "completed" : ""} w-100`}>
          {text}
        </li>
      </div>
      <div className="col-3">
        <button
          className="btn btn-outline-success w-100 text-truncate"
          onClick={completeHandler}
        >
          Complete
        </button>
      </div>
      <div className="col-3">
        <button
          className="btn btn-outline-danger w-100 text-truncate"
          onClick={deleteHandler}
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default ToDo;
