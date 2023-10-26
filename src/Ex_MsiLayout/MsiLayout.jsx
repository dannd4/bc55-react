import React from "react";
import Header from "./Header";
import Carousel from "./Carousel";
import PhoneList from "./PhoneList";
import LaptopList from "./LaptopList";
import Promotion from "./Promotion";

export default function MsiLayout() {
  return (
    <div className="bg-dark">
      <Header />
      <Carousel />
      <PhoneList />
      <LaptopList />
      <Promotion />
    </div>
  );
}
