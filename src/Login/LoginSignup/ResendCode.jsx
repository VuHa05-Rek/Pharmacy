import React from 'react' 
import "./ResendCode.css"
import pharmacy_icon from "../Assets/pharmacy.png" 
import Phone_icon from "../Assets/phone.png"
export const ResendCode =() => {
    return (
        <div className="resend-code-container">
            <div className="resend-code-left-side">
                <img src={pharmacy_icon} alt="Pharmacy-icon" />
            </div>
            <div className="resend-code-right-side">
                <div className="header">
                    <div className="text">Forgot Password</div>
                    <div className="underline"></div>
                </div>
                <div className ="resend-code-instruction">
                <div className="resend-code-input">
                    <input type="Phone" placeholder="Phone" />
                    <button className="send-otp-button">Send OTP code</button>
                </div>
                <div className="resend-code-input">
                    <input type="text" placeholder="Enter confirmation code" />
                </div>

                <div className="Send-code-link">
                    <span>Code not received?</span>
                    <span className="time-resend-code"> Resend code (60s)</span>
                </div>

                    <button className="complete" type="submit">Complete</button>
                    <a href="login.html" className="back-link">Back to login</a>
                </div>
            </div>
        </div>
    )
}

export default ResendCode;
