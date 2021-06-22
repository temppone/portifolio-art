import React from 'react';
import { HeaderPage, HeaderContent, HeaderLogo } from './Header.styled';
import Burger from '../Burger';
import Menu from '../Menu';
import { UserContext } from '../../shared/UserContext';

const Header = () => {
  const [openMenu, setOpenMenu] = React.useState(false);
  const { data } = React.useContext(UserContext);

  return (
    <>
      <HeaderPage>
        <HeaderContent>
          <Burger openMenu={openMenu} setOpenMenu={setOpenMenu} />
          <HeaderLogo>TEMPPONE</HeaderLogo>

          <p>{data && data.username}</p>
          {console.log(data)}
        </HeaderContent>
      </HeaderPage>
      <Menu openMenu={openMenu} setOpenMenu={setOpenMenu} />
    </>
  );
};

export default Header;
