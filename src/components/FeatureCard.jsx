import Button from "./Button"

const FeatureCard = ({ img, title, desc, cta }) => {
  return (
    <div>
      <div className="w-full flex flex-col">
        <img src={img} alt="img" className="h-[18rem] object-cover w-full" />
        <div className="flex flex-col gap-y-8 px-6 lg:px-0 pt-8 pb-12">
          <div className="flex flex-col gap-y-3">
            <div className="font-bold text-[#2C3626] text-[20px] uppercase">{title}</div>
            <div className="">{desc}</div>
          </div>
          <Button label={cta} font='semibold' bg='#2C3626' color='#FFF3C6' />
        </div>
      </div>
    </div>
  )
}

export default FeatureCard