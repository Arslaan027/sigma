import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const About = ({ activeLink }) => {
  return (
    <div>
      <div className="relative group">
        <Link
          to="/about"
          className={`flex items-center space-x-2 px-4 py-2 rounded-md ${
            activeLink === "LogisticsSetup"
              ? "bg-black text-white"
              : "hover:bg-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-100"
          }`}
        >
          <span>About Us</span>
        </Link>
      </div>
    </div>
  );
};

About.propTypes = {
  activeLink: PropTypes.string.isRequired,
};
export default About;
