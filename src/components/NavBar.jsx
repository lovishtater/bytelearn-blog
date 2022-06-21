import React from 'react'
import "../assets/css/Navbar.css"
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div class="nav">
      <input type="checkbox" id="nav-check" />
      <div class="nav-header">
        <div class="nav-title">ByteLearn</div>
      </div>
      <div class="nav-btn">
        <label for="nav-check">
          <img src="https://img.icons8.com/ios/50/000000/menu--v1.png"
          alt='menu'
          />
        </label>
      </div>

      <div class="nav-links">
        <Link to="/">Home</Link>
        <Link to="/new">Create Blog</Link>
      </div>
    </div>
  );
}
export default NavBar