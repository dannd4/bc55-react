import React from "react";

export default function TodoItem({ todo, onRemove, onUpdate }) {
  return (
    <li
      className={`fs-4 ${
        todo.isCompleted ? "text-decoration-line-through" : ""
      }`}
    >
      <span onClick={() => onUpdate(todo.id)} className="me-4">
        {todo.title}
      </span>
      <button onClick={() => onRemove(todo.id)} className="btn btn-danger">
        X
      </button>
    </li>
  );
}
