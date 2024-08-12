import React, { useState } from 'react';
import styled from 'styled-components';
import CheckoutModal from '../components/CheckoutModal';

const CheckoutContainer = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 16px;
`;

const FormGroup = styled.div`
  margin-bottom: 16px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
`;

const Button = styled.button`
  display: block;
  width: 100%;
  padding: 12px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const Checkout = () => {
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [isPurchaseComplete, setIsPurchaseComplete] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsPurchaseComplete(true);
  };

  return (
    <CheckoutContainer>
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="address">Direccion de envio</Label>
          <Input
            id="address"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
            placeholder='Direccion de envio'
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="payment">Metodo de pago</Label>
          <Input
            id="payment"
            type="text"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            required
            placeholder='Metodo de pago'
          />
        </FormGroup>

        <Button type="submit">Confirmar compra</Button>
      </form>

      {isPurchaseComplete && (
        <CheckoutModal
          isOpen={isPurchaseComplete}
          onClose={() => setIsPurchaseComplete(false)}
        />
      )}
    </CheckoutContainer>
  );
};

export default Checkout;
