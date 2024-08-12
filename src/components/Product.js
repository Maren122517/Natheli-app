import React from 'react';
import { ProductButton, ProductContainer, ProductImage } from '../theme/productStyle';

const Product = ({ product, onAddToCart }) => {
  return (
    <ProductContainer>
      <ProductImage src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      <ProductButton onClick={() => onAddToCart(product)}>Añadir al carrito</ProductButton>
    </ProductContainer>
  );
};

export default Product;
