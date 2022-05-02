import React, { useEffect, useState } from "react";
import "./Login.css";
import { Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../Actions/User";
import { fontFamily } from "@mui/material/node_modules/@mui/system";
import { alignProperty } from "@mui/material/styles/cssUtils";
import { useAlert } from "react-alert";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const alert = useAlert();

  const { error } = useSelector((state) => state.user);
  const { message } = useSelector((state) => state.like);

  const loginHandler = (e) => {
    e.preventDefault();                //page reload nahi hoga submit karne par

    dispatch(loginUser(email, password));
  };

  useEffect(() => {
   if (error) {
      alert.error(error);
      dispatch({ type: "clearErrors" });
    }
    if (message) {
      alert.success(message);
      dispatch({ type: "clearMessage" });
    }
  }, [alert, error, dispatch, message]);

  return (
    <div className="login">

       <div className="loginLeft">
          <h3 className="loginLogo">BvConnect</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on BvConnect.
          </span>
        </div>

      <form className="loginForm loginright"
       onSubmit={loginHandler}
       >

         <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
         <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          />

        <Button type="submit">Login</Button>

         <Link to="/forgot/password">
           <Typography>Forgot Password?</Typography>        
         </Link>

         <Link to="/register">
         <Typography>New User? </Typography>                
         </Link>
      </form>
    </div>
  );
};

export default Login;