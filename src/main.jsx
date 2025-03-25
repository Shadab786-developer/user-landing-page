import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Landing from "./component/Landing Page/Landing.jsx";
import Login from "./component/Login/Login.jsx";
import Signup from "./component/SignUp/Signup.jsx";
import Profile from "./component/Profile/Profile.jsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Landing />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/SignUp" element={<Signup />} />
      <Route path="/Profile" element={<Profile />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  // <Auth0Provider
  //   domain="dev-hlaiohujxp2aic02.us.auth0.com"
  //   clientId="fK7OZFxIdq5nvy0pIfIhVKw7Kj4gfoNG"
  //   authorizationParams={{
  //     redirect_uri: window.location.origin,
  //   }}
  // >
  <RouterProvider router={router} />
  // </Auth0Provider>
);
