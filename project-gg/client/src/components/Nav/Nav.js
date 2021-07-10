import React, { useEffect, useState } from "react";
import "./components/Nav.css";

function Nav() {

  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav-black"}`}>
      <img className="logo" src="" alt="GG Logo" />
      <img className="user" src="" alt="user profile" />
    </div>
  );
}

export default Nav;
