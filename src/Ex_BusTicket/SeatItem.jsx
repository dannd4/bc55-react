import React from "react";
import cn from "classnames";
import { useDispatch } from "react-redux";
import { selectSeat } from "../redux/slices/busTicketSlice";

export default function SeatItem({ seat, isSelected }) {
  const dispatch = useDispatch();

  const handleSelect = () => {
    // dispatch({
    //   type: "busTicket/selectSeat",
    //   payload: { ...seat, isSelected: !isSelected },
    // });

    dispatch(selectSeat({ ...seat, isSelected: !isSelected }));
  };

  return (
    <button
      className={cn("btn m-2", {
        "btn-danger": seat.isBooked,
        "btn-success": isSelected,
        "btn-secondary": !seat.isBooked && !isSelected,
      })}
      disabled={seat.isBooked}
      onClick={handleSelect}
    >
      {seat.name}
    </button>
  );
}
