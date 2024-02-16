import React from "react";
import { useState } from "react"; 
import { Link } from "react-router-dom";

// style
import "../Compcss/Product.css";


// components
import Nav from "./Nav";
import Footer from "./Footer";
// Product item
import ProductA from "../ProductItem/ProductA";
import ProductB from "../ProductItem/ProductB";
import ProductC from "../ProductItem/ProductC";
import ProductM from "../ProductItem/ProductM";

// img
import Image from "../img/1.jpg";




function Product() {

  return (
    <>
      <Nav />
      
      <div className="container">
        {/* HEADER star */}
        <div className="con-head">
          <div className="head">
            <h1>PRODUCT</h1>
          </div >
        </div>
        {/* HEADER end */}
        <div className="List">
        <ul className="head-liner">
            <li><Link to="/Product">ทั้งหมด</Link></li>
            {/* <li><Link to="/ProductA">คอกลม-คอวี</Link></li> */}
            <li><Link to="/ProductB">คอปก</Link></li>
            <li><Link to="/ProductC">คอจีน</Link></li>
            <li><Link to="/ProductM">มุสลีมะห์</Link></li>
          </ul>
        </div>

        {/* เสื้อคอกลม-คอวี */}
        <ProductA />
        {/* เสื้อคอจีน */}
        <ProductB />
        {/* เสื้อคอปก */}
        <ProductC />
        {/* เสื้อคอวีมุสลีมะห์ */}
        <ProductM />
        {/* เสื้อโรงเรียนชุดพละ */}
      </div>
      <Footer />
    </>
  );
}

export default Product;
