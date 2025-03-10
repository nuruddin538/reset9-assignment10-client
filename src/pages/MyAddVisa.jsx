import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import UpdateVisaModal from "../components/UpdateVisaModal";

const MyAddVisa = () => {
  const visasData = useLoaderData();
  // console.log(visasData);
  const [visas, setVisas] = useState(visasData);
  const [selectedVisa, setselectedVisa] = useState(null);

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
        // PerForm the deletion action
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
    setselectedVisa(null);
  };
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">
        My Added Visas {visas.length}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {visas.map((visaCard) => (
          <div
            key={visaCard._id}
            className="bg-white border border-gray-200 p-4 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <img
              src={visaCard.countryImage}
              alt={visaCard.country}
              className="w-full h-32 object-cover mb-2"
            />
            <h2 className="text-xl font-semibold">{visaCard.countryName}</h2>
            <p>Type: {visaCard.visaType}</p>
            <p>Processing Time: {visaCard.processingTime}</p>
            <p>Fee: {visaCard.fee}</p>
            <p>Validity: {visaCard.validity}</p>
            <p>Application Method: {visaCard.applicationMethod}</p>
            <div className="mt-4 flex gap-2">
              <button
                onClick={() => setselectedVisa(visaCard)}
                className="bg-blue-500 cursor-pointer text-white px-4 py-2 rounded"
              >
                Update
              </button>
              <button
                onClick={() => handleDelete(visaCard._id)}
                className="bg-red-500 cursor-pointer text-white px-4 py-2 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      {selectedVisa && (
        <UpdateVisaModal
          visa={selectedVisa}
          onClose={() => setselectedVisa(null)}
          onUpdateVisa={handleUpdateVisa}
        ></UpdateVisaModal>
      )}
    </div>
  );
};

export default MyAddVisa;
