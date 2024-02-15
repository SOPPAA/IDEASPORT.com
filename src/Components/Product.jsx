import React from "react";
import { useState } from "react"; 
import "../Compcss/Product.css";

// components
import Nav from "./Nav";
import Footer from "./Footer";

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
          </div>
        </div>
        {/* HEADER end */}

        
        <div className="head-liner">
          <h2>ตัวอย่างสินค้า:</h2>
        </div>
        <div className="liner">
          <h2>ตัวอย่างเสื้อคอกลม-คอวี:</h2>
        </div>
      
      
      {/* เสื้อคอกลม-คอวี */}
      <ProductA />
      <div className="liner">
        <h2>ตัวอย่างเสื้อคอจีน:</h2>
      </div>
      {/* เสื้อคอจีน */}
      <ProductB />
      <div className="liner">
        <h2>ตัวอย่างเสื้อคอปก:</h2>
      </div>
      {/* เสื้อคอปก */}
      <ProductC />
      <div className="liner">
        <h2>ตัวอย่างเสื้อคอวีมุสลีมะห์:</h2>
      </div>
      {/* เสื้อคอวีมุสลีมะห์ */}
      <ProductM />
      {/* เสื้อโรงเรียนชุดพละ */}
      </div>
      <Footer />
    </>
  );
}

export default Product;
