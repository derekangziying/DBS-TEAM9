import React from "react";
import { Link } from "react-router-dom";
import AuthOptions from "../layout/HeaderOptions";

export default function Header() {
  return (
    <header id="header">
      <Link to="/">                                         {/*Link tag to have a text that links to the root directory. */}
        <h1 className="title">DBS Customer Service Admin Panel</h1>
      </Link>
      <AuthOptions />
    </header>
  );
}
