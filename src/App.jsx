import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginSignup from "./Login/LoginSignup/LoginSignup";
import  Register  from './Login/LoginSignup/Register';
import ForgotPassword from './Login/LoginSignup/ForgotPassword';
import ResendCode from './Login/LoginSignup/ResendCode';
import OTP1 from './Login/LoginSignup/OTP1';
import OTP2 from './Login/LoginSignup/OTP2';
import ResetPassword from './Login/LoginSignup/ResetPassword';
//----------------------------------------------------
import Sidebar from './Components/Introduce/Sidebar/Sidebar';

import ContentLayout from './Components/Introduce/Layout/ContentLayout';
import Introduce from './Pages/Introduce/Introduce';
import Guide from './Pages/BuyingGuide/BuyingGuide';
import Shipping from './Pages/Shipping/Shipping';
import Payment from './Pages/Payment/Payment';
import Warranty from './Pages/Warranty/Warranty';
import Privacy from './Pages/Privacy/Privacy';
import Points from './Pages/MembershipPoints/MembershipPoints';

//----------------------------------------------------
import Home from './Components/Home/Home';
import Header from './Components/Common/Header/Header';
import Footer from './Components/Common/Footer/Footer';

function App() {
  return (
    // <Routes>
    //   <Route path="/" element={<ContentLayout />}>
    //     <Route path="introduce" element={<Introduce />} />
    //     <Route path="guide" element={<Guide />} />
    //     <Route path="shipping" element={<Shipping />} />
    //     <Route path="payment" element={<Payment />} />
    //     <Route path="warranty" element={<Warranty />} />
    //     <Route path="privacy" element={<Privacy />} />
    //     <Route path="points" element={<Points />} />
    //   </Route>
    // </Routes>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
export default App;