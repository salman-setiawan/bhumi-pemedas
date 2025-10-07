

const Button = ({colorSpec, label, link, target}) => {
  return (
    <div>
      <a href={link} target={target}>
        <div className={`flex items-center gap-2 font-semibold py-2 px-3 ${colorSpec} w-fit rounded-lg inset-shadow-sm inset-shadow-[#141414]/50`}>
          {label}
        </div>
      </a>
    </div>
  )
}

export default Button