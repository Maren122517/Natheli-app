import React, { useState } from 'react';
import LoginModal from './LoginModal';
import { Button2 } from '../theme/loginStyle';

const LoginRegister = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Button2 onClick={handleOpenModal}>Login</Button2>

      <LoginModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default LoginRegister;
