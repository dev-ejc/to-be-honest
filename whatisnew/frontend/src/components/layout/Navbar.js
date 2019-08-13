import React from "react";
import Form from "../news/Form";
const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg item-center navbar-light bg-primary ">
      <a class="navbar-brand text-white mx-auto" href="/">
        To Be Honest
      </a>
      <Form />
    </nav>
  );
};

export default Navbar;
