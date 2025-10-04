import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setOpen(!open);

  const menuItems = [
    { label: "Beranda", path: "/" },
    { label: "Kavling", path: "/kavling" },
    { label: "Cluster", path: "/cluster" },
    { label: "Fasilitas", path: "/fasilitas" },
    { label: "Tentang Kami", path: "/tentang-kami" },
  ];

  const handleNavigation = (path) => {
    navigate(path);
    setOpen(false); // otomatis tutup dropdown setelah klik (mobile)
  };

  return (
    <div className="sticky top-0 z-50">
      <div className="w-full flex justify-between items-center py-3 px-5.5 bg-[#21271D]/85 backdrop-blur-sm">
        <img src="/brand.svg" alt="brand" className="h-9" />
        
        {/* Tombol Menu (Mobile) */}
        <button
          onClick={toggleMenu}
          className="font-medium text-[16px] text-[#FFF3C6] cursor-pointer hover:text-[#E2C97A] p-1 lg:hidden"
        >
          Menu
        </button>

        {/* Navbar (Desktop) */}
        <ul className="hidden lg:flex gap-6 text-[#FFF3C6] font-medium">
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
        <div className="w-full py-1 absolute bg-[#FFF3C6] text-[#2C3626] shadow-lg shadow-black/40 overflow-hidden lg:hidden">
          <ul className="flex flex-col text-[14px] font-bold">
            {menuItems.map((item) => (
              <li
                key={item.label}
                onClick={() => handleNavigation(item.path)}
                className="px-6 py-3 cursor-pointer transition-colors hover:bg-[#3d4a31] hover:text-[#FFF3C6]"
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
