import Image from "next/image";
import breakLineText from "@/utils/breakText";

type Vessel = {
  title: string;
  image: string;
  features: string[];
};

const vessels: Vessel[] = [
  {
    title: "Cargo Vessels",
    image: "/images/Frame 1.png", 
    features: [
      "Strong hull for heavy loads",
      "Large storage capacity",
      "Cranes or loading equipment",
      "Divided cargo holds for organization and safety",
    ],
  },
  {
    title: "Tug Vessels",
    image: "/images/Frame 2.png", 
    features: [
      "High powered engines",
      "Advanced propulsion system",
      "High maneuverability",
      "Reinforced hull and fenders",
    ],
  },
  {
    title: "Oil Tankers",
    image: "/images/Frame 3.png",
    features: [
      "Large cargo capacity",
      "Advanced pumping system",
      "Ballast water system",
      "Segregated cargo tank",
    ],
  },
];

const VesselsSection: React.FC = () => {
  return (
    <section className="mt-10 md:mt-20 ">
      <div className="mx-auto">
        <div className="grid gap-10 md:grid-cols-3 border border-gray-300 p-4 md:pt-12  ">
          {vessels.map((vessel, index) => (
            <div
              key={index}
              className="flex flex-col md:border-r md:border-b-0 border-b border-gray-300 last:border-none pr-0 md:pr-6 md:p-6 md:pt-30 md:pb-30 pb-30 "
            >
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:text-start text-center ">
                {vessel.title}
              </h3>
              <div className="w-full h-48 md:h-56 relative mb-5 md:mb-12">
                <Image
                  src={vessel.image}
                  alt={vessel.title}
                  fill
                  className="rounded-md object-cover"
                  priority
                />
              </div>
              <h4 className="text-lg mb-4 md:mb-10 uppercase tracking-wider px-4 md:px-0">
                Key Features
              </h4>
              <ul className="space-y-6 text-lg px-4 md:px-0">
                {vessel.features.map((feature, i) => (
                  <li key={i} className="list-disc list-inside">
                    {breakLineText(feature , 4) }
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VesselsSection;
