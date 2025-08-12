"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const articles = [
  {
    image: "/images/blog1.png",
    title: "Cdc Issues Health Alert Notice For Travelers To USA From Hon",
    date: "October 7, 2020",
  },
  {
    image: "/images/blog2.jpeg",
    title: "Cheap Airline Tickets Great Ways To Save",
    date: "October 7, 2020",
  },
  {
    image: "/images/blog3.jpeg",
    title: "Global Resorts Network Grn Putting Timeshares To Shame",
    date: "October 7, 2020",
  },
  {
    image: "/images/blog4.jpeg",
    title: "The Luxury Of Traveling With Yacht Charter Companies",
    date: "October 7, 2020",
  },
  {
    image: "/images/blog5.jpeg",
    title: "Family Safari Vacation",
    date: "October 7, 2020",
  },
];

// Bounce + Rotate Slightly for Playful Feel
const bounceIn = {
  hidden: { scale: 0.8, rotate: -3, opacity: 0, y: 40 },
  visible: {
    scale: 1,
    rotate: 0,
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as "spring",
      stiffness: 120,
      damping: 12,
    },
  },
};

const BlogPage = () => {
  return (
    <section className="mx-auto md:py-20">
      {/* Heading */}
      <motion.div
        className="flex justify-between items-end mb-8 md:mb-12"
        variants={bounceIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold">
          The latest articles <br /> and industry insights
        </h2>
        <a href="#" className="text-[#1019C2] hidden md:block">
          View All
        </a>
      </motion.div>

      {/* First Two Articles */}
      <div className="grid grid-cols-1 md:grid-cols-[67%_33%] gap-8 md:gap-5 mb-8 md:mr-5">
        {[articles[0], articles[1]].map((article, index) => (
          <motion.div
            key={index}
            className="group"
            variants={bounceIn}
            initial="hidden"
            whileInView="visible"
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 12,
              delay: index * 0.15,
            }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div
              className="relative w-full h-60 overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            >
              <Image
                src={article.image}
                alt={article.title}
                layout="fill"
                objectFit="cover"
              />
            </motion.div>
            <h3 className="mt-4 text-lg font-semibold group-hover:text-[#1019C2] transition">
              {article.title}
            </h3>
            <p className="text-gray-500 text-sm">{article.date}</p>
          </motion.div>
        ))}
      </div>

      {/* Remaining Articles */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-5">
        {articles.slice(2, 5).map((article, index) => (
          <motion.div
            key={index}
            className="group"
            variants={bounceIn}
            initial="hidden"
            whileInView="visible"
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 12,
              delay: index * 0.15,
            }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div
              className="relative w-full h-60 overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            >
              <Image
                src={article.image}
                alt={article.title}
                layout="fill"
                objectFit="cover"
              />
            </motion.div>
            <h3 className="mt-4 text-lg font-semibold group-hover:text-[#1019C2] transition">
              {article.title}
            </h3>
            <p className="text-gray-500 text-sm">{article.date}</p>
          </motion.div>
        ))}
      </div>

      {/* Mobile "View All" Button */}
      <motion.div
        className="mt-8 text-center md:hidden"
        variants={bounceIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <a href="#" className="text-[#1019C2] text-lg">
          View All
        </a>
      </motion.div>
    </section>
  );
};

export default BlogPage;
