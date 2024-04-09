import { useState } from "react";
import "./Navbar.scss";

const Navbar = () => {
    const [menuOpen,setMenuOpen]=useState(false);

  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="logo.png" alt="" />
          <span>Real Estate</span>
        </a>

        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">Agents</a>
      </div>
      <div className="right">
        <a href="">Sign in</a>
        <a href="" className="hightlight-btn">Sign up</a>
      </div>
      <div className="hamburger" onClick={() =>setMenuOpen(!menuOpen)}>
        <img src="menu.png" alt="" />
      </div>
      <div className={menuOpen ? "menu active" : "menu"}>
      <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">Agents</a>
      </div>
    </nav>
  );
};

export default Navbar;
