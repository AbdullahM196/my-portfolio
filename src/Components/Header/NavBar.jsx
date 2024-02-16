import { useState } from "react";
import "./navbar.css";
import { FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
export default function NavBar() {
  let [show, setShow] = useState(false);
  function openNav() {
    setShow(show ? false : true);
  }
  return (
    <header className="header">
      <a href="#Home">
        <img
          src="./my-photo.png"
          className="ps-0 ms-0"
          alt="logo"
          style={{ width: "150px", height: "70px" }}
        />
      </a>{" "}
      <nav>
        <ul className="navLinks">
          <li>
            <a href="#Home">Home</a>
          </li>
          <li>
            <a href="#About">About</a>
          </li>
          <li>
            <a href="#Skills">Skills</a>
          </li>
          <li>
            <a href="#Portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#Services">Services</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
        </ul>
        <div className="toggle_btn" onClick={openNav}>
          {show == false ? <FaBars /> : <IoCloseSharp />}
        </div>
      </nav>
      <div className={`dropdown_menu ${show ? "show" : ""}`}>
        <li>
          <a href="#Home">Home</a>
        </li>
        <li>
          <a href="#About">About</a>
        </li>
        <li>
          <a href="#Skills">Skills</a>
        </li>
        <li>
          <a href="#Portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#Services">Services</a>
        </li>
        <li>
          <a href="#Contact">Contact</a>
        </li>
      </div>
    </header>
  );
}
