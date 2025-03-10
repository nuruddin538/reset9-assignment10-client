import { useState } from "react";
import { toast } from "react-toastify";

const UpdateVisaModal = ({ visa, onClose, onUpdateVisa }) => {
  const [formData, setFormData] = useState({
    country: visa.country,
    countryImage: visa.countryImage,
    visaType: visa.visaType,
    processingTime: visa.processingTime,
    fee: visa.fee,
    validity: visa.validity,
    applicationMethod: visa.applicationMethod,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/visa/${visa._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        toast.success("Visa updated successfully!");
        // Notify parent component to update the visa state
        onUpdateVisa({ ...visa, ...formData });
        onClose();
      } else {
        toast.error("Faild to update visa.");
      }
    } catch (error) {
      console.log("Error udating visa:", error);
      toast.error("An error occurred while updating the visa.");
    }
  };

  return (
    <div className="fixed mt-16 inset-0 bg-black opacity-90 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg w-96 max-h-[90vh] overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">Update Visa</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <div className="mb-4">
              <label className="block text-sm font-medium">Country</label>
              <input
                type="text"
                value={formData.country}
                onChange={(e) =>
                  setFormData({ ...formData, country: e.target.value })
                }
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">
                Country Image URL
              </label>
              <input
                type="text"
                value={formData.countryImage}
                onChange={(e) =>
                  setFormData({ ...formData, countryImage: e.target.value })
                }
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">Visa Type</label>
              <input
                type="text"
                value={formData.visaType}
                onChange={(e) =>
                  setFormData({ ...formData, visaType: e.target.value })
                }
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">
                Processing Time
              </label>
              <input
                type="text"
                value={formData.processingTime}
                onChange={(e) =>
                  setFormData({ ...formData, processingTime: e.target.value })
                }
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">Fee</label>
              <input
                type="number"
                value={formData.fee}
                onChange={(e) =>
                  setFormData({ ...formData, fee: e.target.value })
                }
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">Validity</label>
              <input
                type="text"
                value={formData.validity}
                onChange={(e) =>
                  setFormData({ ...formData, validity: e.target.value })
                }
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">
                Application Method
              </label>
              <input
                type="text"
                value={formData.applicationMethod}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    applicationMethod: e.target.value,
                  })
                }
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                onClick={onClose}
                className="mr-2 bg-gray-500 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-green-500 text-white px-4 py-2 rounded"
              >
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateVisaModal;
