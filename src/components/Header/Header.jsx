import React, { useContext } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";

const Header = () => {
  const { user,logOut } = useContext(AuthContext);
  const handleLogOut=()=>{
    logOut()
    .then(()=>{

    })
    .catch((error)=>{
      console.error(error);
    })
  }

  return (
    <>
      <div className="navbar bg-neutral text-neutral-content nav-container">
        <div className="nav-left-part">
        <Link className="btn btn-ghost normal-case text-xl" to="/">
          Dream Hub
        </Link>
        <div className="user-info">
          {user ? (
            <>
              {user.email}
           
              <button onClick={handleLogOut} className="btn btn-warning btn-xs text-white ml-5">sign out</button>
            </>
          ) : (
           
            <Link className="btn btn-success text-white" to="/login">Login</Link>
          )}
        </div>
        </div>

        <div className="nav-right-part">
          <Link className="btn btn-ghost normal-case text-xl" to="/">Home</Link>{""}
          <Link className="btn btn-ghost normal-case text-xl" to="/orders">Orders</Link>{""}
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
