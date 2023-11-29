import React from "react";
import SeatList from "./SeatList";
import Tickets from "./Tickets";
import data from "./data.json";

export default function BusTicket() {
  return (
    <div className="container">
      <h1>Bus Ticket</h1>
      <div className="row">
        <div className="col-6">
          <SeatList seats={data} />
        </div>
        <div className="col-6">
          <Tickets />
        </div>
      </div>
    </div>
  );
}
