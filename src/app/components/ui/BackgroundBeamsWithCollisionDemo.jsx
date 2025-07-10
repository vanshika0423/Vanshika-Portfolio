import React from "react";
import { BackgroundBeamsWithCollision } from "./background-beams-with-collision";

export function BackgroundBeamsWithCollisionDemo() {
  return (
    <BackgroundBeamsWithCollision>
      <div className="flex flex-col items-center justify-center h-screen w-full text-center px-4">
        <h2 className="text-2xl md:text-4xl lg:text-7xl font-bold text-black dark:text-white font-sans tracking-tight z-20">
          Hi&apos; My Name is Mayank Singh
        </h2>

        <div className="relative mt-4 z-20">
          <div className="absolute left-0 top-0 w-full bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
            <span className="text-2xl md:text-4xl lg:text-7xl font-bold">
              A Competitive Coder & Frontend Developer.
            </span>
          </div>
          <div className="relative bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500">
            <span className="text-2xl md:text-4xl lg:text-7xl font-bold">
              A Competitive Coder & Frontend Developer.
            </span>
          </div>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
}


// import React from "react";
// import Spline from "@splinetool/react-spline";

// export function BackgroundBeamsWithCollisionDemo() {
//   return (
//     <div className="w-full h-screen">
//       <Spline scene="/spline/sceneheor.splinecode" />
//     </div>
//   );
// }

