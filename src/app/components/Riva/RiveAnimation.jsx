"use client";

import { useRive } from "@rive-app/react-canvas";

export default function RiveAnimation() {
  const { RiveComponent } = useRive({
    src: "/rive/pomodoro.riv", 
    stateMachines: "State Machine 1",
    autoplay: true,
  });

  return (
    <div className="w-[400px] h-[400px] md:w-[600px] md:h-[600px] mx-auto">
      <RiveComponent className="w-full h-full" />
    </div>
  );
}
