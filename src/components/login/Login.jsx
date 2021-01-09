import React from "react";
import FormInput from "../form-input/Form-input";

export const Login = () => {
  return (
    <div className="h-scree flex align-middle">
      <div className="mx-auto container flex flex-row flex-wrap items-center">
        <div className="border w-full lg:w-1/2">
          <h1>
            Welcome back John, <br />
            Please login to your account
          </h1>
          <form className="space-y-8 p-7">
            <FormInput type="text" label="Username" />
            <FormInput type="password" label="Password" />
          </form>
        </div>
        <div className="border w-full lg:w-1/2">
          <div className="">Don't have an account?</div>
          <div className="">Create your account here.</div>
        </div>
      </div>
    </div>
  );
};

export default Login;
