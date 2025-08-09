"use client";

import Image from "next/image";
import Link from "next/link";
import { FaUsers, FaTags, FaArrowRight, FaShip, FaTruckMoving, FaBoxOpen, FaCar } from "react-icons/fa";
import { MdContactPhone } from "react-icons/md";
import breakLineText from "@/utils/breakText";
import { motion, Variants } from "framer-motion";

// Fade-in / fade-out animation
const fadeVariant: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: "easeOut" },
    },
};

const Texts = [
    "HarbourLine Offstore LTD Express provides customized services for customers around the world from 50+ leading industries.",
    "Sometimes features require a short  description. This can be detailed description or just a short text",
    "The tools you need to  win and keep more  clients",
    "We Transport goods  across the world's ocean  with precision and care",
];

const HeroPage = () => {
    return (
        <>
            {/* Section 1 */}
            <motion.section
                variants={fadeVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
            >
                <div className="mx-auto grid grid-cols-1 md:grid-cols-12 items-center gap-10">
                    {/* Title */}
                    <div className="md:col-span-8 text-center md:text-left">
                        <p className="text-4xl md:text-6xl font-bold">
                            We provide logistics solution tailor-made <br />
                            <span className="hidden md:block">for individual customers!</span>
                        </p>
                    </div>

                    {/* Description */}
                    <div className="md:col-span-4 text-center md:text-left">
                        <p className="text-gray-700 mt-4 md:mt-12 text-base md:text-lg">
                            {breakLineText(Texts[0], 4)}
                        </p>
                    </div>
                </div>

                {/* Hero Image */}
                <div className="flex justify-center mt-15">
                    <Image
                        src="/images/heroImage1.png"
                        alt="Shipping Containers"
                        width={900}
                        height={300}
                        className="w-full h-auto"
                    />
                </div>
            </motion.section>

            {/* Section 2 */}
            <motion.section
                className="mt-40 mb-30"
                variants={fadeVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
            >
                <div className="container mx-auto">
                    <h2 className="text-2xl md:text-6xl text-black text-center md:text-left md:text-gray-700 font-bold mb-20">
                        Why choose us?
                    </h2>

                    {/* Grid Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
                        {/* Top Team */}
                        <div className="text-center md:text-start">
                            <FaUsers className="text-5xl text-[#DA7934] mx-auto md:mx-0" />
                            <h3 className="text-lg md:text-xl font-bold mt-4">Top Team</h3>
                            <p className="text-gray-600 mt-2 text-sm md:text-base">
                                {breakLineText(Texts[1], 5)}
                            </p>
                            <Link
                                href="#"
                                className="text-[#0B91D4] font-semibold mt-4 inline-flex items-center gap-2"
                            >
                                Learn More <FaArrowRight />
                            </Link>
                        </div>

                        {/* Customer Support */}
                        <div className="text-center md:text-start">
                            <MdContactPhone className="text-5xl text-[#DA7934] mx-auto md:mx-0" />
                            <h3 className="text-lg md:text-xl font-bold mt-4">
                                Customer Support
                            </h3>
                            <p className="text-gray-600 mt-2 text-sm md:text-base">
                                {breakLineText(Texts[1], 5)}
                            </p>
                            <Link
                                href="#"
                                className="text-[#0B91D4] font-semibold mt-4 inline-flex items-center gap-2"
                            >
                                Learn More <FaArrowRight />
                            </Link>
                        </div>

                        {/* Competitive Rates */}
                        <div className="text-center md:text-start">
                            <FaTags className="text-5xl text-[#DA7934] mx-auto md:mx-0" />
                            <h3 className="text-lg md:text-xl font-bold mt-4">
                                Competitive Rates
                            </h3>
                            <p className="text-gray-600 mt-2 text-sm md:text-base">
                                {breakLineText(Texts[1], 5)}
                            </p>
                            <Link
                                href="#"
                                className="text-[#0B91D4] font-semibold mt-4 inline-flex items-center gap-2"
                            >
                                Learn More <FaArrowRight />
                            </Link>
                        </div>
                    </div>
                </div>
            </motion.section>

            <hr className="border-t border-gray-300 hidden md:block" />

            {/* Section 3 */}
            <motion.section
                className="mt-40 mb-30"
                variants={fadeVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
            >
                <div className="container mx-auto">
                    <h2 className="text-2xl md:text-6xl text-black text-center md:text-left font-bold mb-20">
                        <span className="block md:hidden">
                            {breakLineText(Texts[2], 5)}
                        </span>
                        <span className="hidden md:block">
                            {breakLineText(Texts[3], 5)}
                        </span>
                    </h2>

                    {/* Grid Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="text-center md:text-start">
                            <FaShip className="text-5xl text-[#DA7934] mx-auto md:mx-0" />
                            <h3 className="text-lg md:text-xl font-bold mt-4">
                                Marine Cargo Service
                            </h3>
                            <p className="text-gray-600 mt-2 text-sm md:text-base">
                                {breakLineText(Texts[1], 5)}
                            </p>
                        </div>

                        <div className="text-center md:text-start">
                            <FaCar className="text-5xl text-[#DA7934] mx-auto md:mx-0" />
                            <h3 className="text-lg md:text-xl font-bold mt-4">
                                Car Shipping Services
                            </h3>
                            <p className="text-gray-600 mt-2 text-sm md:text-base">
                                {breakLineText(Texts[1], 5)}
                            </p>
                        </div>

                        <div className="text-center md:text-start">
                            <FaTruckMoving className="text-5xl text-[#DA7934] mx-auto md:mx-0" />
                            <h3 className="text-lg md:text-xl font-bold mt-4">
                                Heavy Equipment Services
                            </h3>
                            <p className="text-gray-600 mt-2 text-sm md:text-base">
                                {breakLineText(Texts[1], 5)}
                            </p>
                        </div>

                        <div className="text-center md:text-start">
                            <FaBoxOpen className="text-5xl text-[#DA7934] mx-auto md:mx-0" />
                            <h3 className="text-lg md:text-xl font-bold mt-4">
                                Container Sea Cargo
                            </h3>
                            <p className="text-gray-600 mt-2 text-sm md:text-base">
                                {breakLineText(Texts[1], 5)}
                            </p>
                        </div>
                    </div>
                </div>
            </motion.section>
        </>
    );
};

export default HeroPage;
