import React from "react";
import { Redirect } from "react-router-dom";
import app from "../../../appsBasic";

const logout = () => {
  app.removeToken();
  app.removeUserId();
  app.removeName();
  app.removeTestId();
  app.removeTestName();
  return <Redirect to="/"></Redirect>;
};

export default logout;
