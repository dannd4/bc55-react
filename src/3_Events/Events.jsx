import React from "react";

// html: <button onclick="handleClick()">Click Me</button>

export default function Events() {
  // Viết hàm xử lý sự kiện trong component
  const handleClick = () => {
    alert("clicked");
  };

  const handleShowMessage = (message) => {
    alert(message);
  };

  const handleChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <div>
      <h1>Events</h1>

      <button onClick={handleClick}>Click Me</button>
      {/* <button
        onClick={() => {
          alert("Cliked");
        }}
      >
        Click Me
      </button> */}

      <button onClick={() => handleShowMessage("BC55")}>Show Message</button>

      <hr />

      <input placeholder="Username" onChange={handleChange} />
    </div>
  );
}
