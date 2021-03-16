import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

import { MAINMENU_ITEMS } from "../data/data";
import "./Navigation.css";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const handleCollapse = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <div>
      <Navbar className="fixed-top nav-menu" expand="md">
        <NavbarBrand href="/" className="text-light">
          <span className="studio-title-nav">PhotoArt</span>
          <span className="studio-subtitle"> Studio</span>
        </NavbarBrand>

        <button
          className="navbar-toggler nav-button"
          type="button"
          onClick={toggle}
        >
          <div className={!isOpen ? "line1" : "change-line1"}></div>
          <div className={!isOpen ? "line2" : "change-line2"}></div>
          <div className={!isOpen ? "line3" : "change-line3"}></div>
        </button>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="p-1 ml-auto" navbar>
            {MAINMENU_ITEMS.map((item) => (
              <NavItem className="nav-item" key={item.id}>
                <NavLink
                  href={item.href}
                  className="m-2 menu-item"
                  onClick={handleCollapse}
                >
                  {item.title}
                </NavLink>
              </NavItem>
            ))}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
