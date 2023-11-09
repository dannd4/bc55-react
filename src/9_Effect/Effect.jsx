import { useState, useEffect } from "react";
import axios from "axios";

export default function Effect() {
  const [posts, setPosts] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts", {
        params: {
          userId: selectedUser || undefined,
        },
      })
      .then((response) => {
        // console.log(response.data);
        setPosts(response.data);
      });
  }, [selectedUser]);

  return (
    <div>
      <h1>Effect</h1>

      <select
        value={selectedUser}
        onChange={(evt) => setSelectedUser(evt.target.value)}
      >
        <option value="">All</option>
        <option value={1}>User 1</option>
        <option value={2}>User 2</option>
        <option value={3}>User 3</option>
        <option value={4}>User 4</option>
      </select>

      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

// Khởi tạo component -> render giao diện -> TỰ ĐỘNG chạy callback của useEffect, call API và set state -> re-render giao diện
