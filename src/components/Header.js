import React from 'react';
import LoginRegister from './LoginRegister';
import Cart from './Cart';
import { HeaderContainer, LeftActions, RightActions, StoreName } from '../theme/headerStyle';

const Header = () => {
  return (
    <HeaderContainer>
      <LeftActions>
        <LoginRegister />
      </LeftActions>
      <StoreName>Cafeteria Natheli</StoreName>
      <RightActions>
        <Cart />
      </RightActions>
    </HeaderContainer>
  );
};

export default Header;
