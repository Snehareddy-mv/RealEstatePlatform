import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [Loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { data } = await axios.post("/api/auth/signup", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      alert(data.message);

      if (data.success === false) {
        setError(data.message);
        setLoading(false);
        return;
      }

      // ✅ Add this line here — clears the form after successful signup
      setFormData({ username: "", email: "", password: "" });

      setLoading(false);
      setError(null);
      navigate("/sign-in");
    } catch (error) {
      setLoading(false);

      if (error.response && error.response.data) {
        setError(error.response.data.message);
      } else {
        setError(error.message);
      }
    }
  };

  return (
    <>
      <div className="p-3 max-w-md mx-auto ">
        <h1 className="text-3xl font-semibold text-center my-7">Sign Up</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            onChange={handleChange}
            type="text"
            placeholder="Username"
            id="username"
            className="border p-3 rounded-lg bg-white outline-none  border-none  "
          />
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
            disabled={Loading}
            type="submit"
            className="bg-slate-700 uppercase text-white cursor-pointer p-3 rounded-lg font-semibold hover:opacity-95 disabled:opacity-80"
          >
            {Loading ? "Loading" : "Sign Up"}
          </button>
        </form>
        <div className="flex gap-2 mt-5 ">
          <p>Have an account?</p>
          <Link to="/sign-in">
            <span className="text-blue-700">Sign In</span>
          </Link>
        </div>
        {error && <p className="text-red-500">{error}</p>}
      </div>
    </>
  );
};

export default SignUp;
