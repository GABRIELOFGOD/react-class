import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
  const [product, setProduct] = useState({
    image: "",
    title: ""
  });
  const {id} = useParams()

  async function gettingProduct(){
    try{
      const request = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await request.json();
      setProduct(data);
      console.log(data);
    } catch (err){
      console.log(err);
    }
  }

  useEffect(() => {
    gettingProduct()
  },[])
  
  return (
    <div>
      <div>
        <img src={product?.image} />
      </div>
      <div>
        <p className="font-bold text-3xl">{product?.title}</p>
      </div>
    </div>
  )
}

export default ProductDetails