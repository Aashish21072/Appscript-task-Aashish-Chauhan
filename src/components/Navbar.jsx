import { FiSearch, FiUser } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { BsBag } from "react-icons/bs";
import "./Navbar.css";


export default function Navbar() {
  return (
    <>
      <div className="topbar">
        <p>Lorem ipsum dolor</p>
        <p>Lorem ipsum dolor</p>
        <p>Lorem ipsum dolor</p>
      </div>

      <div className="navbar">
        <div className="nav-left">
          <img src='./Logo.png' alt="logo" width={40} />
        </div>

        <div className="nav-center">
          <h2>LOGO</h2>
        </div>

        <div className="nav-right">
          <FiSearch />
          <FaRegHeart />
          <BsBag />
          <FiUser />
          <span className="lang">ENG ⌄</span>
        </div>
      </div>

      <div className="menu-bar">
        <ul>
          <li>SHOP</li>
          <li>SKILLS</li>
          <li>STORIES</li>
          <li>ABOUT</li>
          <li>CONTACT US</li>
        </ul>
      </div>
    </>
  );
}