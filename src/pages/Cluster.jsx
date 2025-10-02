import ParallaxOther from "../components/animate/ParallaxOther"
import Navigation from "../components/Navigation"

const Cluster = () => {
  return (
    <div className="bg-[#FFF3C6]">
      <div className="sticky top-0 z-50">
        <Navigation />
      </div>
      <ParallaxOther img='drone-2.jpg' title='Cluster' />
      <div className="flex w-full justify-center bg-[#FFF3C6]">
        <div className="flex flex-col gap-y-3 pt-8 lg:max-w-[1200px] w-full h-screen">
          <div className="font-bold text-[#2C3626] text-[24px] text-center">AKAN DATANG</div>
        </div>
      </div>
    </div>
  )
}

export default Cluster