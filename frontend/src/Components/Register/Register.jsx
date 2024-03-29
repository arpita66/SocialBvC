import { Avatar, Typography, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Register.css";
import { registerUser } from "../../Actions/User";
import { useAlert } from "react-alert";
const Register = () => {
  const [name, setName] = useState("");
  const [smart_id, setSmart_ID] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("");
  const [password, setPassword] = useState("");
  const [Designation, setDesignation] = useState("");
  const dispatch = useDispatch();
  const alert = useAlert();
  const { loading, error } = useSelector((state) => state.user);
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const Reader = new FileReader();
    Reader.readAsDataURL(file);
    Reader.onload = () => {
      if (Reader.readyState === 2) {
        setAvatar(Reader.result);
      }
    };
  };
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(registerUser(name, smart_id, email, password, avatar, Designation));
  };
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch({ type: "clearErrors" });
    }
  }, [dispatch, error, alert]);
  return (
    <div className="register">

        <div className="registerLeft">
          <h3 className="registerLogo">BvConnect</h3>
          <span className="registerDesc">
          Lets get you started! Enter your personal details and start journey with us.
          </span>
        </div>

      <form className="registerForm" onSubmit={submitHandler}>


        <Avatar
          src={avatar}
          alt="User"
          sx={{ height: "8vmax", width: "8vmax" }}
        />

        <input type="file" accept="image/*" onChange={handleImageChange} />
        <input
          type="text"
          value={name}
          placeholder="Name"
          className="registerInputs"
          required
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={smart_id}
          placeholder="Smart Card ID"
          className="registerInputs"
          required
          onChange={(e) => setSmart_ID(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          className="registerInputs"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="registerInputs"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          type="text"
          value={Designation}
          className="registerInputs"
          placeholder="Designation (Student/Alumni/Faculty)"
          onChange={(e) => setDesignation(e.target.value)}
        />

        <br/>
        
        <Button disabled={loading} type="submit">
          Sign Up
        </Button>

        <Link to="/">
          <Typography>Already Signed Up? Login Now</Typography>
        </Link>


      </form>
    </div>
  );
};
export default Register;