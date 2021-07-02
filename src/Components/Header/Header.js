import React from 'react';
import { HeaderPage, HeaderContent, HeaderLogo } from './Header.styled';
import Burger from '../Burger';
import Menu from '../Menu';
import { UserContext } from '../../shared/UserContext';
// import SwitchButton from '../SwitchButton/SwitchButton';

const Header = () => {
  const [openMenu, setOpenMenu] = React.useState(false);
  const { data, userLogout } = React.useContext(UserContext);

  return (
    <>
      <HeaderPage margin="0 auto">
        <HeaderContent>
          <Burger openMenu={openMenu} setOpenMenu={setOpenMenu} />
          <HeaderLogo to="/">Brand Name</HeaderLogo>
          {data && <p>{data.username}</p>}
          {/* <SwitchButton /> */}
        </HeaderContent>
      </HeaderPage>
      <Menu openMenu={openMenu} setOpenMenu={setOpenMenu} />
    </>
  );
};

export default Header;
