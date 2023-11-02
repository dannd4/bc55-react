import React from "react";

export default function TodoItem({ todo, onRemove }) {
  return (
    <li
      className={`fs-4 ${
        todo.isCompleted ? "text-decoration-line-through" : ""
      }`}
    >
      <span className="me-4">{todo.title}</span>
      <button
        className="btn btn-danger"
        onClick={() => onRemove(todo.id)}
      >
        X
      </button>
    </li>
  );
}
