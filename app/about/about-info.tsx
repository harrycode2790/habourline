import { FaBuilding, FaAward } from "react-icons/fa";
import { MdDirectionsBoat } from "react-icons/md";
import { IoIosBriefcase } from "react-icons/io";


const AboutInfoSection = () => {
  const infoCards = [
    { icon: <IoIosBriefcase size={32} className="text-gray-600 md:text-[#DA7934]" />, title: "Team and Company structure", link: "#" },
    { icon: <FaBuilding size={32} className="text-gray-600 md:text-[#DA7934]" />, title: "Habourline Branches", link: "#" },
    { icon: <FaAward size={32} className="text-gray-600 md:text-[#DA7934]" />, title: "Award and Certification", link: "#" },
    { icon: <MdDirectionsBoat size={32} className="text-gray-600 md:text-[#DA7934]" />, title: "Vessel Catalogue", link: "/vessel-catalogue" },
  ];

  return (
    <section className="py-10">
      <h2 className="text-2xl md:text-[32px] font-bold mb-8">Get more info about us</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {infoCards.map((item, index) => (
          <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-sm md:max-w-[234px] min-h-[266px] flex flex-col justify-between">
            <div>
              <div className="mb-8">{item.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
            </div>
            <a href={item.link} className="text-blue-500 font-semibold text-sm md:text-lg pb-4 md:pb-0">
              Learn More →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutInfoSection;
