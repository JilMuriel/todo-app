import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo, SelectTodoItems, toggleTodo } from "./todoSlice";

export const TodoForm = () => {
  const [todoField, setTodoField] = useState("");
  const dispatch = useDispatch();
  const todoItem = useSelector(SelectTodoItems);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(todoField));
    setTodoField("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="mb-3">
        <input
          type="text"
          placeholder="Add Todo List"
          value={todoField}
          onChange={(e) => setTodoField(e.target.value)}
          className="border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
        />
        <button className="bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">
          Submit
        </button>
      </form>

      <TodoList items={todoItem} />
    </div>
  );
};

export const TodoList = ({ items }) => {
  const dispatch = useDispatch();
  const handleRemove = (id) => {
    dispatch(removeTodo(id));
  };
  const handleUpdate = (id) => {
    dispatch("table", toggleTodo(id));
  };
  return (
    <ul>
      {items.length === 0
        ? "No Todo Items"
        : items.map((item, key) => (
            <TodoItem
              id={item.id}
              title={item.title}
              completed={item.completed}
              handleRemove={() => handleRemove(item.id)}
              onChange={() => handleUpdate(item.id)}
              checked={items.completed}
            />
          ))}
    </ul>
  );
};

export const TodoItem = ({ ...props }) => {
  const { id, title, completed, handleRemove } = props;

  return (
    <li key={id}>
      <label className="flex items-center space-x-4 border">
        <input
          type="checkbox"
          checked={completed}
          className="border"
          {...props}
        />
        {title}
        <button
          className="btn ml-5 border bg-red-800 text-white"
          onClick={handleRemove}
        >
          remove
        </button>
      </label>
    </li>
  );
};

export const Todo = () => {
  return (
    <div className="container">
      <h1>Todo List</h1>
      <TodoForm />
      {/* <TodoList /> */}
    </div>
  );
};

export default Todo;
