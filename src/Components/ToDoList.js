import React from "react";
import ToDo from "./ToDo";

function ToDoList({ todos, setTodos }) {
  function completeAll() {
    setTodos(
      todos.map((todo) => {
        return { ...todo, completed: true };
      })
    );
  }

  function removeAll() {
    setTodos([]);
  }
  return (
    <div className="container p-4">
      {todos.map((todo) => (
        <ToDo
          todos={todos}
          setTodos={setTodos}
          key={todo.id}
          text={todo.text}
          todo={todo}
        />
      ))}
      <div className="row pt-4">
        <div className=" col-6">
          <button
            className="btn btn-success w-100 text-nowrap"
            onClick={completeAll}
          >
            Complete All
          </button>
        </div>
        <div className=" col-6">
          <button
            className="btn btn-danger w-100 text-nowrap"
            onClick={removeAll}
          >
            Remove All
          </button>
        </div>
      </div>
    </div>
  );
}

export default ToDoList;
