import React from 'react'
import "./ResetPassword.css"
import password_icon from "../Assets/password.png"
import pharmacy_icon from "../Assets/pharmacy.png"
export const ResetPassword = () => {
  return (
  <div className="reset-password-container">
    <div className="left-side">
      <img src={pharmacy_icon} alt="Pharmacy-icon" />
    </div>

    <div className="reset-password-right-side">
      <div className="header">
        <div className="text">Reset Password</div>
        <div className="underline"></div>
      </div>

      <div className="reset-password-inputs">
        <div className="input">
          <img src={password_icon} alt="Password-icon" />
          <input type="password" placeholder="Password" />
        </div>

        <div className="input">
          <img src={password_icon} alt="Password-icon" />
          <input type="reset-password" placeholder="Re-enter password" />
        </div>

        <button type="submit">Complete</button>

      </div>
    </div>
  </div>
);
}
export default ResetPassword;