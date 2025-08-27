// "use client";

// import { useRive } from "@rive-app/react-canvas";

// export default function RiveAnimation() {
//   const { RiveComponent } = useRive({
//     src: "/rive/pomodoro.riv", 
//     stateMachines: "State Machine 1",
//     autoplay: true,
//   });

//   return (
//     <div className="w-[400px] h-[400px] md:w-[600px] md:h-[600px] mx-auto">
//       <RiveComponent className="w-full h-full" />
//     </div>
//   );
// }


"use client"; // (only needed for Next.js app directory, if using client components)

import Spline from '@splinetool/react-spline';

export default function HeroSpline() {
  return (
    <div style={{ width: '100%', height: '500px' }}>
      <Spline scene="https://prod.spline.design/MThNWdOAUhBErfmc/scene.splinecode" />
    </div>
  );
}
