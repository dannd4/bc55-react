import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Tickets() {
  const selectedSeats = useSelector((state) => {
    return state.busTicket.selectedSeats;
  });

  const dispatch = useDispatch();
  const handleRemove = (seat) => {
    dispatch({ type: "busTicket/removeSeat", payload: seat });
  };

  return (
    <div>
      <h3>Danh sách ghế đang chọn</h3>
      {selectedSeats.map((item) => {
        return (
          <p>
            <span>
              Ghế: {item.name} - {item.price}$
            </span>
            <button
              className="btn btn-danger ms-2"
              onClick={() => handleRemove(item)}
            >
              X
            </button>
          </p>
        );
      })}
    </div>
  );
}
