"use client"
import React, { useRef } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
const categories = [
  {
    id: 1,
    name: 'For You',
    color: 'bg-blue-500'
  },
  {
    id: 2,
    name: 'Teknologi',
    color: 'bg-[#03A9F4]'
  },
  {
    id: 3,
    name: 'Kesehatan',
    color: 'bg-[#E91E63]'
  },
  {
    id: 4,
    name: 'Hiburan',
    color: 'bg-[#FFC107]'
  },
  {
    id: 5,
    name: 'Olahraga',
    color: 'bg-[#4CAF50]'

  },
  {
    id: 6,
    name: 'Kosmetik',
    color: 'bg-yellow-500'
  },
  {
    id: 7,
    name: 'Lainnya',
    color: 'bg-yellow-500'
  }
]
const CardCategories = () => {
  const elemeRef = useRef()
  const handleNext = (element) => {
    element.scrollLeft += 400
  }
  const handlePrev = (element) => {
    element.scrollLeft -= 400
  }
  return (
    <div className="my-4">
      {/* <FaArrowLeft className="cursor-pointer md:block hidden absolute left-0 mt-4" onClick={() => handlePrev(elemeRef.current)} />
      <FaArrowRight className="cursor-pointer md:block hidden absolute right-0 mt-4" /> */}
      <div className="w-full flex items-center justify-between gap-3 overflow-x-auto no-scrollbar scroll-smooth duration-500 ease-in-out transition-transform rounded-lg" onClick={() => handleNext(elemeRef.current)} ref={elemeRef}>
        {categories.map((category, index) => (
          <div className={`mx-2 px-3 py-4 rounded-lg ${category.color} md:min-w-[300px] min-w-[200px] cursor-pointer`} key={index} >
            <p className="text-white font-semibold">{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CardCategories
