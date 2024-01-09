import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks';
import { AppBarStyledContainer, HeaderStyled } from './AppBarStyled';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <AppBarStyledContainer>
      <HeaderStyled>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </HeaderStyled>
    </AppBarStyledContainer>
  );
};
