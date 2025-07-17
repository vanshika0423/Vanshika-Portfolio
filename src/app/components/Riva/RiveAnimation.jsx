"use client";

import { useRive } from "@rive-app/react-canvas";

export default function RiveAnimation() {
  const { RiveComponent } = useRive({
    src: "/rive/pomodoro.riv", 
      stateMachines: "State Machine 1",
    autoplay: true,
  });

  return(
      <div className="w-[600px] h-[600px]">
        <RiveComponent className="w-full h-full" />
      </div>
  );
}
