import React from 'react';
import { Navbar, NavbarBrand, Button, NavbarText } from 'reactstrap';
import { useDashboardContext } from '../../DashboardContext';

const Navigation = ({ attemptLogout }: { attemptLogout: () => void }) => {
  const user = useDashboardContext();

  const logoutHandler = () => {
    attemptLogout();
  };

  return (
    <div>
      <Navbar color="light" expand="md" light>
        <NavbarBrand href="/">
          Dashboard
        </NavbarBrand>
        <NavbarText>{user.firstName} {user.lastName}</NavbarText>
        <Button data-testid='button-logout' onClick={logoutHandler}>Logout</Button>
      </Navbar>
    </div>
  );
};

export default Navigation;
