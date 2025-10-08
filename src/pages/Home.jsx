import ParticlesComponent from '../components/ParticlesComponent'
import Button from '../components/Button'
import FeatureCard from '../components/FeatureCard'
import TestimonialCard from '../components/TestimonialCard'
import dataHomepage from "../data/dataHomepage";
import Navigation from "../components/Navigation";
import Trailer from "../components/Trailer";
import ParallaxHome from '../components/animate/ParallaxHome';

const Home = () => {
  return (
    <div className="">
      <div className="sticky top-0 z-50">
        <Navigation />
      </div>
      {/* Section 1 */}
      <div className="flex justify-center bg-[#FFF7DB] relative">
        <ParticlesComponent />
        <div className="flex flex-col lg:flex-row w-full lg:max-w-[1200px] lg:px-6 pb-12 lg:pt-20 lg:pb-24 items-center gap-x-12">
          <div className="flex lg:hidden w-full"><Trailer /></div>
          <div className="w-full flex flex-col gap-y-8 px-6 pt-6 lg:px-0 lg:pt-0">
            <div className="flex flex-col gap-y-4">
              <img src="/brand.svg" alt="" className="w-16" />
              <div className="font-bold text-[32px] lg:w-5/6">Sudah lama tinggal di samboja, tapi belum punya rumah?</div>
            </div>
            <Button
              label='Miliki sekarang!'
              colorSpec='text-white bg-[#21271D]'
              link='https://wa.me/6285753127810?text=Halo%20saya%20dari%20website,%20tertarik%20dengan%20produk%20anda.'
              target='_blank'
            />
          </div>
          <div className="hidden lg:block shadow-2xl shadow-black/30 rounded-4xl"><Trailer /></div>
        </div>
      </div>
      <ParallaxHome img='drone-2.webp' />
      {/* Section 2 */}
      <div className="flex w-full justify-center bg-[#FFF7DB]">
        <div className="flex flex-col gap-y-4 py-16 lg:max-w-[1200px] w-full px-0 lg:px-6">
          <div className="font-bold text-[#21271D] text-[32px] lg:text-[40px] px-6 lg:px-0">Apa kata mereka?</div>
          <div className="flex flex-col gap-y-1 font-medium text-justify text-[#21271D] px-6 lg:px-0">
            <div className="">Yuk simak kisah mereka yang sudah tinggal dan merasakan suasana Perumahan Bhumi Pemedas Permai.</div>
            <div className="">Disini anda bisa geser foto/gambar ke kanan dan kiri untuk melihat lebih banyak testimoni.</div>
          </div>
          <div className="flex gap-x-4 lg:gap-x-6 px-6 lg:px-0 py-6 lg:py-8 snap-x snap-mandatory overflow-x-auto">
            {dataHomepage[0].testimonial.map((item) => (
              <TestimonialCard
                key={item.uid}
                img={item.img}
                vid={item.vid}
                desc={item.desc}
              />
            ))}
          </div>
        </div>
      </div>
      {/* Section 3 */}
      <div className="flex w-full justify-center bg-[#FFF7DB]">
        <div className="flex flex-col gap-y-12 pt-2 pb-20 lg:max-w-[1200px] w-full px-0 lg:px-6">
          <div className="font-bold text-[#21271D] text-[32px] lg:text-[40px] px-6 lg:px-0 lg:w-4/6">Kenapa sih harus punya rumah di Bhumi Pemedas Samboja?</div>
          <div className="flex flex-col gap-y-8 lg:max-w-[1200px]">
            {dataHomepage[0].benefit.map((item) => (
              <FeatureCard
                key={item.uid}
                img={item.img}
                title={item.title}
                desc={item.desc}
                cta={item.cta}
                link={item.link}
              />
            ))}
          </div>
        </div>
      </div>
      {/* Section 4 */}
      <div className="flex justify-center bg-[#141414]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4 items-center">
          <img src="/denah.webp" alt="img" className="lg:hidden w-full object-cover" />
          <div className="flex pt-10 pb-16 lg:py-0 lg:justify-end">
            <div className="flex px-6 lg:w-[592px] flex flex-col gap-y-8">
              <div className="p-1.5 bg-red-600 uppercase font-semibold text-white w-fit text-[12px] animate-blink">persediaan terbatas!</div>
              <div className="flex flex-col gap-y-2">
                <div className="font-medium text-[#FFF3C6] text-[20px]">Dapatkan segera kavling kami dengan harga:</div>
                <div className="font-black text-[#FFF3C6] text-[48px] uppercase">60 Juta Cash</div>
                <div className="font-medium text-[#FFF3C6] text-[20px]">atau bayar DP 30 Juta, dengan cicilan 2 juta per bulan.</div>
              </div>
              <div className="flex gap-x-4">
                <Button
                  label='Miliki rumah sekarang!'
                  colorSpec='bg-gradient-to-r from-[#723014] to-[#CF7C33] text-white'
                  link='https://wa.me/6285753127810?text=Halo%20saya%20dari%20website,%20tertarik%20dengan%20produk%20anda.'
                  target='_blank'
                />
                <Button
                  label='Selengkapnya'
                  colorSpec='text-[#F5923B]'
                  link='/kavling'
                />
              </div>
            </div>
          </div>
          <img src="/denah.webp" alt="img" className="hidden lg:block min-h-[26rem] w-full object-cover" />
        </div>
      </div>
      {/* Section 5 */}
      <div className="w-full bg-[#141414] flex flex-col">
        <div className="w-full h-[24rem] lg:h-[32rem]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20114.XXXX!2d117.1348779!3d-0.9992735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df6a900306faead%3A0xbcee5c629979480a!2sPerumahan+Bhumi+Pemedas+Permai!5e0!3m2!1sid!2sid!4vXXXXXXXXXXXXXX"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="font-bold text-[#FFF3C6] text-center px-6 py-3">Lokasi Bhumi Pemedas Samboja</div>
      </div>
      {/* Section 6 */}
      <div className="relative w-full flex flex-col lg:justify-center px-6 pt-12 pb-16 lg:pt-24 lg:pb-28 gap-y-8 bg-cover bg-center" style={{ backgroundImage: "url('/drone.webp')" }}>
        <div className="absolute inset-0 bg-black/75"></div>
        <div className="relative text-center font-bold text-[#FFF3C6] text-[24px] text-left lg:text-center w-4/5 lg:w-full">
          Hubungi kami untuk informasi lebih lanjut
        </div>
        <div className="relative flex flex-col lg:flex-row justify-center gap-6">
          <Button
            label={
              <>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 fill-current text-white">
                  <path d="M12 2a10 10 0 0 0-8.94 14.58L2 22l5.66-1.53A10 10 0 1 0 12 2zm0 18a8 8 0 0 1-4.07-1.12l-.29-.17-3.34.9.91-3.27-.19-.3A8 8 0 1 1 12 20zm4.36-6.13c-.25-.13-1.47-.72-1.7-.81-.22-.08-.38-.12-.54.12-.16.23-.63.8-.78.96-.14.16-.28.18-.52.06-.25-.13-1.06-.39-2.03-1.24-.75-.67-1.26-1.49-1.41-1.74-.15-.25-.02-.39.11-.52.12-.12.25-.29.37-.44.12-.15.16-.25.24-.42.08-.16.04-.32-.02-.44s-.53-1.32-.73-1.8c-.19-.47-.38-.41-.52-.41h-.44c-.15 0-.4.06-.6.26-.21.21-.79.77-.79 1.89s.81 2.19.93 2.34c.12.15 1.6 2.43 3.89 3.41.54.23.97.37 1.3.47.54.17 1.03.15 1.42.09.43-.06 1.34-.55 1.53-1.08.19-.53.19-.99.13-1.08-.06-.1-.21-.15-.44-.26z" />
                </svg>
                WhatsApp
              </>
            }
            colorSpec="flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white"
            link="https://wa.me/6285753127810?text=Halo%20saya%20dari%20website,%20tertarik%20dengan%20produk%20anda."
            target="_blank"
          />
          <Button
            label={
              <>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 fill-current text-white">
                  <path d="M22 12a10 10 0 1 0-11.5 9.87v-7h-2v-3h2v-2c0-2 1.2-3.1 3-3.1.9 0 1.8.16 1.8.16v2h-1c-1 0-1.3.63-1.3 1.27v1.67h2.3l-.37 3h-1.93v7A10 10 0 0 0 22 12z" />
                </svg>
                Facebook
              </>
            }
            colorSpec="flex items-center gap-2 bg-[#1877F2] hover:bg-[#0f6ae6] text-white"
            link="https://www.facebook.com/bhumipemedaspermaisamboja"
            target="_blank"
          />
          <Button
            label={
              <>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                  <path d="M7.75 2A5.75 5.75 0 002 7.75v8.5A5.75 5.75 0 007.75 22h8.5A5.75 5.75 0 0022 16.25v-8.5A5.75 5.75 0 0016.25 2h-8.5zm0 1.5h8.5A4.25 4.25 0 0120.5 7.75v8.5a4.25 4.25 0 01-4.25 4.25h-8.5A4.25 4.25 0 013.5 16.25v-8.5A4.25 4.25 0 017.75 3.5zm8.75 2a.75.75 0 100 1.5.75.75 0 000-1.5zM12 7a5 5 0 100 10 5 5 0 000-10zm0 1.5a3.5 3.5 0 110 7 3.5 3.5 0 010-7z" />
                </svg>
                Instagram
              </>
            }
            colorSpec="flex items-center gap-2 bg-[#E4405F] hover:bg-[#cc3953] text-white"
            link="https://www.instagram.com/bhumi.pemedas.permai/"
            target="_blank"
          />
        </div>
      </div>
      {/* Footer */}
      <div className="text-[#FFF3C6] text-[14px] px-6 lg:px-8 pt-6 pb-8 bg-[#141414] flex flex-col lg:flex-row gap-y-4 lg:gap-x-16">
        <div className="font-semibold text-[18px] lg:min-w-[420px]">PT. Cipta Lima Sekawan</div>
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
  );
}

export default Home;
