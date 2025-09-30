import Button from '../components/Button'
import FeatureCard from '../components/FeatureCard'
import TestimonialCard from '../components/TestimonialCard'

const Home = () => {
  return (
    <div>
      {/* Section 1 */}
      <div className="w-full flex flex-col px-6 pt-12 pb-16 bg-[#2C3626] gap-y-8">
        <div className="w-2/3 font-bold text-[#FFF3C6] text-[32px]">Sudah lama tinggal di samboja tapi belum punya rumah?</div>
        <Button label='Miliki rumah sekarang!' font='bold' bg='#FFF3C6' color='#2C3626' />
      </div>
      <div className="relative h-[40rem] w-full">
        <img src="/home.jpg" alt="img" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      <div className="w-full flex justify-center text-center px-6 py-8 bg-[#2C3626]">
        <div className="font-bold text-[#FFF3C6] text-[24px]">dan kenapa sih harus punya rumah di Bhumi Pemedas Samboja?</div>
      </div>
      {/* Section 2 */}
      <div className="flex flex-col lg:flex-row lg:p-8 lg:gap-x-8 bg-[#FFF3C6]">
        <FeatureCard 
          img='/home.jpg' 
          title='Satu-satunya area perumahan di Samboja' 
          desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tempor elit vel rhoncus vestibulum. Vivamus ut fermentum lorem. Donec ultricies sapien enim, vel laoreet risus imperdiet id. Maecenas ornare velit vitae odio tincidunt interdum.'
        />
        <FeatureCard 
          img='/home.jpg' 
          title='Tepat di depan Pantai Wisata' 
          desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tempor elit vel rhoncus vestibulum. Vivamus ut fermentum lorem. Donec ultricies sapien enim, vel laoreet risus imperdiet id. Maecenas ornare velit vitae odio tincidunt interdum.'
        />
        <FeatureCard 
          img='/home.jpg' 
          title='Semakin aman dengan surat yang lengkap' 
          desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tempor elit vel rhoncus vestibulum. Vivamus ut fermentum lorem. Donec ultricies sapien enim, vel laoreet risus imperdiet id. Maecenas ornare velit vitae odio tincidunt interdum.'
        />
      </div>
      {/* Section 3 */}
      <div className="flex flex-col bg-[#FFF3C6] gap-y-4 pt-12 pb-20 px-6">
        <div className="font-bold text-[#2C3626] text-[32px] text-center">Apa kata mereka?</div>
        <div className="w-full overflow-x-auto">
          <div className="flex gap-x-6 px-4 py-8 snap-x snap-mandatory">
            <div className="snap-center shrink-0">
              <TestimonialCard />
            </div>
            <div className="snap-center shrink-0">
              <TestimonialCard />
            </div>
            <div className="snap-center shrink-0">
              <TestimonialCard />
            </div>
            <div className="snap-center shrink-0">
              <TestimonialCard />
            </div>
            <div className="snap-center shrink-0">
              <TestimonialCard />
            </div>
          </div>
        </div>
      </div>
      {/* Section 4 */}
      <div className="flex flex-col lg:flex-row items-center bg-[#2C3626] gap-x-8">
        <img src="/home.jpg" alt="img" className="lg:hidden h-[24rem] w-full object-cover" />
        <div className="w-full flex flex-col px-6 pt-12 pb-16 lg:py-12 gap-y-8">
          <div className="p-2 bg-red-600 uppercase font-semibold text-white w-fit text-[14px]">persediaan terbatas!</div>
          <div className="flex flex-col gap-y-2">
            <div className="font-semibold text-[#FFF3C6] text-[24px]">Dapatkan segera kavling kami dengan harga:</div>
            <div className="font-bold text-[#FFF3C6] text-[64px]">60 Juta Cash</div>
            <div className="font-semibold text-[#FFF3C6] text-[24px]">atau bayar DP 30 Juta, dengan cicilan 2 juta per bulan.</div>
          </div>
          <Button label='Beli sekarang!' font='bold' bg='#FFF3C6' color='#2C3626' />
        </div>
        <img src="/home.jpg" alt="img" className="hidden lg:block h-[32rem] w-1/2 object-cover" />
      </div>
      {/* Section 5 */}
      <div className="w-full flex flex-col lg:justify-center lg:text-center px-6 pt-8 pb-16 bg-[#FFF3C6] gap-y-8">
        <div className="w-2/3 lg:w-3/3 font-bold text-[#2C3626] text-[32px]">Hubungi kami untuk informasi lebih lanjut</div>
        <Button label='Kontak Whatsapp kami disini' font='bold' bg='#2C3626' color='#FFF3C6' />
      </div>
    </div>
  )
}

export default Home