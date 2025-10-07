import Button from "./Button"

const FeatureCard = ({ img, title, desc, cta, link }) => {
  return (
    <div>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-x-2">
        <img src={img} alt="img" className="h-[18rem] lg:h-[20rem] object-cover w-full lg:rounded-2xl" />
        <div className="flex flex-col px-6 pt-8 pb-12 gap-y-8">
          <div className="flex flex-col gap-y-3">
            <div className="font-extrabold text-[#2C3626] text-[22px] uppercase">{title}</div>
            <div className="text-justify font-medium">{desc}</div>
          </div>
          <Button label={cta} link={`/${link}`} colorSpec='bg-[#2C3626] text-white' />
        </div>
      </div>
    </div>
  )
}

export default FeatureCard