import { configureStore } from "@reduxjs/toolkit";

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "counter/increase":
      return state + 1;
    case "counter/decrease":
      return state - 1;
    case "counter/increaseByAmount":
      return state + action.payload;
    default:
      return state;
  }
};

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

const busTicketState = {
  selectedSeats: [],
  totalPrice: 0,
};
const busTicketReducer = (state = busTicketState, action) => {
  switch (action.type) {
    case "busTicket/selectSeat": {
      const { isSelected, ...seat } = action.payload;

      if (isSelected) {
        const selectedSeats = [...state.selectedSeats, seat];
        const totalPrice = state.totalPrice + seat.price;
        return { ...state, selectedSeats, totalPrice };
      }

      const selectedSeats = state.selectedSeats.filter(
        (item) => item.id !== seat.id
      );
      const totalPrice = state.totalPrice - seat.price;
      return { ...state, selectedSeats, totalPrice };
    }
    case "busTicket/removeSeat": {
      const seat = action.payload;
      const selectedSeats = state.selectedSeats.filter(
        (item) => item.id !== seat.id
      );
      const totalPrice = state.totalPrice - seat.price;
      return { ...state, selectedSeats, totalPrice };
    }
    default:
      return state;
  }
};

const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer,
    busTicket: busTicketReducer,
  },
});

const state = store.getState();
console.log("state ban đầu:", state);

store.subscribe(() => {
  const state = store.getState();
  console.log("state mới:", state);
});

console.log("dispatch action increase");
store.dispatch({ type: "counter/increase" });

console.log("dispatch action decrease");
store.dispatch({ type: "counter/decrease" });

console.log("dispatch action increase by amount");
store.dispatch({ type: "counter/increaseByAmount", payload: 10 });

export default store;
