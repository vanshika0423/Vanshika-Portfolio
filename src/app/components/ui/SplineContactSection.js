"use client";

import Spline from "@splinetool/react-spline";
import { SignupFormDemo } from "./SignupFormDemoo";

export default function SplineContactSection() {
  return (
    <section className="w-full min-h-screen flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 h-[400px] md:h-auto">
             <Spline scene="/spline/scene.splinecode" />
      </div>

      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <SignupFormDemo />
      </div>
    </section>
  );
}
