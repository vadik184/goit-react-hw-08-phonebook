import { useAuth } from 'hooks';
import { NavigatorStyled, NavigatorStyledNavLink } from './NavigatorStyled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <NavigatorStyled>
      <NavigatorStyledNavLink to="/">Home</NavigatorStyledNavLink>
      {isLoggedIn && (
        <NavigatorStyledNavLink to="/contacts">Contacts</NavigatorStyledNavLink>
      )}
    </NavigatorStyled>
  );
};
