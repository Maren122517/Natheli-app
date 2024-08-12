import styled from 'styled-components';

const Modal2 = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #ba4a00;
  padding: 24px;
  border: 1px solid #ddd;
  z-index: 1000;
`;

const Overlay2 = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
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
  background-color: #e67e22;
  color: white;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

export { Modal2, Overlay2, FormGroup, Label, Input, Button }