import Button from '../components/Button'
import FeatureCard from '../components/FeatureCard'
import TestimonialCard from '../components/TestimonialCard'
import dataHomepage from "../data/dataHomepage";
import Navigation from "../components/Navigation";
import Trailer from "../components/Trailer";
import ParallaxHome from '../components/animate/ParallaxHome';

const Home = () => {
  return (
    <div className="bg-[#FFF3C6]">
      <div className="sticky top-0 z-50">
        <Navigation />
      </div>
      {/* Section 1 */}
      <div className="flex justify-center bg-[#2C3626]">
        <div className="flex flex-col lg:flex-row w-full lg:max-w-[1200px] lg:px-6 pb-12 lg:py-20 items-center gap-x-12">
          <div className="flex lg:hidden w-full"><Trailer /></div>
          <div className="w-full flex flex-col gap-y-8 px-6 pt-6 lg:px-0 lg:pt-0">
            <div className="flex flex-col gap-y-1">
              <img src="/brand.svg" alt="" className="w-18" />
              <div className="font-bold text-[#FFF3C6] text-[24px] lg:w-5/6">Sudah lama tinggal di samboja, tapi belum punya rumah?</div>
            </div>
            <Button label='Miliki rumah sekarang!' font='bold' bg='#FFF3C6' color='#2C3626' />
          </div>
          <div className="hidden lg:block lg:shadow-xl lg:shadow-black/20"><Trailer /></div>
        </div>
      </div>
      <ParallaxHome img='drone-2.jpg' />
      {/* Section 2 */}
      <div className="flex w-full justify-center bg-[#FFF3C6]">
        <div className="flex flex-col gap-y-3 pt-8 lg:max-w-[1200px] w-full">
          <div className="font-bold text-[#2C3626] text-[24px] text-center">Apa kata mereka?</div>
          <div className="w-full px-6 pb-8">
            <div className="flex gap-x-6 py-4 snap-x snap-mandatory overflow-x-auto">
              {dataHomepage[0].testimonial.map((item) => (
                <div key={item.uid} className="snap-center shrink-0">
                  <TestimonialCard vid={item.vid} img={item.img} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="w-full flex justify-center text-center px-6 py-8 bg-[#2C3626]">
        <div className="font-bold text-[#FFF3C6] text-[24px]">dan kenapa sih harus punya rumah di Bhumi Pemedas Samboja?</div>
      </div>
      <div className="flex w-full justify-center bg-[#FFF3C6]">
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-x-6 lg:px-6 lg:py-8 lg:max-w-[1200px]">
          {dataHomepage[0].benefit.map((item) => (
            <FeatureCard
              key={item.uid}
              img={item.img}
              title={item.title}
              desc={item.desc}
              cta={item.cta}
            />
          ))}
        </div>
      </div>
      {/* Section 4 */}
      <div className="flex justify-center bg-[#2C3626]">
        <div className="flex flex-col lg:flex-row items-center lg:max-w-[1200px] gap-x-8">
          <img src="/denah.jpg" alt="img" className="lg:hidden w-full object-cover" />
          <div className="w-full flex flex-col px-6 pt-10 pb-16 lg:py-12 gap-y-8">
            <div className="p-1.5 bg-red-600 uppercase font-semibold text-white w-fit text-[12px] animate-blink">persediaan terbatas!</div>
            <div className="flex flex-col gap-y-2">
              <div className="font-medium text-[#FFF3C6] text-[20px]">Dapatkan segera kavling kami dengan harga:</div>
              <div className="font-black text-[#FFF3C6] text-[48px] uppercase">60 Juta Cash</div>
              <div className="font-medium text-[#FFF3C6] text-[20px]">atau bayar DP 30 Juta, dengan cicilan 2 juta per bulan.</div>
            </div>
            <Button label='Beli sekarang!' font='bold' bg='#FFF3C6' color='#2C3626' />
          </div>
          <img src="/denah.jpg" alt="img" className="hidden lg:block h-[32rem] w-1/2 object-cover" />
        </div>
      </div>      
      {/* Section 5 */}
      <div className="w-full bg-[#141414] flex flex-col">
        <div className="font-bold text-[#FFF3C6] text-center text-[16px] px-6 py-3">
          Lokasi Bhumi Pemedas Samboja
        </div>
        <div className="w-full h-[20rem] lg:h-[30rem]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20114.XXXX!2d117.1348779!3d-0.9992735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df6a900306faead%3A0xbcee5c629979480a!2sPerumahan+Bhumi+Pemedas+Permai!5e0!3m2!1sid!2sid!4vXXXXXXXXXXXXXX"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      {/* Section 6 */}
      <div className="relative w-full flex flex-col lg:justify-center lg:text-center px-6 pt-12 pb-16 gap-y-8 bg-cover bg-center" style={{ backgroundImage: "url('/drone.jpg')" }}>
        <div className="absolute inset-0 bg-black/75"></div>
        <div className="relative w-2/3 lg:w-3/3 font-bold text-[#FFF3C6] text-[24px]">
          Hubungi kami untuk informasi lebih lanjut
        </div>
        <div className="relative">
          <Button label="Kontak Whatsapp kami disini" font="bold" bg="#FFF3C6" color="#2C3626" />
        </div>
      </div>
    </div>
  );
}

export default Home;
