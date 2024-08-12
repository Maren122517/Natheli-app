import React from 'react';
import { Modal, Overlay } from '../theme/CheckoutStyle';

const CheckoutModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      <Overlay onClick={onClose} />
      <Modal>
        <h2>Compra confirmada!</h2>
        <p>Gracias por tu compra. Tu orden se procesara en breve.</p>
        <button onClick={onClose}>Cerrar</button>
      </Modal>
    </>
  );
};

export default CheckoutModal;
