import styled from 'styled-components';

const ProductContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid #ddd;
  padding: 16px;
  text-align: center;
  align-items: center;
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
  max-width: 200px;
  margin-bottom: 16px;
`;

const ProductButton = styled.button`
  border: none;
  border-radius: 20px;
  width: 10%;
  height: 10%;
  padding: 10px 10px;
  text-align: center;
  font-weight: 600;
  cursor: pointer;
  background-color: #DAF7A6;
`;

export { ProductContainer, ProductImage, ProductButton }