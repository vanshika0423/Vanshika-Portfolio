import Image from "next/image";
import React, { useState, useEffect } from "react";
import About1 from "../../asset/hire.jpg";
import About2 from "../../asset/aboutimage1.jpg";
import About3 from "../../asset/about2.png";
import About4 from "../../asset/about23.jpg";

const MayankAbout = () => {
  const [scrollY, setScrollY] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    { img: About3, left: "20%", top: 100, x: -20, threshold: 100 },
    { img: About2, left: "60%", top: 150, x: 20, threshold: 200 },
    { img: About4, left: "25%", top: 200, x: -20, threshold: 300 },
    { img: About1, left: "55%", top: 250, x: 20, threshold: 400 },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % cards.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const getImageStyle = (
    initialTop,
    initialX,
    scrollThreshold,
    speedRatio = 0.2
  ) => {
    const yOffset = (scrollThreshold - scrollY) * speedRatio;
    return {
      opacity: scrollY > scrollThreshold - 200 ? 1 : 0,
      transform: `translate(${initialX}%, -${yOffset}px)`,
      top: `${initialTop}vh`,
    };
  };

  return (
    <div className="relative h-screen mb-10 md:mb-0 md:h-[400vh] bg-black text-white">
      {/* === Sticky Intro Section === */}
      <div className="sticky top-0 flex h-screen flex-col items-center justify-center text-center p-4">
        <div className="flex flex-col items-center justify-center gap-8 w-full z-10">
          <div className="border bg-black border-dashed border-white/[0.2] rounded-full px-4 py-2 text-sm font-medium text-white">
            Hi, I am Mayank Singh
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-medium max-w-4xl leading-tight md:leading-snug">
            A frontend developer passionate about crafting engaging websites
            that are clean, fast, and user-focused.
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
            <div className="border bg-black border-dashed border-white/[0.2] rounded-full px-4 py-2 text-sm font-medium text-gray-400">
              Built 10+ Personal Projects
            </div>
            <div className="border bg-black border-dashed border-white/[0.2] rounded-full px-4 py-2 text-sm font-medium text-gray-400">
              3+ Months of Hands-on Experience
            </div>
            <div className="border bg-black border-dashed border-white/[0.2] rounded-full px-4 py-2 text-sm font-medium text-gray-400">
              Trusted by Peers & Mentors
            </div>
          </div>

          {/* === Mobile Image Loop Box === */}
          <div className="block md:hidden w-full mt-8 flex justify-center items-center">
            <div className="w-72 h-[350px] bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden relative transition-all duration-500">
              <Image
                src={cards[currentIndex].img}
                alt={`Mobile Image ${currentIndex + 1}`}
                width={300}
                height={350}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* === Desktop Scroll-based Images === */}
      {cards.map((card, index) => (
        <div
          key={index}
          style={{
            ...getImageStyle(card.top, card.x, card.threshold),
            left: card.left,
          }}
          className={`absolute w-72 transition-all duration-500 ease-in-out z-${
            10 * (index + 1)
          } hidden md:block`}
        >
          <div className="relative h-[350px] bg-black p-3 rounded-3xl shadow-xl border border-dashed border-white/[0.2] overflow-hidden">
            <Image
              src={card.img}
              alt={`Image ${index + 1}`}
              width={300}
              height={350}
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MayankAbout;
