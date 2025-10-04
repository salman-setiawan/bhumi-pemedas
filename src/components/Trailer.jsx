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
      <div
        className="overflow-hidden relative cursor-pointer w-screen lg:w-full h-[28rem] lg:h-auto"
        onClick={handleOpenVideo}
      >
        <video
          ref={thumbVideoRef}
          src="/1.0.mp4" // <-- ganti dengan file lokal/mp4 valid sebagai dummy thumbnail
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/75">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
          <div className="absolute bottom-4 lg:bottom-auto lg:top-6 text-white italic px-2 py-0.5 bg-black/50">
            <div className="text-[#fff3c6] font-medium text-[14px] lg:text-[16px]">
              tekan disini untuk memutar video dengan suara
            </div>
          </div>
        </div>
      </div>

      {showVideo && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-2">
          <div className="w-full max-w-xl aspect-square relative">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/Rl0t7Yiq18k?autoplay=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <button
              onClick={handleCloseVideo}
              className="absolute -top-12 right-5 text-white text-2xl"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Trailer;
