import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setOpen(!open);

  const menuItems = [
    { label: "Beranda", path: "/" },
    { label: "Kavling", path: "/kavling" },
    { label: "Cluster", path: "/cluster" },
    { label: "Tentang Kami", path: "/tentang-kami" },
  ];

  const handleNavigation = (path) => {
    navigate(path);
    setOpen(false); 
  };

  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile(); 
    window.addEventListener("resize", checkMobile);

    const handleScroll = () => {
      if (window.scrollY > 310) {
        console.log('tes scrolled > 50');
        setScrolled(true);
      } else {
        setScrolled(false);
        console.log('tes else');
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed w-full items-center py-2.5 top-0 z-50 transition-all duration-300 lg:backdrop-blur-md lg:bg-[#FFF7DB]/65
        ${isMobile ? (scrolled ? "backdrop-blur-md bg-[#FFF7DB]/65 font-bold" : "bg-transparent text-[#FFF7DB] font-semibold") : ""}
      `}
    >
      <div className="px-5.5 lg:px-8 flex justify-between items-center">
        <img src="/brand.svg" alt="brand" className="h-9" />
      <button
        onClick={toggleMenu}
        className=" text-[16px] cursor-pointer hover:text-[#E2C97A] px-1 py-2 lg:hidden"
      >
        Menu
      </button>
      <ul className="hidden lg:flex gap-x-6 font-semibold">
        {menuItems.map((item) => (
          <li
            key={item.label}
            onClick={() => handleNavigation(item.path)}
            className="hover:text-[#E2C97A] cursor-pointer transition-colors p-1"
          >
            {item.label}
          </li>
        ))}
      </ul>
      </div>
      {/* Dropdown (Mobile) */}
      {open && (
        <div className="w-[200px] py-1 absolute top-16 right-4 bg-[#FFF7DB] shadow-xl shadow-black/10 overflow-hidden lg:hidden">
          <ul className="flex flex-col font-semibold">
            {menuItems.map((item) => (
              <li
                key={item.label}
                onClick={() => handleNavigation(item.path)}
                className="px-4 py-3 cursor-pointer transition-colors hover:bg-[#3d4a31] hover:text-[#FFF3C6] text-black"
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navigation;
