import { Link } from "react-router-dom";

const CostCalculator = () => {
  return (
    <div>
      <div className="relative group">
        <Link
          to="/cost-calculator"
          className="flex items-center space-x-2 px-4 py-2 rounded-md hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-100 "
        >
          <span>Cost Calculator</span>
        </Link>
      </div>
    </div>
  );
};

export default CostCalculator;
