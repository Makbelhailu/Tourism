import React from "react";
import logo from "../assets/images/logo with name.svg";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="flex items-center justify-between px-16 py-3">
      <Link to={"/"} className="text-lg font-semibold hover:text-orange">
        <img src={logo} alt="EthioTourism Logo" />
      </Link>
      <div className="flex gap-8">
        <Link to={"/"} className="text-lg font-semibold hover:text-orange">
          Home
        </Link>
        <Link to={"/about"} className="text-lg font-semibold hover:text-orange">
          about
        </Link>
      </div>
    </div>
  );
};

export default Header;
