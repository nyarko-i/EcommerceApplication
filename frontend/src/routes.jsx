import { Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Orders from "./Pages/Orders";
import Products from "./Pages/Products";
import Customers from "./Pages/Customers";
import Messages from "./Pages/Messages";
import Settings from "./Pages/Settings";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/products" element={<Products />} />
      <Route path="/customers" element={<Customers />} />
      <Route path="/messages" element={<Messages />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/signIn" element={<SignIn />} />
      <Route path="/signUp" element={<SignUp />} />
    </Routes>
  );
};

export default AppRoutes;
