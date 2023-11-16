import { useRef, useEffect } from "react";
import SampleForm from "./SampleForm";

export default function Ref() {
  const inputRef = useRef();
  const uploadRef = useRef();
  const submitRef = useRef();

  const timer = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = () => {
    console.log(inputRef.current.value);
  };

  const handleChange = (evt) => {
    clearTimeout(timer.current);

    timer.current = setTimeout(() => {
      console.log(evt.target.value);
    }, 300);
  };

  return (
    <div>
      <h1>Ref</h1>

      <input type="text" ref={inputRef} />
      <button onClick={handleSubmit}>Submit</button>

      <hr />

      <input type="file" hidden ref={uploadRef} />
      <button onClick={() => uploadRef.current.click()}>Upload file</button>

      <hr />

      <input type="file" hidden id="upload" />
      <label htmlFor="upload">Upload file</label>

      <hr />

      <SampleForm ref={submitRef} />
      <button
        onClick={() => {
          submitRef.current.click();
        }}
      >
        Submit
      </button>

      <hr />

      <input onChange={handleChange} />
    </div>
  );
}
