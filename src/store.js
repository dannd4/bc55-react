import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./redux/reducers/counterReducer";
import todoReducer from "./redux/reducers/todoReducer";
// import busTicketReducer from "./redux/reducers/busTicketReducer";
import busTicketReducer from "./redux/slices/busTicketSlice";
import userReducer from "./redux/slices/userSlice";

// const loggerMiddleware = (store) => {
//   return (next) => {
//     return (action) => {
//       console.log("Action:", action);
//       next(action);
//     };
//   };
// };

// const asyncMiddleware = (store) => (next) => (action) => {
//   // Kiểm tra nếu action được dispatch là một function
//   if (typeof action === "function") {
//     return action(store.dispatch, store.getState);
//   }

//   // Nếu action là object, tiếp tục gửi action vào store
//   next(action);
// };

const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer,
    busTicket: busTicketReducer,
    user: userReducer,
  },
  // middleware: (getDefaultMiddleware) => [
  //   ...getDefaultMiddleware(),
  //   loggerMiddleware,
  //   asyncMiddleware,
  // ],
});
export default store;

// const state = store.getState();
// console.log("state ban đầu:", state);

// store.subscribe(() => {
//   const state = store.getState();
//   console.log("state mới:", state);
// });

// console.log("dispatch action increase");
// store.dispatch({ type: "counter/increase" });

// console.log("dispatch action decrease");
// store.dispatch({ type: "counter/decrease" });

// console.log("dispatch action increase by amount");
// store.dispatch({ type: "counter/increaseByAmount", payload: 10 });

// const asyncAction = () => {
//   return async (dispatch, getState) => {
//     const { data } = await axios.get("https://api.github.com/users/dannd4");
//     dispatch({ type: "GET_GITHUB_PROFILE", payload: data });
//   };
// };
// store.dispatch(asyncAction());
