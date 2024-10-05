import { Link, useLocation } from "react-router-dom";
import BusinessFormation from "./CompanyFormation/BusinessFormation";
// Import other components as needed

const sampleData = [
  {
    id: 1,
    name: "Business Formation",
    alternativeNames: ["Company Formation", "Business Setup", "business"], // Array of alternative names
    description: "Details about the Business Formation process.",
    path: "/business-formation", // Path for navigation
    component: BusinessFormation,
  },
  {
    id: 2,
    name: "Product A",
    alternativeNames: ["Item A", "Product Alpha"], // Array of alternative names
    description: "Details about Product A.",
    path: "/product-a", // Path for navigation
    component: null, // Replace with actual component if needed
  },
  {
    id: 3,
    name: "Service C",
    alternativeNames: ["Service One", "C Service"], // Array of alternative names
    description: "Details about Service C.",
    path: "/service-c", // Path for navigation
    component: null, // Replace with actual component if needed
  },
  // Add more entries as needed
];

// Create a mapping of queries to components
const queryComponentMap = {
  "business formation": BusinessFormation,
  // Add more mappings as needed
};

const SearchResults = () => {
  const location = useLocation();
  const query =
    new URLSearchParams(location.search).get("query")?.toLowerCase() || "";

  // Filter results based on the query, checking both name and alternative names
  const filteredResults = sampleData.filter((item) => {
    const allNames = [item.name, ...item.alternativeNames];
    return allNames.some((name) => name.toLowerCase().includes(query));
  });

  return (
    <div className="p-6 bg-gray-50 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-gray-800">
        Search Results for: {query}
      </h1>
      {filteredResults.length > 0 ? (
        <ul className="mt-6 space-y-4">
          {filteredResults.map((item) => (
            <li
              key={item.id}
              className="bg-white border border-gray-300 rounded-lg shadow hover:shadow-lg transition-shadow duration-200"
            >
              <div className="p-4">
                <h2 className="text-2xl font-semibold text-gray-900">
                  {item.name}
                </h2>
                <p className="mt-2 text-gray-700">{item.description}</p>
                {/* Link to the corresponding route using the path property */}
                {item.path && (
                  <Link
                    to={item.path}
                    className="mt-4 inline-block text-blue-600 hover:underline"
                  >
                    View {item.name}
                  </Link>
                )}
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-6 text-gray-500">No results found.</p>
      )}
    </div>
  );
};

export default SearchResults;
