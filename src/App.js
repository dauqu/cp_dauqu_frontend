import axios from "axios";
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Cart from "./components/Cart";
import Home from "./components/Home";
import Icons_slider from "./components/Icons_slider";
import ImgSlider from "./components/ImgSlider";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Newprofile from "./components/Newprofile";
import Profile from "./components/Profile";
import Register from "./components/Register";
import Slider from "./components/Slider";
import StripePayment from "./components/StripePayment";
import SubscibedPlan from "./components/SubscibedPlan";
import Test from "./components/Test";
import Update_psw from "./components/Update_psw";
// allow axios credentials

axios.defaults.withCredentials = true;
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/slider" element={<Slider />} />
        <Route path="/imgslider" element={<ImgSlider />} />
        <Route path="/iconSlider" element={<Icons_slider />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/updatepsw" element={<Update_psw />} />
        <Route path="/test" element={<Test />} />
        <Route path="/stripepayment" element={<StripePayment />} />
        <Route path="/newprofile" element={<Newprofile />} />
        <Route path="/cart/:slug" element={<Cart />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/subs" element={<SubscibedPlan />} />
      </Routes>
    </>
  );
}

export default App;

// https://dauqu.com/support/
// https://dauqu.com/terms-of-service
// https://dauqu.com/privacy-policy
// https://dauqu.com/cancellation

// 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
