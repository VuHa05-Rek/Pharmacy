import React from 'react'
import './OTP1.css'
import pharmacy_icon from '../Assets/pharmacy.png'

export const OTP1 = () => {
    return (
        <div className="enter-code-container">
            <div className="enter-code-left-side">
                <img src={pharmacy_icon} alt="Pharmacy-icon" />
            </div>
            <div className="enter-code-right-side">
                <div className="header">
                    <div className="text">Register</div>
                    <div className="underline"></div>
                </div>
                <div className="enter-code-instruction">
                    <div className="enter-code-input">
                        <label htmlFor="enter">Nhập mã xác nhận:</label>
                        <input type="text" id="enter" name="enter" />
                    </div>
                    <div className="otp-verification">
                        <span className="OTP-message">OTP verification code has been sent to your phone number.</span>
                        <span className="OTP-message-check">Please check your phone.</span>
                    </div>
                    <div className="send-code-link">
                        <span>Code not received?</span>
                        <a href="ResendCode.html">Resend code(60s)</a>
                    </div>
                    <button className="successful">Complete</button>
                    <a href="Register.html" className="back-link-register">Back to login</a>
                </div>
            </div>
        </div>
    )
}
export default OTP1;