import Image from "next/image";
import React from "react";
import quant from "../../asset/jp.png";
import AWS from "../../asset/ama.png";
import AWS1 from "../../asset/ama1.png";
import googlehack from "../../asset/Hack2skill-Certificate.png";

const blogPosts = [
  {
    date: "July 2, 2025",
    title: "JPMorgan Chase & Co. Quantitative Research Simulation - Developed practical finance & data skills.",
    image: quant,
  },
  {
    date: "March 17, 2025",
    title: "AWS Cloud Practitioner Essentials - Gained core knowledge of AWS Cloud architecture and tools.",
    image: AWS,
  },
  {
    date: "February 20, 2025",
    title: "AWS Skills Centers Training - Cloud Basics: Learned cloud fundamentals and AWS services.",
    image: AWS1,
  },
  {
    date: "August, 2025",
    title: "Google solution Challange.",
    image: googlehack,
  },
];

const Certification = () => {
  return (
    <div className="bg-black text-white py-10 px-6 sm:px-10 lg:px-15 xl:px-20 mb-30">
      <div className="flex justify-center mb-28">
        <h2 className="text-4xl font-bold text-center">Certification</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border border-dashed border-[#3d3d3d] p-4 rounded-2xl">
        {blogPosts.map((post, index) => (
          <div
            key={index}
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certification;
