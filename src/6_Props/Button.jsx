import React from "react";

export default function Button({
  variant = "primary",
  children,
  onClick
}) {
  const classes = `btn btn-${variant}`;
  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
}

// <Button variant="primary">Submit</Button>
// => <button className='btn btn-primary'>Submit</button>
