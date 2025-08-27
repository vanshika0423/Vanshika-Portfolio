import Image from "next/image";
import React from "react";
import { motion } from "framer-motion"; 

import quant from "../../asset/jp.png";
import AWS from "../../asset/ama.png";
import AWS1 from "../../asset/ama1.png";
import google1 from "../../asset/prompt.png";
import google2 from "../../asset/cyber.png";
import myntra from "../../asset/myntra.png"
import googlehack from "../../asset/Hack2skill-Certificate.png";
import hwi from "../../asset/hwi.png";
import salseforce from "../../asset/Rissa May, Scarlett Alexis.png";

const blogPosts = [
  // {
  //   date: "August, 2025",
  //   title: "Google solution Challange.",
  //   image: googlehack,
  // },
  {
    date: "July, 2025",
    title: "Hack with Infy.",
    image: hwi,
  },
  {
    date: "July, 2025",
    title: "salseforce developer intern.",
    image: salseforce,
  },
  {
    date: "June 12, 2025",
    title:
      "Google Prompting Essentials",
    image: google1,
  },
  // {
  //   date: "July 2, 2025",
  //   title:
  //     "JPMorgan Chase & Co. Quantitative Research Simulation - Developed practical finance & data skills.",
  //   image: quant,
  // },
  {
    date: "April 23, 2025",
    title:
      "AWS Security Fundamental Second Edition",
    image: AWS1,
  },
  {
    date: "March 11, 2025",
    title:
      "AWS Cloud Practitioner Essentials - Gained core knowledge of AWS Cloud architecture and tools.",
    image: AWS,
  },
  // {
  //   date: "october, 2024",
  //   title:
  //     "Foundations of Cybersecurity",
  //   image: myntra,
  // },
  {
    date: "december 23, 2023",
    title:
      "Foundations of Cybersecurity",
    image: google2,
  },
  
];

const Certification = () => {
  return (
    <div className="bg-black text-white py-10 px-6 sm:px-10 lg:px-15 xl:px-20 mb-30">
      {/* Animated Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40, filter: "blur(5px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0 }}
        viewport={{ once: true }}
        className="flex justify-center mb-28"
      >
        <h2 className="text-4xl font-bold text-center">
          Achievements & Certifications
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border border-dashed border-[#3d3d3d] p-4 rounded-2xl">
        {blogPosts.map((post, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40, filter: "blur(5px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: 0.1 + index * 0.1,
            }}
            viewport={{ once: true }}
            className="bg-[#111] border border-[#3d3d3d] rounded-md overflow-hidden"
          >
            <div className="relative w-full h-60">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="p-4">
              <p className="text-[#3d3d3d] text-sm mb-2">{post.date}</p>
              <div className="border-t-1 border-dashed border-[#4b4b4b] mb-3" />
              <h3 className="text-lg font-semibold">{post.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Certification;
