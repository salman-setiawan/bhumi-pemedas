// Fasum.jsx
import ParallaxOther from "../components/animate/ParallaxOther"
import FasumGallery from "../components/FasumGallery"
import Navigation from "../components/Navigation"
import dataFasum from "../data/dataFasum"

const Fasum = () => {
  return (
    <div className="bg-[#FFF3C6]">
      <div className="sticky top-0 z-50">
        <Navigation />
      </div>
      <ParallaxOther img='drone-2.jpg' title='Fasilitas Umum' />
      <div className="flex w-full justify-center bg-[#FFF3C6]">
        <div className="flex flex-col gap-y-12 py-12 px-6 lg:max-w-[1200px] w-full">
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

export default Fasum
