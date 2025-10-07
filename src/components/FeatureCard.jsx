import Button from "./Button"

const FeatureCard = ({ img, title, desc, cta, link }) => {
  return (
    <div>
      <div className="w-full flex flex-col h-full">
        <img src={img} alt="img" className="h-[18rem] object-cover w-full" />
        <div className="flex flex-col px-6 lg:px-0 pt-8 pb-12 gap-y-8 lg:gap-y-0 lg:min-h-[380px] lg:justify-between">
          <div className="flex flex-col gap-y-3">
            <div className="font-bold text-[#2C3626] text-[20px] uppercase">{title}</div>
            <div className="text-justify">{desc}</div>
          </div>
          <a href={`/${link}`}>
            <Button label={cta} font='semibold' bg='#2C3626' color='#FFF3C6' />
          </a>
        </div>
      </div>
    </div>
  )
}

export default FeatureCard