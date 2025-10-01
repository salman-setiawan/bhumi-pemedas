import { useEffect, useRef } from "react";

const Parallax = ({ img }) => {
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
    <div className="relative h-[20rem] overflow-hidden">
      <img
        ref={imgRef}
        src={img}
        alt="img"
        className="h-[130%] w-full object-cover translate-y-[-110px] xl:translate-y-[-140px]"
      />
      <div
        className="absolute inset-0 bg-black/40"></div>
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
          `
        }}
      ></div>
    </div>
  );
};


export default Parallax;
