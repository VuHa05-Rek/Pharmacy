import React from 'react'
import "./LoginSignup.css"
import user_icon from "../Assets/user.png"
import phone_icon from "../Assets/phone.png"
import password_icon from "../Assets/password.png"
import pharmacy_icon from "../Assets/pharmacy.png"
import email_icon from "../Assets/email.png"
export const LoginSignup = () => {
  return (
  <div className="container">
    {/* Bên trái */}
    <div className="left-side">
      <img src={pharmacy_icon} alt="Pharmacy-icon" />
    </div>

    {/* Bên phải */}
    <div className="right-side">
      {/* Tiêu đề đăng nhập */}
      <div className="header">
        <div className="text">Login</div>
        <div className="underline"></div>
      </div>

      <div className="inputs">
        <div className="input">
          <img src={phone_icon} alt="Phone-icon" />
          <input type="text" placeholder="Phone" />
        </div>
        <div className="input">
          <img src={password_icon} alt="Password-icon" />
          <input type="password" placeholder="Password" />
        </div>

        <div className="remember">
          <input type="checkbox" id="remember" />
          <label htmlFor="remember">Remember Me</label>
          <div className="forgot-password">Forgot Password?</div>
        </div>

        {/* <div className="forgot-password">Forgot Password?</div> */}

        <button type="submit">Sign In</button>

        <div className="register-link">
          <p>Don't have an account? <a href="register.html">Register</a></p>
        </div>
      </div>
    </div>
  </div>
);

}
export default LoginSignup;