import React from "react";
import "./styles/Header.css";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">
        <p>nnminh</p>
      </div>
      <nav className="nav">
        {/* <a href="#features">Features</a>
        <a href="#contact">Contact</a> */}
      </nav>
    </header>
  );
};

export default Header;
