import React from "react";
import logo from "../assets/images/logo with name.svg";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="mt-16 grid w-full grid-cols-1 items-center justify-center gap-y-5 bg-secondary py-10 pl-16 max-lg:px-12 max-md:text-center sm:grid-cols-2 lg:grid-cols-4">
      <div className="logo item-center flex w-full justify-center md:justify-start">
        <Link to={"/"} className="w-fit hover:text-orange">
          <img src={logo} alt="EthioTourism Logo" />
        </Link>
      </div>
      <div className="pages">
        <h3 className="title mb-2 font-semibold">Pages</h3>
        <div className="flex flex-col">
          <Link to={"/"} className="hover:text-orange">
            Home
          </Link>
          <Link to={"about"} className="hover:text-orange">
            About
          </Link>
        </div>
      </div>
      <div className="legal">
        <h3 className="title mb-1 font-semibold">Legal</h3>
        <div className="flex flex-col gap-1">
          <Link to={"#"} className="hover:text-orange">
            Home
          </Link>
          <Link to={"#"} className="hover:text-orange">
            About
          </Link>
        </div>
      </div>
      <div className="contact self-end">
        <h3 className="title mb-1 font-semibold">Contact</h3>
        <div className="flex flex-col gap-1">
          <a href="tel:+251000000" className="">
            +251000000
          </a>
          <a href="mail:ethiotourism@gmail.com" className="">
            ethiotourism@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
