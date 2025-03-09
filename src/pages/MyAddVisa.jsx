import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const MyAddVisa = () => {
  const visasData = useLoaderData();
  const [visas, setVisas] = useState(visasData);
  const [selectedVisa, setSelectedVisa] = useState(null);

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        // Perform the deletion action
        await fetch(`http://localhost:5000/visa/${id}`, {
          method: "DELETE",
        });
        // Remove the deleted visa from the state
        setVisas(visas.filter((visa) => visa._id !== id));

        // Show success alert after deletion
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };
  const handleUpdateVisa = (updatedVisa) => {
    setVisas(
      visas.map((visa) => (visa._id === updatedVisa._id ? updatedVisa : visa))
    );
    setSelectedVisa(null); // Close the modal after update
  };
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">My Added Visas</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {visas.map((visa) => {
          <div key={visa._id} className="border p-4 rounded-lg shadow-md">
            <img
              src={visa.countryImage}
              alt={visa.country}
              className="w-full h-32 object-cover mb-2"
            />
            <h2 className="text-xl font-semibold">{visa.country}</h2>
            <p>Type: {visa.visaType}</p>
            <p>Processing Time: {visa.processingTime}</p>
            <p>Fee: {visa.fee}</p>
            <p>Validity: {visa.validity}</p>
            <p>Application Method: {visa.applicationMethod}</p>
            <div className="mt-4 flex gap-2">
              <button
                onClick={() => setSelectedVisa(visa)}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Update
              </button>
              <button
                onClick={() => handleDelete(visa._id)}
                className="bg-red-500 text-white px-4 py2 rounded"
              >
                Delete
              </button>
            </div>
          </div>;
        })}
      </div>
      {selectedVisa && (
        <UpdateVisaModal
          visa={selectedVisa}
          onClose={() => setSelectedVisa(null)}
          onUpdateVisa={handleUpdateVisa} //Pass the update function
        />
      )}
    </div>
  );
};

export default MyAddVisa;
