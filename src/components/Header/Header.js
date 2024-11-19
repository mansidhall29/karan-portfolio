import React from "react";
import { Nav, Logo, NavLink, Bars, NavMenu } from "./HeaderElements";

const Header = ({ toggle }) => {
  return (
    <div className="Container" style={{ padding: 0 }}>
      <Nav>
        <Logo to="/">{/* <img src="/logo-km.png" alt="logo" /> */}</Logo>
        <NavMenu>
          <NavLink className="menu-item" to="projects">
            Projects
          </NavLink>
          <NavLink className="menu-item" to="about">
            About
          </NavLink>
          <NavLink className="menu-item" to="upcoming-shows">
            Upcoming Shows
          </NavLink>
          <NavLink className="menu-item" to="gallery">
            Gallery
          </NavLink>
          <NavLink className="menu-item" to="contact">
            Contact
          </NavLink>
        </NavMenu>
        <Bars onClick={toggle} />
      </Nav>
    </div>
  );
};

export default Header;
