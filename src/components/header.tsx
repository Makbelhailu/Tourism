import logo from "../assets/images/logo with name.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex items-center justify-between px-4 pt-3 xs:px-8 sm:px-16">
      <Link
        to={"/"}
        className="scale-90 pb-2 text-lg hover:text-orange xs:scale-100"
      >
        <img src={logo} alt="EthioTourism Logo" />
      </Link>
      <div className="flex gap-4 xs:gap-6 sm:gap-8 lg:mr-24">
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
