import React from 'react'
import productData from './ProductData'
import { useNavigate } from 'react-router-dom'

const Products = () => {
    const nevigate= useNavigate()
  return (
    <div className='Product-container'>
        {productData.map((product)=>(
            <div className='Product-cards' key={product.id}>
            <div>
                <img src={product.image} alt="product-image" />
            </div>
            <p>{product.id} </p>
            <h1>{product.name} </h1>
            <h2>${product.price} </h2>
            <p>{product.description}</p>
            <button onClick={()=>nevigate(`/product/${product.id}`)}>View Product</button>
        </div>
        ))}
       
    </div>
  )
}

export default Products