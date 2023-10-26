import React from "react";

export default function RenderCondition() {
  let isLoggedIn = true;
  // let unreadMessages = ["lorem 1", "lorem 2"];
  let unreadMessages = [];

  if (!isLoggedIn) {
    return (
      <div>
        <h1>Login to Cyberlearn</h1>
        <button>Login</button>
      </div>
    );
  }

  return (
    <div>
      <h1>Welcome back</h1>

      {/* Trường hợp chỉ muốn hiển thị giao diện cho cả trường hợp điều kiện là true lẫn false */}
      {unreadMessages.length > 0 ? (
        <p>You have {unreadMessages.length} unread messages</p>
      ) : (
        <p>You have no message</p>
      )}

      {/* Trường hợp chỉ muốn hiển thị giao diện nếu điều kiện là true */}
      {unreadMessages.length > 0 && (
        <p>You have {unreadMessages.length} unread messages</p>
      )}

      <button>Logout</button>
    </div>
  );
}
