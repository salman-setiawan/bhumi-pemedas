

const Button = ({ label, bg, color, font }) => {
  return (
    <div>
      <div className={`py-2 px-3.5 font-${font} bg-[${bg}] text-[${color}] w-fit`}>
        {label}
      </div>
    </div>
  )
}

export default Button