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

export default counterReducer;
