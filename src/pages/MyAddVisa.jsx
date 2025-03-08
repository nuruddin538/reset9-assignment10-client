import { useLoaderData } from "react-router-dom";

const MyAddVisa = () => {
  const visas = useLoaderData();
  return (
    <div>
      <h2>MyAddVisa {visas.length}</h2>
    </div>
  );
};

export default MyAddVisa;
