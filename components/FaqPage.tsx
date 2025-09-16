'use client'
import { useState } from "react"
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
      question: "Can you handle oversized or hazardous cargo? ",
      answer: "Yes. We have the expertise and certifications to manage heavy-lift, oversized, and dangerous goods in compliance with international safety standards.",
    },
    {
      question: "How do I get a shipping quote? ",
      answer:
        "You can request a quotation by providing cargo details, origin, destination, weight/volume, and required delivery time.",
    },
    {
      question: "Can I track my shipment?",
      answer: "Yes, we provide real-time tracking and status updates for all shipments.",
    },
    {
      question: "What if my cargo is delayed?",
      answer: "We will notify you immediately, explain the cause, and offer alternative arrangements where possible.",
    },
    {
      question: "What documents are required for marine transport?",
      answer: "Generally, a Bill of Lading, Commercial Invoice, Packing List, and any applicable permits or certificates (e.g., for hazardous materials.",
    },
     {
      question: "Do you assist with customs clearance?",
      answer: "Yes, we provide full customs brokerage services, including documentation, duty calculation, and payment processing.",
    },
     {
      question: "Is cargo insured during transit?",
      answer: "Insurance is optional but highly recommended. We can arrange marine insurance tailored to your cargo.",
    },
     {
      question: "Do I need a contract for every shipment?",
      answer: "We handle both one-time shipments and long-term logistics contracts, depending on your needs.",
    },
      {
      question: "What payment methods do you accept?",
      answer: "We accept secure bank transfers and corporate payment arrangements.",
    },
      {
      question: "How do I contact you in case of an emergency?",
      answer: "We provide 24/7 customer support for time-sensitive cargo and vessel operations",
    },

   
  ];

const FaqPage = () => {
    const [openIndex , setOpenIndex] = useState<number | null >(2)
    
    const toggleFAQ = (index : number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

  return (
    <section className=" md:opacity-50">
      <h2 className="text-2xl md:text-5xl font-bold text-center md:text-start mb-10">
        Frequently <br /> Asked Questions
      </h2>
      <div className="space-y-6 md:ml-15">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-300 md:p-4">
            <button
              className="w-full flex justify-between items-center py-4 text-left"
              onClick={() => toggleFAQ(index)}
            >
              <span className="text-lg font-semibold">{faq.question}</span>
              {openIndex === index ? (
                <Minus className="w-6 h-6 text-gray-500" />
              ) : (
                <Plus className="w-6 h-6 text-gray-500" />
              )}
            </button>
            {openIndex === index && (
              <p className="text-gray-600 pb-4">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default FaqPage
