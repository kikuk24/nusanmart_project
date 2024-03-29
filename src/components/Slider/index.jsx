"use client"
import React, { useEffect, useRef } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
const data = [
  {
    id: 1,
    image: 'https://images.tokopedia.net/img/cache/1208/NsjrJu/2024/3/28/2c7a3506-bcb4-4ef0-8bd2-27e5cfbf3fad.jpg.webp?ect=4g',
  },
  {
    id: 2,
    image: 'https://images.tokopedia.net/img/cache/1208/NsjrJu/2024/3/22/e7afe206-e617-4d78-bacf-2526c977f4ae.jpg.webp?ect=4g',
  },
  {
    id: 3,
    image: 'https://images.tokopedia.net/img/cache/1208/NsjrJu/2024/3/18/04761695-332d-48b3-ba09-05433d40b8d8.jpg.webp?ect=4g',
  },
  {
    id: 4,
    image: 'https://images.tokopedia.net/img/cache/1208/NsjrJu/2024/3/18/04761695-332d-48b3-ba09-05433d40b8d8.jpg.webp?ect=4g',
  },
]
const Slider = () => {
  const sliderRef = useRef()
  const [currentSlide, setCurrentSlide] = React.useState(0)

  const totalSlide = data.length;
  const interval = 1000

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % totalSlide);
    }, interval);
    return () => clearInterval(intervalId);
  })


  const handlePrev = (slider) => {
    slider.scrollLeft -= 1200
    if (slider.scrollLeft === 0) {
      slider.scrollLeft = 4800
    }
  }
  const handleSlide = (index) => {
    setCurrentSlide(index)
  }
  const handleNext = (slider) => {
    slider.scrollLeft += 1200
    if (slider.scrollLeft === 3536) {
      slider.scrollLeft = 0
    }
  }
  return (
    <div className="">
      <FaChevronLeft className='cursor-pointer md:block hidden absolute left-0 mt-[150px] mx-8' onClick={() => handlePrev(sliderRef.current)} />
      <FaChevronRight className='cursor-pointer md:block hidden absolute right-0 mt-[150px] mx-8' onClick={() => handleNext(sliderRef.current)} />
      <div className="flex w-full no-scrollbar md:px-16 py-4 scroll-smooth overflow-x-auto duration-500 ease-in-out transition-transform" ref={sliderRef}>
        {data.map((item) => (
          <img src={item.image} alt="slider" key={item.id} className={`object-cover object-left-top md:h-[310px] min-w-full md:mr-5 md:rounded-lg ${currentSlide === item.id - 1 ? 'block' : ''}`} />
        ))}
      </div>

    </div>
  )
}

export default Slider
