import ParallaxOther from "../components/animate/ParallaxOther"
import Navigation from "../components/Navigation"
import Button from '../components/Button'

const Kavling = () => {
  return (
    <div className="bg-[#FFF7DB]">
      <title>Info Kavling</title>
      <div className="sticky top-0 z-50">
        <Navigation />
      </div>
      <ParallaxOther img='drone-2.webp' title='Kavling' />
      <div className="flex w-full justify-center pb-8">
        <div className="flex flex-col gap-y-8 py-8 px-6 lg:max-w-[1200px] w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-3 gap-y-2 items-center">
            <div className="flex flex-col gap-y-4 lg:gap-y-8 lg:w-4/5 pt-0 pb-4 lg:py-12">
              <div className="flex flex-col gap-y-3">
                <div className="font-bold text-[#2C3626] text-[32px]">Kavling Tipe A</div>
                <div className="px-3 py-1.5 bg-red-600 text-white font-semibold lg:text-[18px] w-fit">Rp. 60 Juta per Kavling</div>
              </div>
              <ul className="list-disc list-outside flex flex-col gap-y-3 pl-5">
                <li className="text-[#2C3626] font-bold text-[20px]">Berukuran 10x15 m².</li>
                <li className="text-[#2C3626] font-bold text-[20px]">Tanah sudah matang, dengan jalan pengerasan batu latrit siap untuk mobilisasi material bangunan.</li>
                <li className="text-[#2C3626] font-bold text-[20px]">lokasi strategis, dekat pantai pemedas dan Pertamina Hulu Mahakam. cocok juga dibangun villa dan guest house.</li>
                <li className="text-[#2C3626] font-bold text-[20px]">Untuk Legalitas Sertifikat Hak Milik (SHM) pecah per kavling.</li>
              </ul>
              <Button
                label='Miliki sekarang!'
                colorSpec='text-white bg-[#21271D]'
                link='https://wa.me/6285753127810?text=Halo%20saya%20dari%20website,%20tertarik%20dengan%20produk%20anda.'
                target='_blank'
              />
            </div>
            <div className="bg-black h-full flex items-center">
              <img src="/denah.webp" alt="" className="w-full" />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-3 gap-y-3 lg:gap-y-6">
            <div className="font-bold text-[#2C3626] text-[28px]">Kondisi Kavling</div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-3 gap-y-2">
            </div>
            <img src="/kavling/kondisi-kavling-1.webp" alt="" className="object-cover" />
            <img src="/kavling/kondisi-kavling-2.webp" alt="" className="object-cover" />
            <img src="/kavling/kondisi-kavling-3.webp" alt="" className="object-cover" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Kavling