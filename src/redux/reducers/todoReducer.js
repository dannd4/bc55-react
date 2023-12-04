const todoState = {
  todos: [
    { id: 1, title: "Learn react", isCompleted: true },
    { id: 2, title: "Learn redux", isCompleted: false },
  ],
};

const todoReducer = (state = todoState, action) => {
  switch (action.type) {
    case "todo/updateTodo": {
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

export default todoReducer;
