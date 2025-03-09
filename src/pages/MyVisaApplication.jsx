import { useLoaderData } from "react-router-dom";

const MyVisaApplication = () => {
  const applications = useLoaderData();
  console.log(applications);
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">My Visa Applications</h1>
      <div className="grid grid-cols-1 gap-4">
        {applications.map((app) => (
          <div key={app._id} className="border p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">{app.visaId}</h2>
            <p>
              Name: {app.firstName} {app.lastName}
            </p>
            <p>Email: {app.email}</p>
            <p>Applied Data: {app.appliedDate}</p>
            <p>Fee: ${app.fee}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyVisaApplication;
