import React from "react";

function Form({ setInputText, todos, setTodos, inputText }) {
  function handleSubmit(e) {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 10000 },
    ]);
    setInputText("");
  }

  function handleChange(e) {
    setInputText(e.target.value);
  }

  return (
    <div className="container pt-4 px-4">
      <form onSubmit={handleSubmit} className=" form-group row">
        <div className="col-6">
          <input
            value={inputText}
            onChange={handleChange}
            type="text"
            className="form-control w-100 border border-primary"
          ></input>
        </div>
        <div className="col-6">
          <button className="btn btn-primary w-100 text-nowrap">
            Add item
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
