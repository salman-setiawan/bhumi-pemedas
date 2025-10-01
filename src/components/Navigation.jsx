import { useState } from "react";

const Navigation = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  return (
    <div className="sticky top-0 z-50">
      <div className="w-full flex justify-between items-center py-3 px-5 bg-[#25321E]/85 backdrop-blur-sm shadow-lg shadow-black/30">
        <img src="/brand.svg" alt="brand" className="h-9" />
        <button onClick={toggleMenu} className="font-semibold text-[16px] text-[#FFF3C6] p-1">
          Menu
        </button>
      </div>
      {open && (
        <div className="w-full py-1 absolute bg-[#FFF3C6] text-[#2C3626] shadow-lg shadow-black/40 overflow-hidden">
          <ul className="flex flex-col text-[14px] font-bold">
            <li className="px-6 py-3 hover:bg-[#3d4a31] cursor-pointer">Beranda</li>
            <li className="px-6 py-3 hover:bg-[#3d4a31] cursor-pointer">Kavling</li>
            <li className="px-6 py-3 hover:bg-[#3d4a31] cursor-pointer">Cluster</li>
            <li className="px-6 py-3 hover:bg-[#3d4a31] cursor-pointer">Fasilitas</li>
            <li className="px-6 py-3 hover:bg-[#3d4a31] cursor-pointer">Tentang Kami</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navigation;
