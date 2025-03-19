import Link from "next/link"
import { FaArrowRight, FaShippingFast, FaStore } from "react-icons/fa"
import breakLineText from "@/utils/breakText"
import { Phone, Mail, Info,} from "lucide-react";
import { JSX } from "react";
import { MdForum, MdInfo, MdMail, MdPhone } from "react-icons/md";



const cards = [
    {
    title: "For business",
    description: "Shipping regularly? Request a business account and profit from exclusive benefits",
    },
    {
    title: "Reschedule a Delivery",
    description: "This can be detailed description or just a short text.",
    },
    {
    title: "Pay Custom Duties",
    description: "Sometimes features require a short or complete description.",
    },
    {
    title: "Do you suspect you received a fraudulent email?",
    description: "Let us know",
    },
]

const services = [
    {
      title: "Habourline Express",
      description:
        "Express courier delivered parcel and documents service for your shipping needs. Sometimes features require a short or complete description.",
      icon: <FaShippingFast />,
      contact: [
        { icon: <MdPhone size={16} />, text: "(269) 546-1951" },
        { icon: <MdMail size={16} />, text: "Send Email" },
        { icon: <MdInfo size={16} />, text: "FAQ, Tips and Advice" },
      ],
    },
    {
      title: "Habourline eCommerce Solutions",
      description:
        "Standard international and domestic parcel services. Available to private and business customers.",
      icon: <FaStore />,
      contact: {
        consumers: [
          { icon: <MdPhone size={16} />, text: "(269) 546-1951" },
          { icon: <MdMail size={16} />, text: "Send Email" },
          { icon: <MdForum size={16} />, text: "Chatbot" },
        ],
        business: [
          { icon: <MdPhone size={16} />, text: "(903) 391-2392" },
          { icon: <MdMail size={16} />, text: "Send Email" },
          { icon: <MdInfo size={16} />, text: "FAQs" },
        ],
      },
    },
  ];

const CustomerCarePage = () => {
  return (
    <>
        <section className="mt-7 mb-30 ">           
            <p className="text-4xl md:text-5xl font-bold text-center md:text-start">Customer Care</p>           
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 md:space-x-6">
                {/* Contact Lookup Section */}
                <div className="bg-white p-6  md:mt-5  shadow-sm md:flex-1">
                <h2 className="text-lg font-semibold">Contact Lookup</h2>
                <div className="mt-4 relative w-full">
                    <input
                        type="text"
                        placeholder="Enter your tracking number(s)"
                        className="w-full border border-gray-300 px-4 py-3 pr-20 rounded-md md:rounded-sm  focus:outline-none"
                    />
                    <button className="absolute right-1 top-1 bottom-1 bg-[#0B91D4] rounded-sm text-white px-5 py-1.5  hover:bg-blue-600">
                        <span className="text-sm">Track</span>
                    </button>
                </div>

                <p className=" text-sm md:text-xs  text-gray-500 mt-3">
                    {breakLineText(
                        "Your tracking number lets us find the right division contact to answer your questions.",8)}
                    
                </p>
                <hr className="mt-10 text-gray-300"  />
                <p className="text-lg font-semibold my-5">No tracking number?</p>
                <p className=" text-sm my-4  text-gray-500 ">if you have other shipping reference numbers...</p>
                < Link href="#" className="text-[#1019C2]  flex items-center gap-3">
                    Learn More <FaArrowRight/>
                </Link>
                </div>
                
                {/* Info Cards Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 md:mt-5 md:flex-1">
                {cards.map((card, index) => (
                    <div key={index} className="bg-white p-6  shadow-sm hover:shadow-lg transition">
                    <h3 className="text-lg font-semibold flex justify-between">{card.title} <FaArrowRight className="text-sm"/> </h3>
                    <p className="text-gray-500 mt-2 opacity-70" >{card.description}</p>
                    </div>
                ))}
                </div>
            </div>
            
        </section>

        <section className="mt-20 mb-30 ">
         <p className="text-2xl md:text-3xl font-semibold my-20">Documents and Packages</p>

        <div className="grid md:grid-cols-2">
        {services.map((service, index) => (
          <div key={index} className="border border-gray-300 p-6 shadow-sm">
            <div className="flex items-center space-x-3 mb-3">
              <span className="text-2xl text-[#DA7934]">{service.icon}</span>
              <h3 className="font-semibold md:text-xl my-3">{service.title}</h3>
            </div>
            <p className="text-gray-600 my-5 text-sm">{service.description}</p>

            <hr className="my-10 text-gray-300" />

            {/* If contact is an array, show simple contact info */}
            {Array.isArray(service.contact) ? (
              <div >
                <h4 className="font-semibold py-2 md:text-lg">Shipment Tracking and Status</h4>
                {service.contact.map((item, i) => (
                  <div key={i} className="flex items-center space-x-2 text-gray-700 mb-4 my-5 gap-3 ">
                    <span className="text-[#606060]">{item.icon}</span>
                    <span className="text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            ) : (
              /* If contact is an object (eCommerce solutions), show Consumers and Business */
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div>
                        <h4 className="font-semibold  mb-7 mt-3 md:text-lg ">Consumers :</h4>
                        {service.contact.consumers.map((item, i) => (
                        <div key={i} className="flex items-center space-x-2 text-gray-700 mb-4 my-5 gap-3 ">
                            <span className="text-[#606060]">{item.icon}</span>
                            <span className="text-sm">{item.text}</span>
                        </div>
                        ))}
                    </div>
                    <div>
                         <h4 className="font-semibold mb-7 mt-3 md:text-lg">Business :</h4>
                        {service.contact.business.map((item, i) => (
                        <div key={i} className="flex items-center space-x-2 text-gray-700 mb-4 my-5 gap-3 ">
                            <span className="text-[#606060]">{item.icon}</span>
                            <span className="text-sm">{item.text}</span>
                        </div>
                        ))}
                        </div>
                    </div>            
              </div>
            )}
          </div>
        ))}
        </div>
        </section>
    </>
  )
}

export default CustomerCarePage
