import React, { useState } from "react";

const TestimonialCard = ({ img, vid, desc }) => {
  const [showVideo, setShowVideo] = useState(false);

  // konversi link YouTube Shorts ke embed
  const convertToEmbed = (url) => {
    if (!url) return "";
    const videoId = url.split("/").pop();
    return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  };

  return (
    <div className="flex flex-col items-center">
      {/* Thumbnail */}
      <div
        className="w-[20rem] lg:w-[24rem] aspect-square overflow-hidden shadow-lg shadow-black/30 relative cursor-pointer rounded-2xl"
        onClick={() => setShowVideo(true)}
      >
        <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-20 w-20 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>

      {showVideo && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-2">
          <div className="w-full max-w-xl aspect-square relative">
            <iframe
              className="w-full h-full"
              src={convertToEmbed(vid)}
              title="YouTube video testimonial"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <button
              onClick={() => setShowVideo(false)}
              className="absolute -top-12 right-5 text-white text-2xl"
            >
              ✕
            </button>
            {desc && (
              <p className="pt-5 flex justify-center text-white font-medium italic text-[14px] lg:text-[16px]">
                <div className="py-1.5 px-3 bg-black/50 w-fit">{desc}</div>
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default TestimonialCard;
