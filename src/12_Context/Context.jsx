import React from "react";
import { UserContextProvider } from "./UserContext";
import ChildA from "./ChildA";

export default function Context() {
  return (
    <>
      <UserContextProvider>
        <h1>Context</h1>
        <ChildA />
      </UserContextProvider>
    </>
  );
}
