import React from "react";
import { useUserContext } from "./UserContext";
import ChildB from "./ChildB";

export default function ChildA() {
  const { handleLogin } = useUserContext();

  const handleInputLogin = () => {
    const email = prompt("Email:");
    const password = prompt("Password:");

    handleLogin({ email, password });
  };

  return (
    <div>
      <h1>ChildA</h1>
      <button onClick={handleInputLogin}>Login</button>

      <ChildB />
    </div>
  );
}
