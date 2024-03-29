import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { URL } from "../App";
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import "bootstrap/dist/css/bootstrap.min.css";
import "./Signup.css";

const AddUser = () => {
  const navigate = useNavigate();  // Initialize the useNavigate hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      let response = await axios.post(`${URL}/user/signup`, data);
      console.log(response.data.message)
      alert(response.data.message);

      // If signup is successful, navigate to the login page
    } catch (error) {
      alert(error.response.data.message);
      console.log(error);
    }
  };

  return (
    <div>
    <div className="signup-page p-2 ">
    
      <form onSubmit={handleSubmit(onSubmit)} className=" abcd border border-warning border-5 rounded p-1">
        
      <h1 className="w-100 border-bottom  border-success" >Add User</h1>
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
            className="form-control inputclass"
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
            className="form-control inputclass"
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
            className="form-control inputclass"
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
            className="form-control inputclass"
            placeholder="Password"
            autoComplete="off"
          />
          {errors.password && <span className="error">{errors.password.message}</span>}
        </div>

        <div className="mb-3 ">
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


        <button type="submit" className="btn btn-primary btn-sm">
          Add User
        </button>
      </form>
    </div>
    </div>
  );
};

export default AddUser;


/*import React from 'react'
import {useForm} from 'react-hook-form'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { URL } from "../App";

function AddUser() {
 
    let {register,handleSubmit,formState:{errors},reset}=useForm()
    let navigate = useNavigate()
    const onSubmit = async(data) => {
      console.log(data)
        let response =await axios.post(`${URL}/user/create-user`,data)
        if (response.status === 200) {
            //navigate to userlist component
            alert(response.data.message)
            navigate("/userlist")
          }
        if(response.status===200)
        {
            reset({
                username: '',
                email: '',
                phoneNumber:''
              });
        }
        
      };
     

  return (
  <div className='container border border-secondary mt-5 px-5 '>
  <form onSubmit={handleSubmit(onSubmit)}>
    
  <div>
    <input placeholder='username' className='border border-primary p-1 m-1'
       {...register("username", 
       { 
          // check username is empty
         required: "username required.",
         //minimum lentgh of username
        minLength: 
        {
          value: 6,
          message: 'minimum length should be 6' // JS only: <p>error message</p> TS only support string
        }
         })}/>
  </div>
       {errors.username && <p>{errors.username.message}</p>}


       <div>
  <input
    className='border border-primary p-1 m-1'
    placeholder='email'
    {...register("email", {
      required: "Email required",
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: 'Enter a valid email address',
      }
    })}
  />
</div>


      {errors.email && <p>{errors.email.message}</p>}
      <div>
  <input
    className='border border-primary p-1 m-1'
    placeholder='phone number'
    {...register("phoneNumber", {
      required: "Phone number required",
      pattern: {
        value: /^\d{10}$/,
        message: 'Enter a valid 10-digit phone number',
      }
    })}
  />
</div>

{errors.phoneNumber && <p>{errors.phoneNumber.message}</p>}

      <input type="submit" />
  </form>
  </div>

  )
}

export default AddUser

*/
