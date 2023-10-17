import React from "react";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import CreateProduct from "./pages/CreateProduct";
import EditProducts from "./pages/EditProducts";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";

// const PrivateRoutes = () => {
//   const user = localStorage.getItem("email");

//   return user ? (
//     <div style={{ width: "90%", margin: "0 auto" }}>
//       <Outlet />
//     </div>
//   ) : (
//     <Navigate to="/sign-in" />
//   );
// };

const Routing = () => {
  return (
    <Routes>
      <Route path="/*" element={<HomePage />} />
      <Route path="/create-ad" element={<CreateProduct />} />
      <Route path="/edit-ad" element={<EditProducts />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default Routing;
