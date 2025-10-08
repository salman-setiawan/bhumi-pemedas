import ParallaxOther from "../components/animate/ParallaxOther"
import FasumGallery from "../components/FasumGallery"
import Navigation from "../components/Navigation"
import dataFasum from "../data/dataFasum"

const Bio = () => {
  return (
    <div className="bg-[#FFF7DB]">
      <title>Tentang Kami</title>
      <div className="sticky top-0 z-50">
        <Navigation />
      </div>
      <ParallaxOther img='drone-2.webp' title='Tentang Kami' />
      <div className="flex w-full justify-center">
        <div className="flex flex-col gap-y-12 py-12 lg:px-6 lg:max-w-[1200px] w-full">
          <div className="font-medium lg:text-[18px] text-justify px-6 lg:px-0">
            Perumahan Bhumi Pemedas Permai, menjadi perumahan terbesar dan satu-satunya yang berada di daerah Pemedas, Samboja yang sudah berdiri dari 2008. Lokasinya yang strategis dilalui oleh jalan poros Handil-Balikpapan dan tepat di depan Pantai Pemedas Wisata menjadikan lokasi ini menarik untuk di huni bersama keluarga.
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <img src="/hepni.webp" alt="" className="h-full object-cover lg:rounded-xl" />
            <div className="flex flex-col gap-y-4 lg:gap-y-8 lg:py-8 px-6 lg:px-0">
              <div className="font-medium lg:text-[18px] text-justify lg:w-5/6">
                Kami siap memberikan layanan dan fasilitas terbaik untuk warga Bhumi Pemedas yang nyaman dan sejahtera.
              </div>
              <div className="flex flex-col gap-y-1">
                <div className="font-bold text-[20px]">Muhammad Hepni</div>
                <div className="font-medium">Pemilik Bhumi Pemedas Permai</div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 gap-x-8 py-4">
            <div className="flex flex-col gap-y-2 py-4">
              <div className="w-full lg:rounded-xl h-[24rem] lg:h-[28rem]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.872642978547!2d116.8569429758568!3d-1.2475016987406025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df1475fed475dab%3A0x6a798074d3bbb462!2sToronto%20JB%2008!5e0!3m2!1sid!2sid!4v1759905850990!5m2!1sid!2sid"
                  className="lg:rounded-xl"
                  width="100%"
                  height="100%"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="font-bold text-[20px] px-6 lg:px-0 pt-4">Alamat Pusat.</div>
              <div className="font-medium lg:text-[18px] text-justify px-6 lg:px-0">
                Komplek Perumahan Balikpapan Baru, Cluster TORONTO Blok – JB, No.08 Balikpapan Selatan Kode Pos 76114
              </div>
            </div>
            <div className="flex flex-col gap-y-2 py-4">
              <div className="w-full lg:rounded-xl h-[24rem] lg:h-[28rem]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20114.XXXX!2d117.1348779!3d-0.9992735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df6a900306faead%3A0xbcee5c629979480a!2sPerumahan+Bhumi+Pemedas+Permai!5e0!3m2!1sid!2sid!4vXXXXXXXXXXXXXX"
                  className="lg:rounded-xl"
                  width="100%"
                  height="100%"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="font-bold text-[20px] px-6 lg:px-0 pt-4">Alamat Pemasaran.</div>
              <div className="font-medium lg:text-[18px] text-justify px-6 lg:px-0">
                Jl. Raya Handil II - Balikpapan Blok.AA No.09, Teluk Pemedas Kec. Samboja, Kab. Kutai Kartanegara Kode Pos 75277
              </div>
            </div>
          </div>
          
          {dataFasum.map((item) => (
            <div className="px-6 lg:px-0">
              <FasumGallery
                key={item.uid}
                label={item.label}
                images={item.images}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Bio