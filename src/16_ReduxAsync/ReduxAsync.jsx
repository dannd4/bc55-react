import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../redux/slices/userSlice";

export default function ReduxAsync() {
  const dispatch = useDispatch();
  const { users, isLoading, error } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
