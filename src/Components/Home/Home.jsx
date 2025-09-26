import React from "react";
import "./Home.css";
import Header from '../Common/Header/Header';
import Footer from '../Common/Footer/Footer';
import ProductContent from "./Product Content/ProductContent";
const Home =() => {
    return (
        <div className="home-container">
            
            <div className="header-home">
                <Header />
            </div>
            <div className="main-home">
                <h1>Welcome to Our Pharmacy</h1> 
                <ProductContent />
            </div>
            <Footer />
        </div>
    );
}
export default Home;