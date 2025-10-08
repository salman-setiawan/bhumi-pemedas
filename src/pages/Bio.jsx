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
        <div className="flex flex-col gap-y-12 py-12 px-6 lg:max-w-[1200px] w-full">
          <div className="font-medium text-[20px] text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis sem et quam placerat molestie. Pellentesque pellentesque leo id nunc convallis, at malesuada ante iaculis. Phasellus cursus mauris id metus bibendum rutrum. Proin euismod mollis facilisis. Pellentesque pharetra imperdiet nisl, ac sodales elit euismod sed. Aenean eu augue blandit, hendrerit felis facilisis, sagittis odio. Ut vitae justo eleifend, feugiat justo porta, convallis purus.
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <img src="/home.webp" alt="" className="h-full object-cover" />
            <div className="flex flex-col gap-y-4 lg:gap-y-8 lg:py-8">
              <div className="font-medium text-[20px] text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis sem et quam placerat molestie. Pellentesque pellentesque leo id nunc convallis, at malesuada ante iaculis. Phasellus cursus mauris id metus bibendum rutrum. Proin euismod mollis facilisis. Pellentesque pharetra imperdiet nisl, ac sodales elit euismod sed. Aenean eu augue blandit, hendrerit felis facilisis, sagittis odio. Ut vitae justo eleifend, feugiat justo porta, convallis purus.
              </div>
              <div className="flex flex-col gap-y-1">
                <div className="font-bold text-[20px]">Ahmad Hepni.</div>
                <div className="font-medium">Pemilik Bhumi Pemedas Permai</div>
              </div>
            </div>
          </div>
          {dataFasum.map((item) => (
            <FasumGallery
              key={item.uid}
              label={item.label}
              images={item.images}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Bio