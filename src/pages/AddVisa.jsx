import { useState } from "react";
import { toast } from "react-toastify";

const AddVisa = () => {
  const [selectedDocuments, setSelectedDocuments] = useState([]);

  const handleAddVisa = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    // const countryImage = e.target.countryImage.value;
    // const countryName = e.target.countryName.value;
    // const visaType = e.target.visaType.value;
    // const processingTime = e.target.processingTime.value;
    // const requiredDocuments = e.target.requiredDocuments.value;
    // const description = e.target.description.value;
    // const ageRestriction = e.target.ageRestriction.value;
    // const fee = e.target.fee.value;
    // const validity = e.target.validity.value;
    // const applicationMethod = e.target.applicationMethod.value;
    const addVisa = {
      countryImage: formData.get("countryImage"),
      countryName: formData.get("countryName"),
      visaType: formData.get("visaType"),
      processingTime: formData.get("processingTime"),
      requiredDocuments: selectedDocuments,
      description: formData.get("description"),
      ageRestriction: formData.get("ageRestriction"),
      fee: formData.get("fee"),
      validity: formData.get("validity"),
      applicationMethod: formData.get("applicationMethod"),
    };
    console.log(addVisa);
    e.target.reset();
    setSelectedDocuments([]);

    // send data to the server
    fetch("http://localhost:5000/visa", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addVisa),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast.success("Visa added successfully!");
        }
      });
  };

  const handleDocumentChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedDocuments([...selectedDocuments, value]);
    } else {
      setSelectedDocuments(selectedDocuments.filter((doc) => doc !== value));
    }
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">Add Visa</h2>
      <form onSubmit={handleAddVisa} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Country Image URL:
            </label>
            <input
              type="text"
              name="countryImage"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          {/* Country name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Country Name:
            </label>
            <input
              type="text"
              name="countryName"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          {/* Visa Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Visa Type:
            </label>
            <select
              name="visaType"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            >
              <option value="">Select Visa Type</option>
              <option value="Tourist Visa">Tourist Visa</option>
              <option value="Student Visa">Student Visa</option>
              <option value="Official Visa">Official Visa</option>
            </select>
          </div>
          {/* Processing Time */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Processing Time:
            </label>
            <input
              type="text"
              name="processingTime"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          {/* Required Documents */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Required Documents:
            </label>
            <div className="mt-2 space-y-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  value="Valid Passport"
                  onChange={handleDocumentChange}
                  className="mr-2"
                  required
                />
                Valid Passport
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  value="Visa Application Form"
                  onChange={handleDocumentChange}
                  className="mr-2"
                />
                Visa Application Form
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  value="Resent Passport-Sized Photograph"
                  onChange={handleDocumentChange}
                  className="mr-2"
                />
                Resent Passport-Sized Photograph
              </label>
            </div>
          </div>
          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              name="description"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              rows="4"
              required
            ></textarea>
          </div>
          {/* Age Restriction */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Age Restriction
            </label>
            <input
              type="number"
              name="ageRestriction"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          {/* Fee */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Fee
            </label>
            <input
              type="number"
              name="fee"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          {/* validity */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Validity
            </label>
            <input
              type="text"
              name="validity"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          {/* Application Method */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Application Method
            </label>
            <input
              type="text"
              name="applicationMethod"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full cursor-pointer bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            >
              Add Visa
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddVisa;
