import React, { useEffect, useState, useContext } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import { motion } from "framer-motion";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const [state, setState] = useState("Login");
  const { setShowLogin, backendUrl, setToken, setUser } = useContext(AppContext);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

const onSubmit = async (e) => {
  e.preventDefault();

  try {
    if (state === "Login") {
     
      const { data } = await axios.post(
        backendUrl + "/api/users/login",
        { email, password }
      );

      if (data.success) {
        setToken(data.token);
        setUser(data.user);
        localStorage.setItem("token", data.token);
        setShowLogin(false);
      } else {
        toast.error("Invalid credentials");
      }

    } else {
      
      const { data } = await axios.post(
        backendUrl + "/api/users/register",
        {
          name: username,
          email,
          password,
        }
      );

      if (data.success) {
        setToken(data.token);
        setUser(data.user);
        localStorage.setItem("token", data.token);
        setShowLogin(false);
      } else {
        toast.error(data.message);
      }
    }
  } catch (error) {
    console.error("Error during login/signup:", error.response?.data || error.message);
    toast.error(error.response?.data?.message || "Something went wrong");
  }
};



  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <motion.div className="fixed top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center">
      <motion.form
        onSubmit={onSubmit}
        initial={{ opacity: 0.2, y: 50 }}
        transition={{ duration: 0.3 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative bg-white p-10 rounded-xl text-slate-500"
        action="
      "
      >
        <h1 className="text-center text-2xl text-neutral-700 font-medium">
          {state}
        </h1>
        <p className="text-sm">Welcome back! please sign in to countinue</p>

        {state !== "Login" && (
          <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-5">
            <img src={assets.user_icon} alt="" />
            <input
              type="text"
              placeholder="Full Name"
              required
              className="outline-none text-sm "
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
          </div>
        )}

        <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-5">
          <img src={assets.email_icon} alt="" />
          <input
            type="email"
            placeholder="Email id"
            required
            className="outline-none text-sm "
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-5">
          <img src={assets.lock_icon} alt="" />
          <input
            type="Password"
            placeholder="Password"
            required
            className="outline-none text-sm "
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <p className="text-sm text-blue-600 my-4 cursor-pointer">
          Forgot password
        </p>

        <button className="bg-blue-600 w-full text-white py-2 rounded-full">
          {state === "Login" ? "login" : "create account"}
        </button>

        {state === "Login" ? (
          <p className="mt-5 text-center">
            Don't have an account?
            <span
              className="text-blue-600 cursor-pointer"
              onClick={() => setState("Sign Up")}
            >
              Sign up
            </span>
          </p>
        ) : (
          <p className="mt-5 text-center">
            Already have an account?
            <span
              className="text-blue-600 cursor-pointer"
              onClick={() => setState("Login")}
            >
              Login
            </span>
          </p>
        )}

        <img
          src={assets.cross_icon}
          className="absolute top-5 right-5 cursor-pointer"
          alt=""
          onClick={() => setShowLogin(false)}
        />
      </motion.form>
    </motion.div>
  );
};

export default Login;
