import React from 'react';

import plus from 'Pages/AssetsPages/plus.png';
import chat from 'Pages/AssetsPages/chat.png';
import guarantee from 'Pages/AssetsPages/guarantee.png';
import freeshipping from 'Pages/AssetsPages/free-shipping.png';
import facebook from 'Pages/AssetsPages/facebook.png';
import gmail from 'Pages/AssetsPages/gmail.png';
import google from 'Pages/AssetsPages/google.png';

import { Link } from 'react-router-dom';
import './Footer.css'

const Footer =() => {
    return (
        <div className="footer">
            
            <div className="comit">
                <div className="comits">
                    <div className="genuine">
                        <img src={plus} alt="plus-icon" />
                        <span>Genuine Medicine</span>
                    </div>

                    <div className="quality-commitment">
                        <img src={guarantee} alt="guarantee-icon" />
                        <span>Quality Commitment</span>
                    </div>

                    <div className="consulting-support">
                        <img src={chat} alt="chat-icon" />
                        <span>Consulting Support</span>
                    </div>

                    <div className="free-shipping">
                        <img src={freeshipping} alt="freeshipping-icon" />
                        <span>Free Shipping</span>
                    </div>
                </div>
            </div>
            <div className="container-bottom">
            <div className="info">
                <h1>HoangHa Pharmacy</h1>
                <div className="company-pharmacy">
                    <h1>Hoang Ha Pharmacy Joint Stock Company</h1>
                    <p>123, Department of Planning and Investment, Ho Chi Minh City</p>
                    <p>Address: XXX Au Co, Tan Phu District, Ho Chi Minh City</p>
                    <p>Email: sale@hoanghaPharmacy.com</p>
                </div>               
            </div>

            <div className="sub-section">
                <div className="intro">
                    <h1>INTRODUCTION</h1>
                    <span>Introducing Pharmacy</span>
                    <span>Online Shopping Guide</span>
                    <span>Delivery policy</span>
                    <span>Payment policy</span>
                    <span>Return and warranty policy</span>
                    <span>Privacy Policy</span>
                    <span>Membership points rules</span>
                </div>
                <div className="product-catalog">
                    <h1>PRODUCT LIST</h1>
                    <span>Medicine</span>
                    <span>Functional food</span>
                    <span>Pharmaceuticals - Cosmetics</span>
                    <span>Medical equipment</span>
                </div>
                <div className="connect">
                    <h1>Connect with us</h1>
                    <div className="icon-app">
                        <img src={facebook} alt="facebook-icon" />
                        <img src={gmail} alt="gmail-icon" />
                        <img src={google} alt="google-icon" />
                    </div>
                    <span>Hotline: XXX-456-789</span>
                </div>
            </div>
            </div>
            <div className="footer-bottom">
                <h1>Designed and completed by Vu Ha, Pharmaceutical website design</h1>
                <span>This website is based on learning, the content of this website is for learning purposes only</span>
            </div>
        </div>
    )
}
export default Footer;

