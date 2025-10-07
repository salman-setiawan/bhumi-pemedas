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
      <div className="flex justify-center bg-[#FFF7DB]">
        <div className="flex flex-col lg:flex-row w-full lg:max-w-[1200px] lg:px-6 pb-12 lg:py-20 items-center gap-x-12">
          <div className="flex lg:hidden w-full"><Trailer /></div>
          <div className="w-full flex flex-col gap-y-8 px-6 pt-6 lg:px-0 lg:pt-0">
            <div className="flex flex-col gap-y-4">
              <img src="/brand.svg" alt="" className="w-16" />
              <div className="font-bold text-[32px] lg:w-5/6">Sudah lama tinggal di samboja, tapi belum punya rumah?</div>
            </div>
            <Button 
              label='Miliki rumah sekarang!' 
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
        <div className="flex flex-col gap-y-12 py-16 lg:max-w-[1200px] w-full px-6">
          <div className="font-bold text-[#21271D] text-[32px] lg:text-[40px]">Apa kata mereka?</div>
          <div className="flex gap-x-6 pb-6 snap-x snap-mandatory overflow-x-auto">
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
        <div className="flex flex-col gap-y-12 py-16 lg:max-w-[1200px] w-full px-0 lg:px-6">
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
        <div className="font-bold text-[#FFF3C6] text-center text-[16px] px-6 py-3">Lokasi Bhumi Pemedas Samboja</div>
      </div>
      {/* Section 6 */}
      <div className="relative w-full flex flex-col lg:justify-center lg:text-center px-6 pt-24 pb-28 gap-y-8 bg-cover bg-center" style={{ backgroundImage: "url('/drone.webp')" }}>
        <div className="absolute inset-0 bg-black/75"></div>
        <div className="relative text-center font-bold text-[#FFF3C6] text-[24px]">
          Hubungi kami untuk informasi lebih lanjut
        </div>
        <div className="relative flex justify-center gap-x-6">
          <Button 
            label={
              <>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-white">
                  <path d="M16.04 2.003C8.835 2.003 2.97 7.868 2.97 15.073c0 2.627.69 5.036 2.004 7.24L2 30l7.925-2.935c2.137 1.172 4.313 1.735 6.115 1.735h.005c7.205 0 13.07-5.865 13.07-13.07 0-7.205-5.865-13.07-13.07-13.07zm0 23.493c-1.584 0-3.22-.43-4.66-1.248l-.334-.197-4.703 1.743 1.57-4.848-.218-.347a10.89 10.89 0 01-1.642-5.769c0-6.013 4.894-10.907 10.907-10.907 6.013 0 10.907 4.894 10.907 10.907s-4.894 10.906-10.907 10.906zm5.948-8.186c-.326-.163-1.932-.954-2.232-1.063-.3-.109-.519-.163-.738.164-.218.327-.848 1.063-1.04 1.282-.19.218-.382.245-.708.082-.326-.163-1.376-.507-2.62-1.616-.969-.865-1.622-1.933-1.812-2.259-.19-.327-.02-.503.144-.665.148-.147.327-.382.49-.573.163-.191.218-.327.327-.546.109-.218.055-.41-.027-.573-.082-.163-.738-1.781-1.01-2.438-.266-.64-.537-.553-.738-.563l-.628-.01c-.218 0-.573.082-.873.382-.3.3-1.145 1.118-1.145 2.727 0 1.608 1.172 3.166 1.335 3.384.163.218 2.308 3.527 5.593 4.942.782.337 1.392.538 1.868.688.784.25 1.496.215 2.06.131.628-.094 1.932-.789 2.205-1.551.273-.762.273-1.414.19-1.551-.082-.136-.3-.218-.627-.382z"/>
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
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                  <path d="M22 12a10 10 0 10-11.5 9.87v-6.99H8.9v-2.88h1.6V9.41c0-1.58.94-2.46 2.38-2.46.69 0 1.41.12 1.41.12v1.55h-.8c-.79 0-1.04.49-1.04.99v1.19h1.77l-.28 2.88h-1.49v6.99A10 10 0 0022 12z"/>
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
                  <path d="M7.75 2A5.75 5.75 0 002 7.75v8.5A5.75 5.75 0 007.75 22h8.5A5.75 5.75 0 0022 16.25v-8.5A5.75 5.75 0 0016.25 2h-8.5zm0 1.5h8.5A4.25 4.25 0 0120.5 7.75v8.5a4.25 4.25 0 01-4.25 4.25h-8.5A4.25 4.25 0 013.5 16.25v-8.5A4.25 4.25 0 017.75 3.5zm8.75 2a.75.75 0 100 1.5.75.75 0 000-1.5zM12 7a5 5 0 100 10 5 5 0 000-10zm0 1.5a3.5 3.5 0 110 7 3.5 3.5 0 010-7z"/>
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
    </div>
  );
}

export default Home;
