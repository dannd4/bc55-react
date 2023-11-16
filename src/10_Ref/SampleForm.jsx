import React from "react";

function SampleForm(props, ref) {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    alert("submiting");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>SampleForm</h1>
      <input placeholder="Username" />
      <input placeholder="Email" />
      <button ref={ref} hidden />
    </form>
  );
}

export default React.forwardRef(SampleForm);
