import React from "react";
import "./StyleRouts.css";
import { useState } from "react";
export default function About() {
  const [count, setCount] = useState("");
  setTimeout(() => {
    setCount(() => "Welcome to my page");
  }, "1000");
  return (
    <>
      <h1 className="about">About Page</h1>
      <h2>{`${count}`}</h2>
    </>
  );
}
