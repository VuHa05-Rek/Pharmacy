import React from 'react' 
import "./ForgotPassword.css"
import pharmacy_icon from "../Assets/pharmacy.png" 
import Phone_icon from "../Assets/phone.png"
export const ForgotPassword =() => {
    return (
        <div className="forgot-password-container">
            <div className="forgot-password-left-side">
                <img src={pharmacy_icon} alt="Pharmacy-icon" />
            </div>
            <div className="forgot-password-right-side">
                <div className="header">
                    <div className="text">Forgot Password</div>
                    <div className="underline"></div>
                </div>
                <div className ="forgot-password-instruction">
                <div className="forgot-password-input">
                    <input type="Phone" placeholder="Phone" />
                    <button className="send-otp-button">Send OTP code</button>
                </div>
                <div className="forgot-password-input">
                    <input type="text" placeholder="Enter confirmation code" />
                </div>

                <div className="Send-code-link">
                    <span>Code not received?</span>
                    <a href="ResendCode.html">Resend code</a>
                </div>

                    <button className="complete" type="submit">Complete</button>
                    <a href="login.html" className="back-link">Back to login</a>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword;
