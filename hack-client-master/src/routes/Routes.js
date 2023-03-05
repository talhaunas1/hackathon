import React from "react";
import { BrowserRouter, Routes as Router, Route, Outlet,  } from "react-router-dom";
import AddPost from "../pages/AddPost";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import Signup from "../pages/Signup";

const Routes = () => {
  return (
    <BrowserRouter>
      <Router>
        <Route path="/">
          <Route index  element={<SignIn />} />
          <Route path='/home' element={<Home />} />
          <Route path="signup" element={<Signup />} />
          <Route path="add" element={<AddPost />} />
        </Route>
      </Router>
    </BrowserRouter>
  );
};

export default Routes;
