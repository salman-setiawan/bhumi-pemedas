// FasumGallery.jsx
const FasumGallery = ({ label, images }) => {
  return (
    <div>
      <div className="flex flex-col gap-y-5">
        <div className="font-bold text-[#2C3626] text-[24px]">{label}</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {images.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`${label}-${idx}`}
              className="w-full object-cover"
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default FasumGallery
