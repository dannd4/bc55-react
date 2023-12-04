import { SELECT_SEAT, REMOVE_SEAT } from "../constants/busTicketConstants";

const busTicketState = {
  selectedSeats: [],
  totalPrice: 0,
};
const busTicketReducer = (state = busTicketState, action) => {
  switch (action.type) {
    case SELECT_SEAT: {
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
    case REMOVE_SEAT: {
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

export default busTicketReducer;
