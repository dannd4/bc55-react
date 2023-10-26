import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Content from "./Content";
import Footer from "./Footer";
import "./Home.css";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="wrapper">
        <Sidebar />
        <Content />
      </div>
      <Footer />
    </div>
  );
}
