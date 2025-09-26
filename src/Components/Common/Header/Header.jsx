import React from 'react';


import plus from 'Pages/AssetsPages/plus.png';
import documents from 'Pages/AssetsPages/documents.png';
import chat from 'Pages/AssetsPages/chat.png';
import freeshipping from 'Pages/AssetsPages/free-shipping.png';
import guarantee from 'Pages/AssetsPages/guarantee.png';
import shoppingcart from 'Pages/AssetsPages/shopping-cart.png';
import user from 'Pages/AssetsPages/user.png';
import search from 'Pages/AssetsPages/search.png';

import { Link } from 'react-router-dom';
import './Header.css';

const Header =() => {
    return (
        
        <div className="container">
            <header className='Header'>
                <div className="top-bar"> 
                    <p>ACCUMULATED PURCHASES - GET MANY DISCOUNTS IMMEDIATELY</p>
                    <div className="bottom-bar">
                        <div className="register-membership">Register for membership</div> 
                        <a href="link.html"> Here!</a>
                    </div>
                    
                </div>

                <div className="main-header">
                    <div className="Logo">HoangHa pharmacy</div>

                    <div className="center-header">
                        
                        <div className="main-nav">
                            <span>Home</span>
                            <span>Introduce</span>
                            <span>Policy</span>
                            <span>Support</span>
                        </div>
                        
                        <div className="search-box">
                            <input type="text" placeholder="Search for medicines..." />  
                            <img src={search} alt="search-icon" />                     
                        </div>
                    </div>

                    <div className="header-right">
                        {/* Hàng trên */}
                        <div className="header-top">
                            <span className="Hotline">Hotline: 1800 10YY</span>
                            <div className="login-section">
                                <button className="login-introduce">Login</button>
                                <img src={user} alt="user-icon" />
                        
                            </div>
                        </div>

                        {/* Hàng dưới */}
                        <div className="header-bottom">
                            <button className="history-bought">
                                <img src={documents} alt="document-icon" />Purchase History
                            </button>
                            <button className="shopping-cart-introduce">
                                <img src={shoppingcart} alt="shoppingcart-icon" />Shopping Cart
                            </button>
                        </div>
                    </div>
                </div>
                    <div className='category-nav'>
                        <ul>
                            <li><a href ="#">Medicine</a></li>
                            <li><a href ="#">Functional Food</a></li>
                            <li><a href ="#">Pharmaceuticals - Cosmetics</a></li>
                            <li><a href ="#">Medical equipment</a></li>
                        </ul>
                    </div>
            </header>
        </div>
    )
}
export default Header;