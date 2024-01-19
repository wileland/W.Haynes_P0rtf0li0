import { NavLink } from "react-router-dom";
import "./navigation.css";

const Navigation = () => {
  return (
    <nav>
      <NavLink to="/">About Me</NavLink>
      <NavLink to="/portfolio">Portfolio</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/resume">Resume</NavLink>
    </nav>
  );
};

export default Navigation;
