import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { signinStart,signinSuccess,signinFailure } from "../redux/user/userSlice.js";



const SignIn = () => {
  const [formData, setFormData] = useState({});

  const navigate = useNavigate();
  const dispatch=useDispatch();

  const {error,loading}=useSelector((state)=>state.user);


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };



  const handleSubmit = async (e) => {
    e.preventDefault();


    try {
       dispatch(signinStart());
      const { data } = await axios.post("/api/auth/signin", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

    

      if (data.success === false) {
       
        dispatch(signinFailure(data.message));
        return;
      }

      // ✅ Add this line here — clears the form after successful signup
      setFormData({ email: "", password: "" });

        dispatch(signinSuccess(data));
      navigate("/");
    } 
    catch (error) {
     


      const message=error.response && error.response.data ? error.response.data.message : error.message;
      dispatch(signinFailure(message));

      // if (error.response && error.response.data) {
      //   setError(error.response.data.message);
      // } else {
      //   setError(error.message);
      // }
    }
  };

  return (
    <>
      <div className="p-3 max-w-md mx-auto ">
        <h1 className="text-3xl font-semibold text-center my-7">Sign Up</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        
          <input
            onChange={handleChange}
            type="email"
            placeholder="Email"
            id="email"
            className="border p-3 rounded-lg bg-white border-none outline-none  "
          />
          <input
            onChange={handleChange}
            type="password"
            placeholder="Password"
            id="password"
            className="border p-3 rounded-lg bg-white border-none outline-none "
          />
          <button
            disabled={loading}
            type="submit"
            className="bg-slate-700 uppercase text-white cursor-pointer p-3 rounded-lg font-semibold hover:opacity-95 disabled:opacity-80"
          >
            {loading ? "Loading" : "Sign In"}
          </button>
        </form>
        <div className="flex gap-2 mt-5 ">
          <p>Dont Have an account?</p>
          <Link to="/sign-up">
            <span className="text-blue-700">Sign Up</span>
          </Link>
        </div>
        {error && <p className="text-red-500 mt-7">{error}</p>}
      </div>
    </>
  );
};

export default SignIn;
