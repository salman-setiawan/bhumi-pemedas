import React from 'react'
import Button from '../components/Button'

const Home = () => {
  return (
    <div>
      {/* Section 1 */}
      <div className="w-full flex flex-col px-6 pt-8 pb-16 bg-[#2C3626] gap-y-8">
        <div className="w-2/3 font-bold text-[#FFF3C6] text-[32px]">Sudah lama tinggal di samboja tapi belum punya rumah?</div>
        <Button label='Miliki rumah sekarang!' font='bold' bg='#FFF3C6' color='#2C3626' />
      </div>
      <div className="relative h-[20rem] w-full">
        <img src="/home.jpg" alt="img" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      <div className="w-full flex justify-center text-center px-6 py-8 bg-[#2C3626]">
        <div className="font-bold text-[#FFF3C6] text-[24px]">dan kenapa sih harus punya rumah di Bhumi Pemedas Samboja?</div>
      </div>
      {/* Section 2 */}
      <div className="flex flex-col lg:flex-row lg:p-8 lg:gap-x-8 bg-[#FFF3C6]">
        <div className="w-full flex flex-col">
          <img src="/home.jpg" alt="img" className="h-[20rem] object-cover w-full" />
          <div className="flex flex-col gap-y-8 px-6 lg:px-0 pt-8 pb-12">
            <div className="flex flex-col gap-y-3">
              <div className="font-bold text-[#2C3626] text-[20px] uppercase">Satu-satunya area perumahan di Samboja</div>
              <div className="font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tempor elit vel rhoncus vestibulum. Vivamus ut fermentum lorem. Donec ultricies sapien enim, vel laoreet risus imperdiet id. Maecenas ornare velit vitae odio tincidunt interdum.</div>
            </div>
            <Button label='Beli sekarang!' font='semibold' bg='#2C3626' color='#FFF3C6' />
          </div>
        </div>
        <div className="w-full flex flex-col">
          <img src="/home.jpg" alt="img" className="h-[20rem] object-cover w-full" />
          <div className="flex flex-col gap-y-8 px-6 lg:px-0 pt-8 pb-12">
            <div className="flex flex-col gap-y-3">
              <div className="font-bold text-[#2C3626] text-[20px] uppercase">Tepat di depan Pantai Wisata</div>
              <div className="font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tempor elit vel rhoncus vestibulum. Vivamus ut fermentum lorem. Donec ultricies sapien enim, vel laoreet risus imperdiet id. Maecenas ornare velit vitae odio tincidunt interdum.</div>
            </div>              
            <Button label='Beli sekarang!' font='semibold' bg='#2C3626' color='#FFF3C6' />
          </div>
        </div>
        <div className="w-full flex flex-col">
          <img src="/home.jpg" alt="img" className="h-[20rem] object-cover w-full" />
          <div className="flex flex-col gap-y-8 px-6 lg:px-0 pt-8 pb-12">
            <div className="flex flex-col gap-y-3">
              <div className="font-bold text-[#2C3626] text-[20px] uppercase">Semakin aman dengan surat yang lengkap</div>
              <div className="font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tempor elit vel rhoncus vestibulum. Vivamus ut fermentum lorem. Donec ultricies sapien enim, vel laoreet risus imperdiet id. Maecenas ornare velit vitae odio tincidunt interdum.</div>
            </div>              
            <Button label='Beli sekarang!' font='semibold' bg='#2C3626' color='#FFF3C6' />
          </div>
        </div>
      </div>
      {/* Section 3 */}
      <div className="w-full flex flex-col px-6 py-8 bg-[#2C3626] gap-y-8">
        <div className="p-2 bg-red-600 uppercase font-semibold text-white w-fit text-[14px]">persediaan terbatas!</div>
        <div className="flex flex-col gap-y-2">
          <div className="font-semibold text-[#FFF3C6] text-[24px]">Dapatkan segera kavling kami dengan harga:</div>
          <div className="font-bold text-[#FFF3C6] text-[64px]">60 Juta Cash</div>
          <div className="font-semibold text-[#FFF3C6] text-[24px]">atau bayar DP 30 Juta, dengan cicilan 2 juta per bulan.</div>
        </div>
        <Button label='Beli sekarang!' font='bold' bg='#FFF3C6' color='#2C3626' />
      </div>
      {/* Section 4 */}
      <div className="w-full flex flex-col lg:justify-center lg:text-center px-6 pt-8 pb-16 bg-[#FFF3C6] gap-y-8">
        <div className="w-2/3 lg:w-3/3 font-bold text-[#2C3626] text-[32px]">Hubungi kami untuk informasi lebih lanjut</div>
        <Button label='Kontak Whatsapp kami disini' font='bold' bg='#2C3626' color='#FFF3C6' />
      </div>
    </div>
  )
}

export default Home