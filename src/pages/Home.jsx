import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import Navbar from '../components/Navbar';

const Home = () => {
  const [products, setProducts] = useState([]);

  async function fetchProducts(){
    try{
      const request = await fetch("https://fakestoreapi.com/products");
      const response = await request.json();
      console.log(response);
      setProducts(response);
    } catch (error){
      console.log(error);
    }
  }

  useEffect(()=>{
    fetchProducts();
  },[]);

  return (
    <div>
      <div className="flex flex-wrap gap-5 ">
        {products.map((product, index) => (
          <ProductCard key={index} product={product}/>
        ))}
      </div>
      
    </div>
  )
}

export default Home