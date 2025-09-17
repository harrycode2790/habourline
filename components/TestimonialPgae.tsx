'use client'
import Image from "next/image"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Testimonial {
  image: string;
  text: string;
  name: string;
  position: string;
  logoW: string;
  logoB: string;
}

const testimonials: Testimonial[] = [
  {
    image: "/images/amazonP.png",
    text: "Designspace has consistently delivered above and beyond my expectations. Brilliant design work, incredible response time, and a really friendly team.",
    name: "Alan Dennis",
    position: "CEO of Amazon",
    logoW: "/images/amazonLW.png",
    logoB: "/images/logo (0).png"
  },
  {
    image: "/images/creativemarketP.jpg",
    text: "Designspace has consistently delivered above and beyond my expectations. Brilliant design work, incredible response time, and a really friendly team.",
    name: "Alan Dennis",
    position: "CEO of Creative",
    logoW: "/images/logo (1).png",
    logoB: "/images/creativemarket.svg"
  },
  {
    image: "/images/airbnbP.png",
    text: "Designspace has consistently delivered above and beyond my expectations. Brilliant design work, incredible response time, and a really friendly team.",
    name: "Alan Dennis",
    position: "CEO of Airbnb",
    logoW: "/images/logo (2).png",
    logoB: "/images/airbnb-logo2.jpeg"
  },
  {
    image: "/images/shopifyP.webp",
    text: "Designspace has consistently delivered above and beyond my expectations. Brilliant design work, incredible response time, and a really friendly team.",
    name: "Alan Dennis",
    position: "CEO of Shopify",
    logoW: "/images/logo (3).png",
    logoB: "/images/shopify.png"
  },
]

const TestimonialPage = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  // Auto rotate
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % testimonials.length)
    }, 5000) // 4s interval
    return () => clearInterval(interval)
  }, [])

  const handleClick = (index: number) => {
    setActiveIndex(index)
  }

  return (
    <section className="mx-auto py-12 relative mb-30">
      <div className="grid grid-cols-1 lg:grid-cols-[30%_70%] gap-10 bg-gray-100 relative overflow-hidden">
        {/* Image Section */}
        <div className="relative w-full h-64 lg:h-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="absolute w-full h-full"
            >
              <Image
                src={testimonials[activeIndex].image}
                alt="Testimonial"
                layout="fill"
                objectFit="cover"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Testimonial Content */}
        <div className="flex flex-col justify-center p-6 md:p-10 relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-xl lg:text-2xl text-black font-medium leading-relaxed">
                {testimonials[activeIndex].text}
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="mt-6">
                  <h3 className="font-bold text-lg text-gray-900">{testimonials[activeIndex].name}</h3>
                  <p className="text-gray-600 text-sm">{testimonials[activeIndex].position}</p>
                </div>
                <div className="flex items-center justify-end mt-6 mr-6 md:mr-11">
                  <Image
                    src={testimonials[activeIndex].logoW}
                    alt="Brand Logo"
                    width={70}
                    height={70}
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Logos Navigation */}
      <div className="absolute w-full mt-6 md:mt-12">
        <div className="grid grid-cols-4 justify-start gap-8 border-b border-gray-300 max-w-8xl">
          {testimonials.map((testimonial, index) => (
            <button
              key={index}
              className="relative flex flex-col items-start py-4 transition duration-300"
              onClick={() => handleClick(index)}
            >
              <Image
                src={testimonial.logoB}
                alt="Brand Logo"
                width={100}
                height={70}
                className={`transition duration-300 ${activeIndex === index ? "opacity-100" : "opacity-50"}`}
              />
              {activeIndex === index && (
                <motion.div
                  layoutId="active-underline"
                  className="w-full h-[2px] bg-[#1019C2] absolute bottom-0"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialPage
