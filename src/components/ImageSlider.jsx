import { useEffect, useState } from 'react'

const images = [
  'https://images.unsplash.com/photo-1523275335684-37898b6baf30',
  'https://images.unsplash.com/photo-1542291026-7eec264c27ff',
  'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
  'https://images.unsplash.com/photo-1519125323398-675f0ddb6308',
  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f',
]

const texts = [
  'Up to 40% off\nDiscover the latest trends in fashion.',
  'Up to 30% off\nExplore home decor and furnishings.',
  'Up to 50% off\nFind the perfect gift for your loved ones.',
  'Up to 25% off\nUpgrade with our latest gadgets.',
  'Up to 20% off\nShop beauty and skincare products.',
]

const ImageSlider = () => {
  const [current, setCurrent] = useState(0)

  // Auto slide
  useEffect(() => {
    const slider = setInterval(() => {
      setCurrent(prev => (prev === images.length - 1 ? 0 : prev + 1))
    }, 3000)
    return () => clearInterval(slider)
  }, [])

  const nextSlide = () =>
    setCurrent(current === images.length - 1 ? 0 : current + 1)

  const prevSlide = () =>
    setCurrent(current === 0 ? images.length - 1 : current - 1)

  return (
    <div className="relative w-full h-48 sm:h-64 md:h-[400px] overflow-hidden rounded-xl mb-6">
      {/* Image */}
      <img
        src={images[current]}
        alt="slider"
        className="w-full h-full object-cover transition-all duration-500"
      />

      {/* Dark overlay + text */}
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center px-6">
        <p className="text-white font-bold text-lg sm:text-2xl md:text-4xl text-center whitespace-pre-line">
          {texts[current]}
        </p>
      </div>

      {/* Prev button */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-3 -translate-y-1/2 bg-black/50 text-white px-3 py-1.5 rounded-full text-sm hover:bg-black/70"
      >
        ❮
      </button>

      {/* Next button */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-3 -translate-y-1/2 bg-black/50 text-white px-3 py-1.5 rounded-full text-sm hover:bg-black/70"
      >
        ❯
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2.5 w-2.5 rounded-full transition-colors duration-300 ${
              current === index ? 'bg-red-500 border-2 border-white' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default ImageSlider
