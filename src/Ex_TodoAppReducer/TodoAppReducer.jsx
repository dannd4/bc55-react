import { useReducer } from "react";
import TodoItem from "./TodoItem";

const initialState = {
  todos: [
    { id: 1, title: "Learn Javascript", isCompleted: true },
    { id: 2, title: "Learn React", isCompleted: false },
  ],

  todoTitle: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "remove_todo": {
      const newTodos = state.todos.filter((todo) => todo.id !== action.payload);
      return { ...state, todos: newTodos };
    }
    case "change_title": {
      return { ...state, todoTitle: action.payload };
    }
    case "add_todo": {
      const todo = {
        id: Math.floor(Math.random() * 100),
        title: state.todoTitle,
        isCompleted: false,
      };
      const newTodos = [...state.todos, todo];

      return { ...state, todos: newTodos, todoTitle: "" };
    }
    case "update_todo": {
      const newTodos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, isCompleted: !todo.isCompleted };
        }

        return todo;
      });

      return { ...state, todos: newTodos };
    }
    default:
      return state;
  }
};

export default function TodoAppReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { todos, todoTitle } = state;

  const handleRemoveTodo = (todoId) => {
    dispatch({ type: "remove_todo", payload: todoId });
  };

  const handleChangeTodoTitle = (evt) => {
    dispatch({ type: "change_title", payload: evt.target.value });
  };

  const handleAddTodo = () => {
    dispatch({ type: "add_todo" });
  };

  const handleUpdateTodo = (todoId) => {
    dispatch({ type: "update_todo", payload: todoId });
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
