"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [show, setShow] = useState(true);
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    const textTimer = setTimeout(() => {
      setTextVisible(true);
    }, 200); 

    const exitTimer = setTimeout(() => {
      setShow(false);
    }, 2000); 

    return () => {
      clearTimeout(textTimer);
      clearTimeout(exitTimer);
    };
  }, []);

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
          {textVisible && (
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="text-white text-3xl sm:text-4xl md:text-5xl font-bold"
            >
              how are you?
            </motion.h1>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
