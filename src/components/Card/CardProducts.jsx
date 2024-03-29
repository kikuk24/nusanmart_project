"use client"
import React from 'react'
const CardProducts = () => {
  const [produts, setProducts] = React.useState([])
  const [isLodading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch('https://fakestoreapi.com/products')
        const data = await res.json()
        console.log(data)
        setProducts(data)
        setIsLoading(false)
      }
      catch (error) {
        console.log(error)
      }
    }
    getProducts()
  }, [])
  return (
    <div className='grid grid-cols-2 gap-x-2 lg:grid-cols-5 w-full gap-y-3 md:mx-auto mx-3'>
      {isLodading && <h1>Loading...</h1>}
      {produts.map((product, index) => (
        <div className="md:min-h-[400px] min-h-[200px] w-full rounded-lg bg-white shadow-lg" key={index}>
          <div className="w-full">
            <img src={product.image} alt="product" className="min-w-full object-cover rounded-lg aspect-square" />
            <div className="p-4">
              <h1 className="text-black text-sm line-clamp-2">{product.title}</h1>
              <h2 className="text-sm text-black font-bold ">$ {product.price}</h2>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CardProducts
