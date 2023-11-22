  import React from "react";
  import { useUserContext } from "./UserContext";

  export default function ChildC() {
    const { currentUser } = useUserContext();

    return (
      <div>
        <h1>ChildC</h1>
        {currentUser && (
          <div>
            <img src={currentUser.avatar} alt="avatar" width={100} height={100} />
            <h3>{currentUser.username}</h3>
          </div>
        )}
      </div>
    );
  }
