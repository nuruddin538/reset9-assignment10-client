import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const AllVisa = () => {
  const [visas, setVisas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVisas = async () => {
      try {
        const response = await axios.get("/api/visas");
        setVisas(Array.isArray(response.data.visas) ? response.data.visas : []);
        setLoading(false);
      } catch (error) {
        toast.error("Failed to fetch visas.");
        setVisas([]);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };
    fetchVisas();
  }, []);
  if (loading) {
    return <div className="text-center py-8">Loading...</div>;
  }
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">All Visas</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {visas.map((visa) => (
          <div key={visa._id} className="bg-white p-4 rounded-lg shadow-md">
            <img
              src={visa.countryImage}
              alt={visa.countryName}
              className="w-full h-40 object-cover rounded-md"
            />
            <h3 className="text-xl font-semibold mt-2">{visa.countryName}</h3>
            <p className="text-gray-600">Visa Type: {visa.visaType}</p>
            <p className="text-gray-600">
              Processing Time: {visa.processingTime}
            </p>
            <p className="text-gray-600">Fee: ${visa.fee}</p>
            <Link to={`/visa-details/${visa._id}`}>
              <button className="w-full mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
                See Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllVisa;
