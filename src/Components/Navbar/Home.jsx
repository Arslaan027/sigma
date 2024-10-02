import { IoHomeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Home = ({ activeLink, handleLinkClick }) => {
  return (
    <div>
      <Link
        to="/"
        onClick={() => handleLinkClick("Home")}
        className={`flex dark:bg-gray-800 dark:text-gray-100 items-center space-x-2 px-4 py-2 rounded-md ${
          activeLink === "Home" ? "bg-gray-200 text-black" : "hover:bg-gray-200"
        }`}
      >
        <IoHomeOutline className="text-xl" />
        <span>Home</span>
      </Link>
    </div>
  );
};
Home.propTypes = {
  activeLink: PropTypes.string.isRequired,
  handleLinkClick: PropTypes.func.isRequired,
};

export default Home;
