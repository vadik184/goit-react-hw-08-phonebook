import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <div className="navlink">
      <NavLink to="/register" exact className="register">
        Register
      </NavLink>
      <NavLink to="/login" exact className="register">
        Log In
      </NavLink>
    </div>
  );
};
