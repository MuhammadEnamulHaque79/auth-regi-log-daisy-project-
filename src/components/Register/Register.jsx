import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";


const Register = () => {
const {user,createUser} = useContext(AuthContext);
// console.log(createUser);


const handleRegister=(event)=>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name,email,password);

    createUser(email,password)
      .then((result)=>{
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset(); //clear the form field;
      })
      .catch((error)=>{
        const errorCode = error.message;
        console.log(errorCode)
      })
}
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-3xl font-semibold">Please Register</h1>
        </div>
        <form onSubmit={handleRegister} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">

            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
            
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <Link to="/login" className="label-text-alt link link-hover font-bold">
                  Already have an account? Please Login
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
