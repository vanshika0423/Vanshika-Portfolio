import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import may from "../../asset/maya.png";
import pro from "../../asset/pro.png";
import cemera from "../../asset/cemra.jpg";

const floatTransition = {
  y: {
    duration: 3,
    repeat: Infinity,
    repeatType: "reverse",
    ease: "easeInOut",
  },
};

const Hero = () => {
  return (
    <section className="bg-black text-white min-h-screen flex items-center px-6 md:px-20 py-10 relative overflow-hidden">
      <div className="max-w-xl z-10 mt-30">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          <span className="text-purple-400">Mayank Singh,</span>
          <br />A Competitive Coder & Frontend Developer.
        </h1>
        <p className="text-gray-400 mt-6 text-lg">
          Deep diving into competitive programming and learning the art of
          optimization.
        </p>
      </div>

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="absolute inset-0 w-full h-full hidden lg:block"
      >
        {/* Notes/Tasks/Files Tabs */}
        <div className="absolute top-80 left-[56%] flex bg-zinc-900/80 backdrop-blur-sm p-1 rounded-full gap-1 shadow-lg">
          <button className="px-3 py-1 text-sm text-gray-400 rounded-full">
            Get
          </button>
          <button className="px-3 py-1 text-sm text-gray-400 rounded-full">
            Set
          </button>
          <button className="px-3 py-1 text-sm text-white bg-zinc-700 rounded-full">
            Code
          </button>
        </div>

        {/* Mayank Singh Profile Card */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="absolute top-94 left-[calc(55%-2rem)] w-72 bg-zinc-900/80 backdrop-blur-sm p-4 rounded-xl shadow-2xl"
        >
          <div className="flex items-center gap-4">
            <Image
              src={pro}
              alt="Mayank Singh"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="flex-1">
              <p className="font-semibold">Mayank Singh</p>
              <p className="text-sm text-gray-400">@linkedin</p>
            </div>
            <a
              href="https://www.linkedin.com/in/mayank-singh-271ba7288/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 px-4 py-1.5 text-sm rounded-full font-semibold text-white hover:bg-blue-700 transition"
            >
              Follow
            </a>
          </div>
          <p className="text-sm text-gray-300 mt-3">
            Frontend developer, Competitive Coder
          </p>
          <div className="text-sm text-gray-400 mt-3">
            <span className="font-semibold text-white">2,283</span> Connection ·{" "}
            <span className="font-semibold text-white">2.2K</span> Followers
          </div>
        </motion.div>

        {/* Tooltip */}
        <motion.div
          className="absolute top-[38rem] left-[calc(60%+4rem)] flex flex-col items-center gap-2"
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          <span className="bg-purple-600 px-4 py-2 text-sm rounded-full shadow-lg">
            Build beautiful from scratch
          </span>
          <span className="bg-zinc-800 text-gray-400 px-3 py-1 text-xs rounded-md">
            Code
          </span>
        </motion.div>

        {/* Camera Card */}
        <motion.div
          className="absolute top-60 right-38 w-44 h-44 bg-gradient-to-br rounded-3xl shadow-2xl flex items-center justify-center overflow-hidden p-1"
          animate={{ y: [0, -15, 0] }}
          transition={floatTransition}
        >
          <Image
            src={cemera}
            alt="Camera"
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute bottom-4 left-4 right-4 text-center">
            <div className="w-full bg-white/10 backdrop-blur-md border border-white/20 shadow-md text-white px-3 py-2 text-sm rounded-2xl transition hover:bg-white/20">
              <span className="text-black font-semibold text-lg">
                Let's Code
              </span>
            </div>
          </div>
        </motion.div>

        {/* Heart Button Floating */}
        <motion.div
          className="absolute top-120 right-24"
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          <button className="flex items-center gap-4 bg-black border-2 border-dashed border-zinc-700 rounded-2xl px-6 py-3 transition-colors hover:border-zinc-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#F91880"
              className="w-8 h-8"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            <span className="text-white text-xl font-semibold">
              Mayank Singh
            </span>
          </button>
        </motion.div>

        {/* Person Card */}
        <motion.div
          className="absolute top-[36rem] right-24 w-48 rounded-2xl shadow-2xl overflow-hidden"
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          <Image
            src={may}
            alt="Person"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-2 left-2 right-2">
            <button className="w-full bg-white/10 backdrop-blur-md border border-white/20 shadow-md text-white px-3 py-2 text-sm rounded-2xl transition hover:bg-white/20">
              <span className="font-semibold">Hire me</span>
            </button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
