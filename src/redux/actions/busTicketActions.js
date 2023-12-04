import { SELECT_SEAT, REMOVE_SEAT } from "../constants/busTicketConstants";

// action creator
export const selectSeat = (seat) => {
  return {
    type: SELECT_SEAT,
    payload: seat,
  };
};

export const removeSeat = (seat) => {
  return {
    type: REMOVE_SEAT,
    payload: seat,
  };
};
