import { AuthNavSyledLink } from './AuthNavStyled';

export const AuthNav = () => {
  return (
    <div>
      <AuthNavSyledLink to="/register">Register</AuthNavSyledLink>
      <AuthNavSyledLink to="/login">Log In</AuthNavSyledLink>
    </div>
  );
};
