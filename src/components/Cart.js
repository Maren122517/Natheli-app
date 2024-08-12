import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../features/cartSlice';
import { FaShoppingCart } from 'react-icons/fa'; // Ícono de carrito
import { ButtonCart, CartIcon, CartModal } from '../theme/cartStyle';


const Cart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleToggleCart = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <CartIcon onClick={handleToggleCart}>
        <FaShoppingCart size={32} />
      </CartIcon>

      {isOpen && (
        <CartModal>
          <h2>Cart</h2>
          {cart.map((product) => (
            <div key={product.id}>
              <p>{product.name}</p>
              <ButtonCart onClick={() => dispatch(removeFromCart(product))}>Remove</ButtonCart>
            </div>
          ))}
          <ButtonCart onClick={() => navigate('/checkout')}>Proceed to Checkout</ButtonCart>
          <ButtonCart onClick={handleToggleCart}>Close</ButtonCart>
        </CartModal>
      )}
    </>
  );
};

export default Cart;
