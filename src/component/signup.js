import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { URL } from "../App";
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import "bootstrap/dist/css/bootstrap.min.css";
import "./Signup.css";

const Signup = () => {
  const navigate = useNavigate();  // Initialize the useNavigate hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      let response = await axios.post(`${URL}/user/signup`, data);
      alert(response.data.message);

      // If signup is successful, navigate to the login page
      navigate('/login');
    } catch (error) {
      alert(error.response.data.message);
      console.log(error);
    }
  };

  return (
    
    <div className="signup-page border-danger border-5 p-5 ">
      <form onSubmit={handleSubmit(onSubmit)} className=" abcd border border-warning border-5 rounded p-3">
      <h1 className="w-100 border-bottom  border-success" >Register</h1>
        <div className="mb-1">
        <label>:</label>
          <input
            {...register("name", {
              required: true,
              pattern: {
                value: /^[A-Za-z]+$/,
                message: "Name should contain only alphabets",
              },
            })}
            type="text"
            className="form-control"
            placeholder="Name"
            autoComplete="off"
          />
          {errors.name && <span className="error">{errors.name.message}</span>}
        </div>

        <div className="mb-1">
          <input
            {...register("email", {
              required: true,
              pattern: {
                value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid Email Format",
              },
            })}
            type="email"
            className="form-control"
            placeholder="Email"
            autoComplete="off"
          />
          {errors.email && <span className="error">{errors.email.message}</span>}
        </div>

        <div className="mb-1">
          <input
            {...register("phoneNumber", {
              required: true,
              pattern: {
                value: /^[0-9]+$/,
                message: "Phone should contain only numbers",
              },
            })}
            type="tel"
            className="form-control"
            placeholder="Phone"
            autoComplete="off"
          />
          {errors.phoneNumber && <span className="error">{errors.phoneNumber.message}</span>}
        </div>


        <div className="mb-1">
          <input
            {...register("password", {
              required: true,
              minLength: 6, // Set your desired minimum password length
            })}
            type="password"
            className="form-control"
            placeholder="Password"
            autoComplete="off"
          />
          {errors.password && <span className="error">{errors.password.message}</span>}
        </div>

        <div className="mb-3 border border-warning">
          <label>Gender:</label>
          <br />
          <div className="form-check-inline">
            <input
              type="radio"
              {...register("gender", { required: true })}
              value="male"
              className="form-check-input"
            />
            <label htmlFor="male" className="form-check-label">
              Male
            </label>
          </div>
          <div className="form-check-inline">
            <input
              type="radio"
              {...register("gender", { required: true })}
              value="female"
              className="form-check-input"
            />
            <label htmlFor="female" className="form-check-label">
              Female
            </label>
          </div>
          <div className="form-check-inline">
            <input
              type="radio"
              {...register("gender", { required: true })}
              value="others"
              className="form-check-input"
            />
            <label htmlFor="others" className="form-check-label">
              Others
            </label>
          </div>
        </div>

        <div className="mb-3">
          <label>How did you hear about this?</label>
          <div className="row">
            <div className="col">
              <div className="form-check">
                <input
                  type="checkbox"
                  {...register("howDidYouHearLinkedIn")}
                  value="LinkedIn"
                  className="form-check-input"
                />
                <label htmlFor="howDidYouHearLinkedIn" className="form-check-label">
                  LinkedIn
                </label>
              </div>
            </div>
            <div className="col">
              <div className="form-check">
                <input
                  type="checkbox"
                  {...register("howDidYouHearFriends")}
                  value="Friends"
                  className="form-check-input"
                />
                <label htmlFor="howDidYouHearFriends" className="form-check-label">
                  Friends
                </label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="form-check">
                <input
                  type="checkbox"
                  {...register("howDidYouHearJobPortal")}
                  value="Job Portal"
                  className="form-check-input"
                />
                <label htmlFor="howDidYouHearJobPortal" className="form-check-label">
                  Job Portal
                </label>
              </div>
            </div>
            <div className="col">
              <div className="form-check">
                <input
                  type="checkbox"
                  {...register("howDidYouHearOthers")}
                  value="Others"
                  className="form-check-input"
                />
                <label htmlFor="howDidYouHearOthers" className="form-check-label">
                  Others
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-3">
          <label>City:</label>
          <select {...register("city")} defaultValue="" className="form-select">
            <option value="" disabled hidden>
              Select City
            </option>
            <option value="Mumbai">Mumbai</option>
            <option value="Pune">Pune</option>
            <option value="Ahmedabad">Ahmedabad</option>
          </select>
        </div>


        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
