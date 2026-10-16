import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import productData from './ProductData'

const Product = () => {
  const navigate = useNavigate()
  const { id } = useParams()

  function handleclick() {
    navigate('/products')
  }

  const filterProduct = productData.filter((product) => {
    if (product.id == id) {
      return product
    }
  })

  return (
    <div className="single-product">
      {filterProduct.map((product) => (
        <div className="product-detail" key={product.id}>
          <img src={product.image} alt={product.name} />
          <h1>{product.name}</h1>
          <h2>Price: ${product.price}</h2>
          <p>Product ID: {product.id}</p>
          <p>{product.description}</p>

          <button onClick={handleclick}>Products</button>
        </div>
      ))}
    </div>
  )
}

export default Product