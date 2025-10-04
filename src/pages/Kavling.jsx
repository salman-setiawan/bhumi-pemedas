import ParallaxOther from "../components/animate/ParallaxOther"
import Navigation from "../components/Navigation"

const Kavling = () => {
  return (
    <div className="bg-[#FFF3C6]">
      <div className="sticky top-0 z-50">
        <Navigation />
      </div>
      <ParallaxOther img='drone-2.jpg' title='Kavling' />
      <div className="flex w-full justify-center bg-[#FFF3C6] pb-8">
        <div className="flex flex-col gap-y-8 py-8 px-6 lg:max-w-[1200px] w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-3 gap-y-2 items-center">
            <div className="flex flex-col gap-y-4 lg:gap-y-8 lg:w-4/5 pt-0 pb-4 lg:py-12">
              <div className="flex flex-col gap-y-3">
                <div className="font-bold text-[#2C3626] text-[32px]">Kavling Tipe A</div>
                <div className="px-3 py-1.5 bg-[#2C3626] text-[#FFF3C6] font-semibold lg:text-[18px] w-fit">Rp. 60 Juta per Kavling</div>
              </div>
              <ul className="list-disc list-outside flex flex-col gap-y-3 pl-5">
                <li className="text-[#2C3626] font-semibold text-[18px]">Berukuran 10x15 m².</li>
                <li className="text-[#2C3626] font-semibold text-[18px]">Tanah sudah matang, dengan jalan pengerasan batu latrit siap untuk mobilisasi material bangunan.</li>
                <li className="text-[#2C3626] font-semibold text-[18px]">lokasi strategis, dekat pantai pemedas dan Pertamina Hulu Mahakam. cocok juga dibangun villa dan guest house.</li>
                <li className="text-[#2C3626] font-semibold text-[18px]">Untuk Legalitas Sertifikat Hak Milik (SHM) pecah per kavling.</li>
              </ul>
            </div>
            <img src="/home.jpg" alt="" className="h-full object-cover" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-3 gap-y-3 lg:gap-y-6">
            <div className="font-bold text-[#2C3626] text-[24px]">Kondisi Kavling</div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-3 gap-y-2">
            </div>
            <img src="/home.jpg" alt="" className="object-cover" />
            <img src="/home.jpg" alt="" className="object-cover" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Kavling