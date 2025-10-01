import React, { useState } from "react";

const TestimonialCard = ({ img, vid }) => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <>
      <div
        className="w-[20rem] lg:w-[24rem] aspect-square overflow-hidden shadow-lg shadow-black/30 relative cursor-pointer"
        onClick={() => setShowVideo(true)}
      >
        <img
          src={img}
          alt="Thumbnail"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
      {showVideo && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 transition-all duration-300 px-5">
          <div className="w-full max-w-3xl aspect-square relative">
            <video className="w-full h-full object-cover" controls autoPlay>
              <source src={vid} type="video/mp4" />
              Browser kamu tidak mendukung tag video.
            </video>
            <button
              onClick={() => setShowVideo(false)}
              className="absolute -top-10 right-0 text-white text-2xl"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default TestimonialCard;
