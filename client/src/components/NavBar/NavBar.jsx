import "./navBar.css";
import { LogOut } from "../logOut";
import { Link } from "react-router-dom";
import { Emoji } from "../Emojis/Emojis";

export const NavBar = (props) => {
  return (
    <header className="navbar">
      <div className="logo">
        BeachFinder
        <Emoji symbol={" 🔎"} label="Magnifying Glass Tilted Right" />
      </div>
      <div className="menu">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <nav className="nav-bar">
        <ul className="nav-bar-list">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          {props.user && (
            <li className="nav-item">
              <LogOut className="nav-link">Log Out</LogOut>
            </li>
          )}
          {!props.user && (
            <li className="nav-item">
              <Link to="/register" className="nav-link">
                Register
              </Link>
            </li>
          )}
          {!props.user && (
            <li className="nav-item">
              <Link to="/signin" className="nav-link">
                Log In
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};
