import React from "react";
import "./Loader.css";
import loader4 from "../../assets/loader4.gif"
const Loader = () => {
  return (
    <div className="loadingPage">
    <img src= { loader4 } alt="loader" />
      {/* <div className="loadingCircle"></div> */}
    </div>
  );
};

export default Loader;