import { Link, useLoaderData } from "react-router-dom";

const MyAddVisa = () => {
  const visas = useLoaderData();
  console.log(visas);
  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
        All Visas {visas.length}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {visas.map((visa) => (
          <div
            key={visa._id}
            className="bg-white border border-gray-200 p-4 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <img src={visa.countryImage} alt="Country Image" />
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              {visa.countryName}
            </h2>
            <p className="text-gray-700 text-sm mb-1">
              Type: <span className="font-medium">{visa.visaType}</span>
            </p>
            <p className="text-gray-700 text-sm mb-1">
              Duration:{" "}
              <span className="font-medium">{visa.processingTime}</span>
            </p>
            <p className="text-gray-700 text-sm mb-1">
              Fee:{" "}
              <span className="font-semibold text-gray-600">${visa.fee}</span>
            </p>
            <Link
              to={`/visa/${visa._id}`}
              className="block text-center bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-medium py-2 rounded-lg shadow-md hover:opacity-90 transition-opacity duration-200"
            >
              See Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAddVisa;
