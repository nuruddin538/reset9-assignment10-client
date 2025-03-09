import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const VisaDetails = () => {
  const visa = useLoaderData();
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="p-6 flex justify-center">
      <div className="w-full bg-white border border-gray-200 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Visa Details
        </h1>
        <img
          className="w-full h-64"
          src={visa.countryImage}
          alt="Country Image"
        />
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
          <span className="font-bold">Country Name:</span> {visa.countryName}
        </h2>
        <p className="text-gray-700 text-sm mb-2">
          <span className="font-medium">
            <span className="font-bold">VisaType:</span> {visa.visaType}
          </span>
        </p>
        <p className="text-gray-700 text-sm mb-2">
          <span className="font-medium">
            <span className="font-bold">Processing Time:</span>{" "}
            {visa.processingTime}
          </span>
        </p>
        <p className="text-gray-700 text-sm mb-2">
          <span className="text-gray-600 font-medium">
            <span className="font-bold">Description:</span> {visa.description}
          </span>
        </p>
        <p className="text-gray-700 text-sm mb-2">
          <span className="font-medium">
            <span className="font-bold">Required Documents:</span>{" "}
            {visa.requiredDocuments}
          </span>
        </p>
        <p className="text-gray-700 text-sm mb-2">
          <span className="font-medium">
            <span className="font-bold">Age Restriction:</span>{" "}
            {visa.ageRestriction}
          </span>
        </p>
        <p className="text-gray-700 text-sm mb-2">
          <span className="font-medium">
            <span className="font-bold">Application Method:</span>{" "}
            {visa.applicationMethod}
          </span>
        </p>
        <p className="text-gray-700 text-sm mb-2">
          <span className="font-medium">
            <span className="font-bold">Visa Fee:</span> {visa.fee}
          </span>
        </p>
        <p className="text-gray-700 text-sm mb-2">
          <span className="font-medium">
            <span className="font-bold">Visa Type:</span> {visa.visaType}
          </span>
        </p>
        <p className="text-gray-700 text-sm mb-2">
          <span className="font-medium">
            <span className="font-bold">Validity:</span> {visa.validity}
          </span>
        </p>
        <button
          onClick={() => setIsModalOpen(true)}
          className="w-full bg-gradient-to-r from-green-500 to-teal-500 text-white font-medium py-2 rounded-lg shadow-md hover:opacity-90 transition-opacity duration-200 cursor-pointer"
        >
          Apply For Visa
        </button>
      </div>
      {isModalOpen && (
        <ApplyVisaModal
          visaId={visa._id}
          onClose={() => setIsModalOpen(false)}
        ></ApplyVisaModal>
      )}
    </div>
  );
};

export default VisaDetails;
