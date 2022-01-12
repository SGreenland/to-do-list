import React, { useState } from "react";
import Form from "./Components/Form";
import ToDoList from "./Components/ToDoList";
import "./App.css";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="main" style={{ maxWidth: "800px", margin: "0 auto" }}>
      <h1 className="mt-3">To-Do List App</h1>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
      />
      <ToDoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
