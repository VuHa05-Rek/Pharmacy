import React from 'react'
import "./ProductContent.css";
import slogan from 'Components/Home/image/slogan.png';
import bestseller from 'Components/Home/image/bestseller.png';
import newProduct from 'Components/Home/image/new.png';
import radio from 'Components/Home/image/radio.png';
import medicine from 'Components/Home/image/medicine.png';

const ProductContent = () => {
    return (
        <div className="container-content">
            <div className="slogan">
                <img src={slogan} alt="slogan" />
            </div>
            <div className="all-product">
                <div className="product-bestseller">
                    <div className="name-bestseller">
                        <img src={bestseller} alt="bestseller" />
                        <p>PRODUCT BESTSELLER</p>
                    </div>
                    <div className="list-bestseller">
                        <img src={medicine} alt="medicine"/>
                        <div className="info-medicine">
                            <p>Nat C 1000 supports increased resistance, bottle of 60 tablets</p>
                            <span>Price: 120,000đ</span>
                        </div>
                        <button className="add-to-cart">Add to cart</button>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default ProductContent;