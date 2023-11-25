import { useState } from "react";
import useCounter from "./useCounter";
import useWindowSize from "./useWindowSize";
import useDebounce from "./useDebounce";

export default function CustomHook() {
  const { count, handleIncrease, handleDecrease } = useCounter();
  const { width } = useWindowSize();

  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  return (
    <div>
      <h1>CustomHook</h1>

      <p>Count: {count}</p>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>

      <br />

      {width >= 768 ? <h1>Đây là Desktop</h1> : <h1>Đây là Mobile</h1>}

      <br />
      <p>Debounced search term: {debouncedSearchTerm}</p>
      <input
        value={searchTerm}
        onChange={(evt) => setSearchTerm(evt.target.value)}
      />
    </div>
  );
}
