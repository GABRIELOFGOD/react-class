import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({product}) => {
  // const { title, description, price, category, image } = product;
  
  return (
    <div className='w-[300px] relative border pb-10 border-black rounded-lg overflow-hidden'>
      <div className='h-[200px] overflow-hidden'>
        <img src={product.image} alt="" />
      </div>
      <div>
        <p className='font-semibold text-2xl '>{product.title}</p>
      </div>
      <div className="flex gap-5 justify-between px-3 absolute bottom-3 w-full">
        <Link to={"/details/"+product.id} className='w-full border-2 rounded-md hover:text-white bg-transparent border-black hover:bg-black duration-200'>
          <button>View more</button></Link>
        <button className='w-full border-2 text-white rounded-md hover:text-white bg-neutral-900 border-black hover:bg-black duration-200'>Add to cart</button>
      </div>
    </div>
  )
}

export default ProductCard