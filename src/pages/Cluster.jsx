import ParallaxOther from "../components/animate/ParallaxOther"
import Navigation from "../components/Navigation"

const Cluster = () => {
  return (
    <div className="bg-[#FFF7DB]">
      <title>Info Cluster</title>
      <div className="sticky top-0 z-50">
        <Navigation />
      </div>
      <ParallaxOther img='drone-2.webp' title='Cluster' />
      <div className="flex w-full justify-center">
        <div className="flex flex-col gap-y-3 pt-8 lg:max-w-[1200px] w-full h-screen">
          <div className="font-bold text-[#2C3626] text-[24px] text-center">AKAN DATANG</div>
        </div>
      </div>
      {/* Footer */}
      <div className="text-[#FFF3C6] text-[14px] px-6 lg:px-8 pt-6 pb-8 bg-[#141414] flex flex-col lg:flex-row gap-y-4 lg:gap-x-16">
        <div className="font-semibold text-[18px] min-w-[420px]">PT. Cipta Lima Sekawan</div>
        <div className="flex flex-col gap-y-1">
          <div className="font-semibold">Kantor Pemasaran</div>
          <div className="">Jl. Raya Handil II - Balikpapan Blok.AA No.09, Teluk Pemedas Kec. Samboja, Kab. Kutai Kartanegara Kode Pos 75277</div>
        </div>
        <div className="flex flex-col gap-y-1">
          <div className="font-semibold">Kantor Pusat</div>
          <div className="">Komplek Perumahan Balikpapan Baru, Cluster TORONTO Blok – JB, No.08 Balikpapan Selatan Kode Pos 76114 </div>
        </div>
      </div>
      <div className="text-[#FFF3C6] text-center text-[12px] px-6 py-3 bg-[#141414]">@ 2025 ENFX. All right reserved.</div>
    </div>
  )
}

export default Cluster