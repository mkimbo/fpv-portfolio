"use client";
import React, { useEffect, useRef } from "react";

function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  // const [showFallback] = useState<boolean>()

  useEffect(() => {
    const { current: video } = videoRef;
    if (video) {
      video.addEventListener("suspend", () => {
        // setShowFallback(true);
        // console.warn('Video was suspended, rendering fallback image.')
      });
    }
  }, []);
  return (
    <div id="hero" className="w-full h-[500px] lg:h-[700px] pb-10">
      {" "}
      <video
        autoPlay
        className="w-full lg:max-w-7xl mx-auto h-full object-cover bg-no-repeat "
        controls={true}
        loop
        muted
        onClick={() => {}}
        playsInline
        ref={videoRef}
      >
        <source src={`${process.env.NEXT_PUBLIC_SITE_URL}/sample1.mp4`} />
      </video>
    </div>
  );
}

export default Hero;
