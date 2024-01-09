import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { useAuth } from 'hooks';
import {
  UserMenuStyldButton,
  UserMenuStyledDiv,
  UserMenuStyledText,
} from './UserMenuStyled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <UserMenuStyledDiv>
      <UserMenuStyledText>Welcome {user.name}</UserMenuStyledText>
      <UserMenuStyldButton type="button" onClick={() => dispatch(logOut())}>
        Logout
      </UserMenuStyldButton>
    </UserMenuStyledDiv>
  );
};
