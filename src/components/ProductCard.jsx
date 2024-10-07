import React from 'react'

const ProductCard = ({product}) => {
  // const { title, description, price, category, image } = product;
  
  return (
    <div className='w-[300px] border border-black overflow-hidden'>
      <div>
        <img src={product.image} alt="" />
      </div>
      <div>{product.title}</div>
    </div>
  )
}

export default ProductCard