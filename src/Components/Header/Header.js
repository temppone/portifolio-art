import React from 'react';
import { HeaderPage, HeaderContent, HeaderLogo } from './Header.styled';
import Burger from '../Burger';
import Menu from '../Menu';
import { UserContext } from '../../shared/UserContext';
import { Link } from 'react-router-dom';

const Header = () => {
  const [openMenu, setOpenMenu] = React.useState(false);
  const { data, userLogout } = React.useContext(UserContext);

  return (
    <>
      <HeaderPage>
        <HeaderContent>
          <Burger openMenu={openMenu} setOpenMenu={setOpenMenu} />
          <HeaderLogo to="/">Brand Name</HeaderLogo>

          {data && <p>{data.username}</p>}
          <button onClick={userLogout}></button>
        </HeaderContent>
      </HeaderPage>
      <Menu openMenu={openMenu} setOpenMenu={setOpenMenu} />
    </>
  );
};

export default Header;
