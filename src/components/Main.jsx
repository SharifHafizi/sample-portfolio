import React from "react";
import { useState } from "react";
import "./Navbar.css";
export default function Main() {
  const [count, setCount] = useState(0);

  setTimeout(() => {
    setCount((oldCount) => oldCount + 1);
  }, "1000");
  return (
    <>
      <h1 className="Main">This is Main Page</h1>
      <h2>{`Auto Count: ${count}`}</h2>
    </>
  );
}
