import React from 'react'
import "./Register.css"
import user_icon from "../Assets/user.png"
import phone_icon from "../Assets/phone.png"
import password_icon from "../Assets/password.png"
import pharmacy_icon from "../Assets/pharmacy.png"
import email_icon from "../Assets/email.png"
import address_icon from "../Assets/address.png"

const Register =()=>{
    return(
        <div className="register-container">
    {/* Bên trái */}
    <div className="register-left-side">
      <img src={pharmacy_icon} alt="Pharmacy-icon" />
    </div>

    {/* Bên phải */}
    <div className="register-right-side">
      {/* Tiêu đề đăng ký */}
      <div className="register-header">
        <div className="text">Register</div>
        <div className="underline"></div>
      </div>

      <div className="register-inputs">
        <div className="input">
          <img src={user_icon} alt="user-icon" />
          <input type="text" placeholder="Username" />
        </div>
        <div className="input">
          <img src={phone_icon} alt="Phone-icon" />
          <input type="text" placeholder="Phone" />
        </div>
        <div className="input">
          <img src={email_icon} alt="email-icon" />
          <input type="text" placeholder="Email" />
        </div>
        <div className="input">
          <img src={address_icon} alt="address-icon" />
          <input type="text" placeholder="Address" />
        </div>
        <div className="gender">
            <label>
                <input type="radio" name="gender" value="Men" />Men
            </label>
            <label>
                <input type="radio" name="gender" value="Women" />Women
            </label>
        </div>
        <div className="input">
          <img src={password_icon} alt="password-icon" />
          <input type="password" placeholder="Password" />
        </div>
        <div className="input">
          <img src={password_icon} alt="password-icon" />
          <input type="password" placeholder="Re-enter password" />
        </div>
        <div className="register-remember">
          <input type="checkbox" id="remember" />
          <label htmlFor="remember">Remember Me</label>
        </div>
        <button type="register-submit">Register</button>

        <div className="register-link">
          <p>Do you already have an account? <a href="LoginSignup.html">Login</a></p>
        </div>
      </div>
    </div>
  </div>
);
}
export default Register;
