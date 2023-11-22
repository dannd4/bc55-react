import React from "react";
import { useUserContext } from "./UserContext";
import ChildC from "./ChildC";

export default function ChildB() {
  const { handleLogout } = useUserContext();
  return (
    <div>
      <h1>ChildB</h1>
      <button onClick={handleLogout}>Logout</button>
      <ChildC />
    </div>
  );
}
