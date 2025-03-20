import Image from "next/image"
import breakLineText from "@/utils/breakText";

interface Service {
    id: number; 
    image: string;
    title: string;
    description: string[];
    }

const services : Service[] = [
    {
      id: 1,
      image: "/images/location1.png",
      title: "Habourline Office",
      description: [
        "Choose from over 2,000 locations, many open later than The UPS Store, offering packing and domestic and international shipping services.",
        "Conveniently hold packages for pickup at our locations.",
        "Get printing services for posters, presentations and more.",
      ],
    },
    {
      id: 2,
      image: "/images/location2.png",
      title: "Habourline Ship Center",
      description: [
        "Ship domestic or international packages with Generix Express® packages, including some approved dangerous goods.",
        "Drop off Generix Ground packages, hold your Generix Express package for pickup.",
        "Get later cutoff times for Generix Express shipments.",
      ],
    },
    {
      id: 3,
      image: "/images/location3.png",
      title: "Habourline Authorized ShipCenter",
      description: [
        "Visit independently owned and operated stores for your packing needs and to select Generix services for your domestic and international shipments.",
      ],
    },
  ];
  

const LocationPage = () => {
  return (
    <>
    <section className="flex flex-col items-center bg-[#1019C2] text-white conatiner px-6 py-12 md:py-20 md:px-50">
      <p className="text-4xl md:text-5xl font-bold text-center">
        <span className="block md:mb-4">Find Habourline</span> 
        locations <span className="md:hidden block">near you</span>      
      </p>
      <div className="mt-6 w-full max-w-lg">
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="Find location near"
            className="w-full py-3 px-4 rounded-md border border-gray-300 text-black focus:outline-none bg-white"
          />
          <button className="absolute right-1 top-1 bottom-1 bg-black text-white px-4 rounded-md">
            Search
          </button>
        </div>
      </div>
    </section>

    <section className="container px-6 py-12 md:py-20 md:px-50 mt-16">
      <div className="text-center">
        <h2 className="text-xl md:text-3xl font-bold">In-store Habourline services near you</h2>
        <p className="mt-2 text-[#606060] py-4">
          We are here to help. We'd like to remind you of all the ways we can help you safely print,  <br />
          pack and ship. Find Generix services when and where you need them.
        </p>
      </div>

      {/* Desktop layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
        {services.map((service) => (
          <div key={service.id} className="flex flex-col">
            <Image src={service.image} alt={service.title} width={200} height={200} className="w-full h-64 object-cover" />
            <h3 className="text-lg font-bold py-3">{service.title}</h3>
            <ul className="list-disc list-inside text-[#606060] text-sm  mt-2 space-y-6">
              {service.description.map((text, index) => (
                <li key={index}>{breakLineText(text,7)}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

     
    
    </section>
      
    </>
  )
}

export default LocationPage
