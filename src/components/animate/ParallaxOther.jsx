import { useEffect, useRef } from "react";

const ParallaxOther = ({ img, title }) => {
  const imgRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      requestAnimationFrame(() => {
        if (imgRef.current) {
          imgRef.current.style.transform = `translateY(${scrollY * 0.2}px)`;
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative h-[24rem] lg:h-[28rem] overflow-hidden">
      <img
        ref={imgRef}
        src={img}
        alt="img"
        className="h-[130%] w-full object-cover translate-y-[-110px] xl:translate-y-[-100px]"
      />
      <div className="absolute inset-0 bg-black/60"></div>
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(
              to bottom,
              rgba(0,0,0,0.4) 0%,
              rgba(0,0,0,0) 15%,
              rgba(0,0,0,0) 80%,
              rgba(0,0,0,0.7) 100%
            )
          `,
        }}
      ></div>
      <div className="absolute inset-0 flex items-end justify-center">
        <div className="max-w-[1200px] w-full px-6 pb-10 text-white">
          <ul className="flex space-x-2 text-sm pb-2 font-medium">
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li>/</li>
            <li className="text-gray-400">{title}</li>
          </ul>
          <h1 className="text-[28px] lg:text-[48px] font-bold">
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ParallaxOther;
