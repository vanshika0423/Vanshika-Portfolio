"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const titles = ["how are you ?",];

export default function LoadingScreen() {
  const [show, setShow] = useState(true);
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    let titleInterval;

    if (currentTitleIndex < titles.length - 1) {
      titleInterval = setInterval(() => {
        setCurrentTitleIndex((prev) => prev + 1);
      }, 1600);
    } else {
      const delay = setTimeout(() => {
        setShow(false);
      }, 1000); 

      return () => clearTimeout(delay);
    }

    return () => clearInterval(titleInterval);
  }, [currentTitleIndex]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 bg-black z-[999] flex items-center justify-center"
          initial={{ y: 0 }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 2, ease: [0.65, 0, 0.35, 1] }}
        >
          <motion.h1
            key={currentTitleIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="text-white text-3xl sm:text-4xl md:text-5xl font-bold"
          >
            {titles[currentTitleIndex]}
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
