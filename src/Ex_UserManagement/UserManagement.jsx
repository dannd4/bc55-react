import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import FormUser from "./FormUser";
import ListUser from "./ListUser";
import toast, { Toaster } from "react-hot-toast";

const base = "https://650f9b0d54d18aabfe9a203b.mockapi.io/api/v1/users_BC55";
export default function UserManagement() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [debounceSearchTerm, setDebounceSearchTerm] = useState(searchTerm);

  const timer = useRef();

  useEffect(() => {
    fetchUsers();
  }, [debounceSearchTerm]);

  const fetchUsers = async () => {
    try {
      const { data } = await axios.get(base, {
        params: {
          name: searchTerm || undefined,
        },
      });
      setUsers(data);
    } catch (error) {}
  };

  const handleAddUser = async (user) => {
    try {
      const response = await axios.post(base, user);
      setUsers([...users, response.data]);
      toast.success("User added successfully");
    } catch (error) {
      toast.error("Error creating user");
    }
  };

  const handleDeteleUser = async (id) => {
    try {
      const response = await axios.delete(`${base}/${id}`);
      toast.success("User Deleted Successfully");
      fetchUsers();
    } catch (error) {
      toast.error("Something Went Wrong");
    }
  };

  const handleSelectUser = async (id) => {
    try {
      const { data } = await axios.get(`${base}/${id}`);
      setSelectedUser(data);
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  const handleUpdateUser = async (id, user) => {
    try {
      await axios.put(`${base}/${id}`, user);
      fetchUsers();
      toast.success("User updated successfully");
    } catch (error) {
      toast.error("Error updating user");
    }
  };

  const handleSearch = (evt) => {
    setSearchTerm(evt.target.value);

    clearTimeout(timer.current);

    timer.current = setTimeout(() => {
      setDebounceSearchTerm(evt.target.value);
    }, 300);
  };

  return (
    <div className="container">
      <Toaster position="top-right" />
      <FormUser
        user={selectedUser}
        onAddUser={handleAddUser}
        onUpdateUser={handleUpdateUser}
      />

      <div className="my-3">
        <input
          placeholder="Seach by name"
          className="form-control"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      <ListUser
        users={users}
        onDelete={handleDeteleUser}
        onEdit={handleSelectUser}
      />
    </div>
  );
}
