import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {useForm} from 'react-hook-form';
import { SigninFormData } from '../../models/user.model';
import { useDispatch, useSelector } from 'react-redux';
import {fetchUsersSuccess, fetchUsersFailure} from '../../redux/slices/users.slices';
import { AppState, AppDispatch } from '../../redux/store/store';
import { SagaActions } from "../../saga/sagaactions";


const Signin: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }, reset
} = useForm<SigninFormData>({ mode: "all" });

const navigate = useNavigate();

const userData = useSelector((store:AppState) => store.users);

useEffect(()=>{
  if(userData.user) {
    console.log("useEffect called>>>");
    reset();
    navigate("/dashboad");
  }
}, [userData.user])

const dispatch = useDispatch<AppDispatch>();
 
  return (
    <div className="container mt-5">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit(({email, password, rememberMe}) => {

      dispatch({
        type: SagaActions.FETCH_USERS_ASYNC,
        payload: {email, password, rememberMe}
      })
       /* const users = async() => {
          try {
            const data = await fetch("http://localhost:3500/users");
            const result = await data.json();
        
            if (result) {
              console.log("result here>>" + result);
              dispatch(fetchUsersSuccess({result: result, user:{email, password, rememberMe}}));
            } else {
              dispatch(fetchUsersFailure("Error fetching users"));
            }
        
            return result;
          } catch (error) {
            // Handle errors
            console.error("Error fetching users:", error);
            throw error; // Optionally re-throw the error if needed
          }
        } 
        users();*/
        
        console.log("sign submitted::");
      })}>
        <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          className="form-control"
          id="email"
          {...register('email', {
            required: true,
            pattern: {
              value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: 'Please enter a valid email',
            },
          })}
        />
        {errors.email && (
          <p style={{ color: 'red' }}>
            {errors.email.message ? `${errors.email.message}` : 'Email is required' }
          </p>
        )}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            className="form-control"
            id="password"
            {...register("password", { required: true })}
          />
          {errors.password && <p style={{ color: "red" }}>password is Required!</p>}
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="rememberMe"
            {...register("rememberMe")}
          />
          <label className="form-check-label" htmlFor="rememberMe">
            Remember me
          </label>
        </div>
        {userData.loading && <p>Sending data to Server</p>}
        {userData.error && <p style={{ color: "red" }}>{userData.error}</p>}
        <button className="btn btn-primary mt-3">
          Sign In
        </button>
      </form>
      <div className="mt-3">
           Do not have an account? <Link to="/signup">Sign Up</Link>
      </div>
    </div>
  );
};

export default Signin;
