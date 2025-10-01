import React, { useState, useRef } from "react";

const Trailer = () => {
  const [showVideo, setShowVideo] = useState(false);
  const thumbVideoRef = useRef(null);

  const handleOpenVideo = () => {
    setShowVideo(true);
    if (thumbVideoRef.current) thumbVideoRef.current.pause();
  };

  const handleCloseVideo = () => {
    setShowVideo(false);
    if (thumbVideoRef.current) thumbVideoRef.current.play();
  };

  return (
    <div>
      <div className="overflow-hidden relative cursor-pointer w-screen lg:w-full h-[18rem] lg:h-auto" onClick={handleOpenVideo}>
        <video ref={thumbVideoRef} src="/1.0.mp4" className="w-full h-full object-cover" autoPlay loop muted playsInline />
        <div className="absolute inset-0 flex items-center justify-center bg-black/75">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
      {showVideo && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 transition-all duration-300 px-5">
          <div className="w-full max-w-3xl aspect-square relative">
            <video className="w-full h-full object-cover" controls autoPlay>
              <source src="/1.0.mp4" type="video/mp4" />
              Browser kamu tidak mendukung tag video.
            </video>
            <button onClick={handleCloseVideo} className="absolute -top-10 right-0 text-white text-2xl">
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Trailer