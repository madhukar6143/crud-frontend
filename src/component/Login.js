import React from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import "./login.css";
import axios from "axios";
import { URL } from '../App';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const location = useLocation();
  const navigate = useNavigate();
  const { email, password } = location.state || {};

  const onSubmit = async (data) => {
    try {
      console.log('data', data);
      let response = await axios.post(`${URL}/user/login`, data);
      console.log(response, "hjmvdf")

      // Assuming the response includes a property like 'success' to indicate successful login
      if (response.data.message === "Login successful") {
        // Set isLoggedIn to true in localStorage
        localStorage.setItem('isLoggedIn', 'true');

        // Navigate to the addItem route
        navigate('/addItem');
      } else {
        // Handle unsuccessful login here, show an error message or take appropriate action
        console.log(response.data.message)
      }
    } catch (error) {
      console.log("err", error);
    }
  };

  return (
    <div>
      <div className="login-page ">
        <div className="form-box  bg-light border border-warning back bg-light">
          <h1>Login</h1>
          <form onSubmit={handleSubmit(onSubmit)} className='formclass'>
            <input
              {...register("email", {
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid Format"
                }
              })}
              type="email"
              name="email"
              defaultValue={email}
              placeholder="Email"
              autoComplete="off"
            />
            {errors.email && <span className="error">{errors.email.message}</span>}
            <input
              {...register("password", {
                required: true,
                pattern: {
                  value: /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,16}$/,
                  message:
                    "Password must contain at least one uppercase letter, one lowercase letter, one special character, and have a minimum length of 8 and maximum length of 16 characters",
                }
              })}
              type="password"
              name="password"
              defaultValue={password}
              autoComplete="off"
              placeholder="Password"
            />
            {errors.password && (
              <span className="error">{errors.password.message}</span>
            )}

            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
