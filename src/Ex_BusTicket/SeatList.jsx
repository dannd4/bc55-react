import React from "react";
import { useSelector } from "react-redux";
import SeatItem from "./SeatItem";

export default function SeatList({ seats }) {
  // Danh sách những ghế đang được chọn
  const selectedSeats = useSelector((state) => {
    return state.busTicket.selectedSeats;
  });

  return (
    <div className="row">
      <div className="col-12 bg-secondary p-2 text-center text-white">
        Tài xế
      </div>

      {seats.map((seat) => {
        // Kiểm tra xem ghế hiện tại có đang được chọn hay không
        // found = {...} | undefined
        const found = selectedSeats.find((item) => item.id === seat.id);

        return (
          <div key={seat.id} className="col-3">
            <SeatItem seat={seat} isSelected={!!found} />
          </div>
        );
      })}
    </div>
  );
}
