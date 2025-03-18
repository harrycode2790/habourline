'use client'
import { useState } from "react"
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
      question: "What mostly people want to ask no.1 ?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      question: "What mostly people want to ask no.2 ?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      question: "What mostly people want to ask no.3 ?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      question: "What mostly people want to ask no.4 ?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      question: "What mostly people want to ask no.5 ?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      question: "What mostly people want to ask no.5 ?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

const FaqPage = () => {
    const [openIndex , setOpenIndex] = useState<number | null >(2)
    
    const toggleFAQ = (index : number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

  return (
    <section className="max-w-5xl py-12 md:opacity-50">
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
