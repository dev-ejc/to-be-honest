import React from "react";
import Form from "../news/Form";
const Navbar = () => {
  return (
    <nav class="navbar navbar-light bg-primary ">
      <a class="navbar-brand text-white" href="/">
        What is New
      </a>
      <Form />
    </nav>
  );
};

export default Navbar;
