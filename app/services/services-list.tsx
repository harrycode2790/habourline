import { FaArrowRight } from "react-icons/fa";

const ServicesList = () => {
  const services = [
    "Bulk cargo transportation",
    "Marine vessel chatering",
    "Ocean freight",
    "Cargo handling",
    "Marine vessel chartering",
    "Other specialised services",
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto mt-8">
      {services.map((service, index) => (
        <div key={index} className="flex items-center justify-between border-b border-gray-300 py-4">
          <div className="flex items-center gap-8">
            <FaArrowRight className="text-gray-500" />
            <span className="font-bold text-lg md:text-2xl">{service}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesList;
