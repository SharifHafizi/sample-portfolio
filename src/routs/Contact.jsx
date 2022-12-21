import React from "react";
import "./StyleRouts.css";
import { useState } from "react";
export default function Contact() {
  const [contact, setContact] = useState("");
  setTimeout(() => {
    setContact(() => "Email:sharif.kodehode@gmail.com");
  }, 1000);

  return (
    <>
      <h1 className="contact">Contact Page</h1>
      <h2>{contact}</h2>
    </>
  );
}
