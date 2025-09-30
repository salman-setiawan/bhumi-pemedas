import React, { useState, useRef } from "react";
import Parallax from '../components/animate/Parallax'
import Button from '../components/Button'
import FeatureCard from '../components/FeatureCard'
import TestimonialCard from '../components/TestimonialCard'
import dataHomepage from "../data/dataHomepage";

const Home = () => {
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
      {/* Section 1 */}
      <div>
        <div className="overflow-hidden relative cursor-pointer h-[18rem]" onClick={handleOpenVideo}>
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

      {/* Section 2 dst tetap sama */}
      <div className="w-full flex flex-col px-6 pt-8 pb-12 bg-[#2C3626] gap-y-8">
        <div className="flex flex-col gap-y-1">
          <img src="/brand.svg" alt="" className="w-20" />
          <div className="font-bold text-[#FFF3C6] text-[24px]">Sudah lama tinggal di samboja tapi belum punya rumah?</div>
        </div>
        <Button label='Miliki rumah sekarang!' font='bold' bg='#FFF3C6' color='#2C3626' />
      </div>

      <Parallax img='drone-2.jpg' />

      <div className="flex flex-col bg-[#FFF3C6] gap-y-3 pt-10 pb-16">
        <div className="font-bold text-[#2C3626] text-[24px] text-center">Apa kata mereka?</div>
        <div className="w-full overflow-x-auto px-6">
          <div className="flex gap-x-2 py-4 snap-x snap-mandatory">
            {dataHomepage[0].testimonial.map((item) => (
              <div key={item.uid} className="snap-center shrink-0 pr-6">
                <TestimonialCard vid={item.vid} img={item.img} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center text-center px-6 py-8 bg-[#2C3626]">
        <div className="font-bold text-[#FFF3C6] text-[24px]">dan kenapa sih harus punya rumah di Bhumi Pemedas Samboja?</div>
      </div>
      <div className="flex flex-col lg:flex-row lg:p-8 lg:gap-x-8 bg-[#FFF3C6]">
        {dataHomepage[0].benefit.map((item) => (
          <FeatureCard
            key={item.uid}
            img={item.img}
            title={item.title}
            desc={item.desc}
          />
        ))}
      </div>
      <div className="flex flex-col lg:flex-row items-center bg-[#2C3626] gap-x-8">
        <img src="/denah.jpg" alt="img" className="lg:hidden w-full object-cover" />
        <div className="w-full flex flex-col px-6 pt-12 pb-16 lg:py-12 gap-y-8">
          <div className="p-1.5 bg-red-600 uppercase font-semibold text-white w-fit text-[12px]">persediaan terbatas!</div>
          <div className="flex flex-col gap-y-2">
            <div className="font-semibold text-[#FFF3C6] text-[24px]">Dapatkan segera kavling kami dengan harga:</div>
            <div className="font-black text-[#FFF3C6] text-[48px] uppercase">60 Juta Cash</div>
            <div className="font-semibold text-[#FFF3C6] text-[24px]">atau bayar DP 30 Juta, dengan cicilan 2 juta per bulan.</div>
          </div>
          <Button label='Beli sekarang!' font='bold' bg='#FFF3C6' color='#2C3626' />
        </div>
        <img src="/denah.jpg" alt="img" className="hidden lg:block h-[32rem] w-1/2 object-cover" />
      </div>

      <div className="w-full flex flex-col lg:justify-center lg:text-center px-6 pt-8 pb-16 bg-[#FFF3C6] gap-y-8">
        <div className="w-2/3 lg:w-3/3 font-bold text-[#2C3626] text-[24px]">Hubungi kami untuk informasi lebih lanjut</div>
        <Button label='Kontak Whatsapp kami disini' font='bold' bg='#2C3626' color='#FFF3C6' />
      </div>
    </div>
  );
}

export default Home;
