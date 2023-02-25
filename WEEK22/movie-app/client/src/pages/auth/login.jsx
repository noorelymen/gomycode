import React, { useState } from "react";
import HomeLayout from "../../components/layouts/home";
import { login } from "../../services/auth.service";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../helper/validations"

import "./style.css";
  
export default function LoginPage() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmitHandler = (data) => {
    console.log(data);
    //api call bdd with axios this should be as a service in
    const {email,password} = data;
    login({email,password})

    reset();
  };

  return (
    <HomeLayout>
      <div className="auth-wrapper pt-5">
        <div className="row">
          <h1 className="text-white text-center">Login to admin account</h1>
        </div>
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card auth-card">
              <div className="card-body">
                <form onSubmit={handleSubmit(onSubmitHandler)}>
                  <div className="form-group mt-3">
                    <label className="text-white">Email</label>
                    <input
                      {...register("email")}
                      type="text"
                      placeholder="enter your email"
                      className="form-control"
                    />
                    <p className="text-danger">{errors.email?.message}</p>
                  </div>
                  <div className="form-group mt-3">
                    <label className="text-white">Password</label>
                    <input
                      {...register("password")}
                      type="password"
                      placeholder="enter your password"
                      className="form-control"
                    />
                    <p className="text-danger">{errors.password?.message}</p>
                  </div>
                  <div className="form-group mt-3">
                    <button
                      className="btn bg-red text-white"
                    >
                      Sign in
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
}
