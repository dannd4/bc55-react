import { useState } from "react";
import TodoItem from "./TodoItem";

export default function TodoApp() {
  const [todos, setTodos] = useState([
    { id: 1, title: "Learn Javascript", isCompleted: true },
    { id: 2, title: "Learn React", isCompleted: false },
  ]);
  const [todoTitle, setTodoTitle] = useState("");

  const handleRemoveTodo = (todoId) => {
    const newTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(newTodos);
  };

  const handleChangeTodoTitle = (evt) => {
    setTodoTitle(evt.target.value);
  };

  const handleAddTodo = () => {
    const todo = {
      id: Math.floor(Math.random() * 100),
      title: todoTitle,
      isCompleted: false,
    };

    setTodos([todo, ...todos]);
    setTodoTitle("");
  };

  const handleUpdateTodo = (todoId) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }

      return todo;
    });

    setTodos(newTodos);
  };

  return (
    <div className="container">
      <h1 className="text-center">Todo App</h1>

      <div className="w-50 mb-3 d-flex align-items-center">
        <input
          className="form-control me-2"
          value={todoTitle}
          onChange={handleChangeTodoTitle}
        />
        <button className="btn btn-primary" onClick={handleAddTodo}>
          Add
        </button>
      </div>

      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onRemove={handleRemoveTodo}
            onUpdate={handleUpdateTodo}
          />
        ))}
      </ul>
    </div>
  );
}
