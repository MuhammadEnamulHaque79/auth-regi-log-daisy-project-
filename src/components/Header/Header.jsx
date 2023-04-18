import React, { useContext } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";

const Header = () => {
  const { user } = useContext(AuthContext);

  return (
    <>
      <div className="navbar bg-neutral text-neutral-content nav-container">
        <div className="nav-left-part">
        <Link className="btn btn-ghost normal-case text-xl" to="/">
          Dream Hub
        </Link>
        <div className="user-info">
          {user ? (
            <span>{user.email}</span>
          ) : (
            <button className="btn btn-xs">sign out</button>
          )}
        </div>
        </div>

        <div className="nav-right-part">
          <Link className="btn btn-ghost normal-case text-xl" to="/">
            Home
          </Link>
          {""}
          <Link className="btn btn-ghost normal-case text-xl" to="/login">
            Login
          </Link>
          {""}
          <Link className="btn btn-ghost normal-case text-xl" to="/register">
            Register
          </Link>
        </div>

      </div>
    </>
  );
};

export default Header;
