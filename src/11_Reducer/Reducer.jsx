import { useReducer, useEffect } from "react";
import axios from "axios";

const initialState = {
  count: 0,

  posts: [],
  isLoading: false,
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increase":
      return { ...state, count: state.count + 1 };
    case "decrease":
      return { ...state, count: state.count - 1 };
    case "get_post_pending":
      return { ...state, isLoading: true };
    case "get_post_fulfilled":
      return { ...state, isLoading: false, posts: action.payload };
    case "get_post_rejected":
      return { ...state, isLoading: false, error: action.error };
    default:
      return state;
  }
};

export default function Reducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleIncrease = () => {
    // Muốn cập nhật state count
    // Dùng hàm dispatch để gửi 1 action vào reducer
    // action là một object có 1 thuộc tính bắt buộc là "type" dùng để mô tả cách state thay đổi
    dispatch({ type: "increase" });
  };
  const handleDecrease = () => {
    dispatch({ type: "decrease" });
  };

  const getPosts = async () => {
    try {
      // setIsLoading(true)
      dispatch({ type: "get_post_pending" });
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      // setIsLoading(false)
      // setPosts(data)
      dispatch({ type: "get_post_fulfilled", payload: data });
    } catch (error) {
      // axios trả về error có format như sau: error: { response?: { data: any } }
      // setIsLoading(false)
      // setError(error.response?.data)
      dispatch({ type: "get_post_rejected", error: error.response?.data });
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  if (state.isLoading) {
    return <h1>Loading...</h1>;
  }

  if (state.error) {
    return <h1>{state.error}</h1>;
  }

  return (
    <div>
      <h1>Reducer</h1>

      <p>Count: {state.count}</p>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>

      <ul>
        {state.posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
