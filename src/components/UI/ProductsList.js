import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products }) => {
  return (
    <>
      {
        products?.map((product, index) => (
          <ProductCard product={product} key={index} />
        ))
      }
    </>
  )
}

export default ProductList;
