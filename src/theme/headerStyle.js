import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  background-color: #dc7633;
  color: white;
  position: relative;
`;

const StoreName = styled.h1`
  font-size: 24px;
  margin: 0;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

const LeftActions = styled.div`
  display: flex;
  align-items: center;
`;

const RightActions = styled.div`
  display: flex;
  align-items: center;
`;

export { HeaderContainer, StoreName, LeftActions, RightActions }