import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";


const Header = () => {
    const user = useContext(AuthContext);
  return (
    <div>
      <div className="navbar bg-neutral text-neutral-content">
        <Link className="btn btn-ghost normal-case text-xl" to="/">Dream Hub</Link>{''}
        {user.displayName}
        <Link className="btn btn-ghost normal-case text-xl" to="/">Home</Link>{''}
        <Link className="btn btn-ghost normal-case text-xl" to="/login">Login</Link>{''}
        <Link className="btn btn-ghost normal-case text-xl" to="/register">Register</Link>
      </div>
    </div>
  );
};

export default Header;
