import React from "react";

export default function ListUser({ users, onDelete, onEdit }) {
  return (
    <table className="table table-dark">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Account</th>
          <th>Password</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {users.map(({ id, account, name, password }) => (
          <tr key={id}>
            <td>{id}</td>
            <td>{name}</td>
            <td>{account}</td>
            <td>{password}</td>
            <td>
              <button
                className="btn btn-primary me-2"
                onClick={() => onEdit(id)}
              >
                Edit
              </button>
              <button
                className="btn btn-danger"
                onClick={() => {
                  onDelete(id);
                }}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
