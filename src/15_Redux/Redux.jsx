import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Redux() {
  const { todos } = useSelector((state) => {
    // state: { counter: 0, todo: {todos: []} }
    return state.todo;
  });

  const dispatch = useDispatch();

  const handleUpdate = (todoId) => {
    dispatch({ type: "todo/updateTodo", payload: todoId });
  };

  return (
    <div>
      <h1>Redux</h1>

      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={todo.isCompleted ? "text-decoration-line-through" : ""}
            onClick={() => handleUpdate(todo.id)}
          >
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
