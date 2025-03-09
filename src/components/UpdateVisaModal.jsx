import { useState } from "react";

const UpdateVisaModal = ({ visa, onClose }) => {
  const [formData, setFormData] = useState({
    country: visa.country,
    countryImage: visa.countryImage,
    visaType: visa.visaType,
    processingTime: visa.processingTime,
    fee: visa.fee,
    validity: visa.validity,
    applicationMethod: visa.applicationMethod,
  });
  return <div></div>;
};

export default UpdateVisaModal;
