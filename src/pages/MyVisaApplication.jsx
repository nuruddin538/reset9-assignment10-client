import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const MyVisaApplication = () => {
  const applications = useLoaderData();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredApplications, setFilteredApplications] =
    useState(applications);
  const [application, setApplication] = useState(applications);

  const handleSearch = () => {
    const filtered = applications.filter((app) =>
      app.country.toLowerCase().inCludes(searchTerm.toLowerCase())
    );
    setFilteredApplications(filtered);
  };

  const handleCancel = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (!result.isConfirmed) return;

    try {
      const response = await fetch(`http://localhost:5000/apply-visa/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setApplication((prevApplications) =>
          prevApplications.filter((app) => app._id !== id)
        );

        Swal.fire({
          title: "Deleted!",
          text: "Your visa application has been deleted.",
          icon: "success",
        });

        toast.success("Application canceled successfully!");
      } else {
        toast.error("Failed to cancel the application.");
      }
    } catch (error) {
      console.error("Error canceling application:", error);
      toast.error("An error occurred. Please try again.");
    }
  };
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">My Visa Applications</h1>
      {applications.length === 0 ? (
        <p>No visa applications found.</p>
      ) : (
        <div>
          <div>
            <div className="mb-6 flex gap-2">
              <input
                type="text"
                placeholder="Search by country..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="p-2 border rounded flex-grow"
              />
              <button
                onClick={handleSearch}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Search
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {filteredApplications.map((app) => (
              <div key={app._id} className="border p-4 rounded-lg shadow-md">
                <img
                  src={app.countryImage}
                  alt={app.country}
                  className="w-full h-40 object-cover rounded"
                />
                <h2 className="text-xl font-semibold">{app.countryName}</h2>
                <p>
                  <strong>Processing Time: </strong>
                  {app.processingTime}
                </p>
                <p>
                  <strong>Fee: </strong>
                  {app.fee}
                </p>
                <p>
                  <strong>Validity: </strong>
                  {app.validity}
                </p>
                <p>
                  <strong>Application Method: </strong>
                  {app.applicationMethod}
                </p>
                <p>
                  <strong>Applied Data: </strong>
                  {app.appliedDate}
                </p>
                <p>
                  <strong>Name: </strong>
                  {app.firstName} {app.lastName}
                </p>
                <p>
                  <strong>Email: </strong>${app.email}
                </p>
                <button
                  onClick={() => handleCancel(app._id)}
                  className="mt-4 cursor-pointer bg-red-500 text-white px-4 py-2 rounded"
                >
                  Cancel
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MyVisaApplication;
