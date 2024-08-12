import React from 'react';
import { Button, FormGroup, Input, Label, Modal2, Overlay2 } from '../theme/loginModalStyle';

const LoginModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      <Overlay2 onClick={onClose} />
      <Modal2>
        <h2>Login</h2>
        <form>
          <FormGroup>
            <Label htmlFor="username" >Nombre de usuario</Label>
            <Input id="username" type="text" required placeholder='Nombre de usuario' />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="password">Contraseña</Label>
            <Input id="password" type="password" required placeholder='Contraseña' />
          </FormGroup>

          <Button type="submit">Login</Button>
          <Button onClick={onClose} style={{ marginTop: '8px' }}>Cancel</Button>
        </form>
      </Modal2>
    </>
  );
};

export default LoginModal;
