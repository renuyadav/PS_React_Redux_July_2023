import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { SignupFormData } from '../../models/user.model';
import { AppState, AppDispatch } from '../../redux/store/store';
import { SagaActions } from '../../saga/sagaactions';
import { useDispatch } from 'react-redux';

const Signup: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignupFormData>({ mode: "all" });  

    const dispatch = useDispatch<AppDispatch>();
    
  return (
    <div className="container mt-5">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit(({username, email, password, confirmPassword, signupCondition}) =>{
        console.log("signup submit>>" + username +"::"+  email);
        dispatch({
            type: SagaActions.ADD_USER_ASYNC,
            payload: {username, email, password, confirmPassword, signupCondition}
          }) 
        
      })}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            className="form-control"
            id="username"
            {...register("username", { required: true })}
          />
          {errors.username && <p style={{ color: "red" }}>Username is Required!</p>}
        </div>
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
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            {...register("confirmPassword", { required: true })}
          />
          {errors.confirmPassword && <p style={{ color: "red" }}>confirm password is Required!</p>}
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="signupCondition"
            {...register("signupCondition")}
          />
          <label className="form-check-label" htmlFor="signupCondition">
            By Signup you accept the terms of service and privacy policy.
          </label>
        </div>
        <button className="btn btn-primary mt-3">
          Sign Up
        </button>
        <div className="mt-3">
            Already have an account? <Link to="/">Sign In</Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
