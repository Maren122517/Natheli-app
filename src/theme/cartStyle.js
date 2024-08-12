import styled from 'styled-components';

const CartIcon = styled.div`
  position: fixed;
  top: 16px;
  right: 16px;
  cursor: pointer;
`;

const CartModal = styled.div`
  width: 25%;
  position: fixed;
  top: 25%;
  left: 80%;
  transform: translate(-30%, -50%);
  background: #dc7633;
  padding: 24px;
  border: 1px solid #ddd;
  z-index: 1000;
`;

const ButtonCart = styled.button `
  border: none;
  border-radius: 20px;
  width: 150px;
  padding: 10px 10px;
  text-align: center;
  font-weight: 600;
  cursor: pointer;
  background-color: #DAF7A6;
`;

export { CartIcon, CartModal, ButtonCart };