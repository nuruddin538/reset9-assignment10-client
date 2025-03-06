import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddVisa = () => {
  const [formData, setFormData] = useState({
    countryImage: "",
    countryName: "",
    visaType: "",
    processingTime: "",
    requiredDocuments: [],
    description: "",
    ageRestriction: "",
    fee: "",
    validity: "",
    applicationMethod: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      const updatedDocuments = checked
        ? [...formData.requiredDocuments, value]
        : formData.requiredDocuments.filter((doc) => doc !== value);
      setFormData({ ...formData, requiredDocuments: updatedDocuments });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/visas", formData);
      toast.success("Visa added successfully!");
      navigate("/all-visas");
    } catch (error) {
      toast.error("Failed to add visa.");
    }
  };
  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">Add Visa</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Country Image URL:
            </label>
            <input
              type="text"
              name="countryImage"
              value={formData.countryImage}
              onChange={handleChange}
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
              value={formData.countryName}
              onChange={handleChange}
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
              value={formData.visaType}
              onChange={handleChange}
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
              value={formData.processingTime}
              onChange={handleChange}
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
                  name="requiredDocuments"
                  value="Valid Passport"
                  onChange={handleChange}
                  className="mr-2"
                  required
                />
                Valid Passport
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="requiredDocuments"
                  value="Visa Application Form"
                  onChange={handleChange}
                  className="mr-2"
                />
                Visa Application Form
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="requiredDocuments"
                  value="Recent Passport-Sized Photograph"
                  onChange={handleChange}
                  className="mr-2"
                />
                Recent Passport-Sized Photograph
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
              value={formData.description}
              onChange={handleChange}
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
              value={formData.ageRestriction}
              onChange={handleChange}
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
              value={formData.fee}
              onChange={handleChange}
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
              value={formData.validity}
              onChange={handleChange}
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
              value={formData.applicationMethod}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
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
