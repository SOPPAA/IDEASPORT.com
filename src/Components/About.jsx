import React from "react";
import "../Compcss/About.css";
import '../index.css'
import Nav from "./Nav";
import Footer from "./Footer";

function About() {
  return (
    <>
      <Nav />

      <div className="container">
        <div className="con_about">
          <div className="con_content">
              <h1>IDEA SPORT PATTANI</h1>
              <h3>Sportswear Sewing Factory</h3>
              <p>รับผลิตชุดพละ เสื้อกีฬาสี เสื้อทีมบอล เสื้อรุ่น <br />
                เสื้อพนักงานOFFICE และเสื้อมุสลีมะห์ รับจบในที่เดียว</p>
          </div>
          <div className="con_logo">
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default About;
