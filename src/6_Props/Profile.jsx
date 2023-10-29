import React from "react";

// export default function Profile(props) {
//   const { name, email, age, isAdmin } = props;
//   return ...
// }

export default function Profile({ name, email, age, isAdmin = false }) {
  return (
    <div className="alert alert-success">
      <h3>
        Name: {name}
        {isAdmin && <span>(Admin)</span>}
      </h3>
      <p>Email: {email}</p>
      <p>Age: {age}</p>
    </div>
  );
}
