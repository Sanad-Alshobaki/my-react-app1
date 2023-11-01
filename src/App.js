import React, { useState } from "react";
import { myTodos, getNextId } from "./todos.js";
import "./App.css";

/*
Rules of state: never mutate state directly!

Todo Deliverables:
- Add element to array: use spread operator!
- Remove element to array: use filter!
- Update element in array: use map!
*/

function App() {
  const [todos, setTodos] = useState(myTodos);
  const [newTodoDescription, setNewTodoDescription] = useState("");

  console.log(todos);

  function addTodo(e) {
    e.preventDefault();
    const newTodo = {
      id: getNextId(),
      description: newTodoDescription,
      completed: false,
    };
    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
  }

  function deleteTode(id) {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  }

  function updateTodo(id, completed) {
    /*
      - iterate over the elements in our todo array
      - check if the ID matches
      - if it does, return an updated todo obj
      - otherwise, return the original todo
    */
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: completed,
          // or just write completed becouse the key and parameter are the same
        };
      } else {
        return todo;
      }
    });
    setTodos(updatedTodos);
  }

  return (
    <div className="App">
      <h2>Add Todos</h2>
      <form onSubmit={addTodo}>
        <label htmlFor="">
          Descreption
          <input
            type="text"
            value={newTodoDescription}
            onChange={(e) => {
              setNewTodoDescription(e.target.value);
            }}
          />
        </label>
        <input type="submit" value="Add todo" />
      </form>
      <h2>My Todos</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <strong>{todo.description}</strong>
            <label htmlFor="">
              Completed?
              <input
                type="checkbox"
                onChange={(e) => {
                  updateTodo(todo.id, e.target.checked);
                }}
                checked={todo.completed}
              />
            </label>
            <button
              onClick={() => {
                deleteTode(todo.id);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
