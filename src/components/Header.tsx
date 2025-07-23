import React, { useState } from "react";
import "./Header.css";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <nav className="header__nav">
        <div className="header__logo">Dream It Medicine</div>
        <div className="header__toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`header__links ${menuOpen ? "show" : ""}`}>
          <li><a href="#mission">Our Mission</a></li>
          <li><a href="#stories">Stories</a></li>
          <li><a href="#get-involved">Get Involved</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
