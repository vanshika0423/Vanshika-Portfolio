"use client";
import { useRef } from "react";
import { TimelineDemo } from "./components/ui/TimelineDemo";
import { BackgroundBeamsWithCollisionDemo } from "./components/ui/BackgroundBeamsWithCollisionDemo";
import { StickyScrollRevealDemo } from "./components/ui/StickyScrollRevealDemo";
import { SignupFormDemo } from "./components/ui/SignupFormDemoo";
import SplashCursor from "./components/ui/SplashCursor";
import { FloatingNavDemo } from "./components/ui/FloatingNavDemo";
import { HoverBorderGradientDemo } from "./components/ui/HoverBorderGradientDemo";
import SplineContactSection from "./components/ui/SplineContactSection";
import Footer from "./components/ui/Footer";
import BlurText from "./components/ui/BlurText";

import SplitText from "./components/ui/SplitText/SplitText";

import { GlowingEffectDemo } from "./components/ui/GlowingEffectDemo";
export default function Home() {
  const homeRef = useRef(null);
  const projectRef = useRef(null);
  const codingRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className="relative">
      <FloatingNavDemo
        refs={{
          homeRef,
          projectRef,
          codingRef,
          contactRef,
        }}
      />
      <SplashCursor />
      <div ref={homeRef}>
        <BackgroundBeamsWithCollisionDemo />
      </div>

      <div ref={projectRef}>
        <TimelineDemo />
      </div>
      <div className="w-full px-4 py-16 flex justify-center">
        <BlurText
          text="Deep diving into competitive programming and learning the art of optimization."
          className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white text-center leading-snug max-w-6xl"
        />
      </div>
      <div ref={codingRef}>
        <StickyScrollRevealDemo />
      </div>

  <div className="w-full px-4 py-5 mt-20 flex justify-center">
  <SplitText
    text="Certification"
    className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white text-center leading-snug max-w-6xl"
  />
</div>


      <GlowingEffectDemo />

      <div ref={contactRef}>
        <SplineContactSection />
      </div>
      <Footer />
    </div>
  );
}
