import React from "react";
import SearchModal from "./SearchModal";
const Navbar = () => {
  return (
    <footer className="footer" style={navStyle}>
      <nav class="navbar item-center navbar-light bg-primary ">
        <ul className="navbar-nav item-center">
          <li className="nav-item active"><SearchModal /></li>
        </ul>
      </nav>
    </footer>
  );
};

const navStyle = {
  position: 'absolute',
  bottom: 0,
  width: '100%'
}

export default Navbar;
