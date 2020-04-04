import React from "react";
import { Redirect } from "react-router-dom";

const logout = () => {
  localStorage.removeItem("token");
  return <Redirect to="/"></Redirect>;
};

export default logout;
