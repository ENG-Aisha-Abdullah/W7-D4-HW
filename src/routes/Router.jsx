import React from 'react'
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from '../pages/Home';
import Nav from '../component/Nav';
import LogIn from '../pages/LogIn';
import SignUp from '../pages/SignUp';
import AddCharacter from '../pages/AddCharacter';

function Layout() {
  return (
    <>
      <Nav />
      <Outlet />
      {/* <Footer /> */}
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "logIn", element: <LogIn /> },
      { path: "signUp", element: <SignUp /> },
    { path: "addCharacter", element: <AddCharacter /> },
    ],
  },
]);

function Router() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default Router;