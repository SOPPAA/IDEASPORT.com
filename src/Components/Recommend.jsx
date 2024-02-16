import React from "react";
import '../Compcss/Recommend.css'
import Nav from "./Nav";
import Footer from "./Footer";

function Recommend() {

  const cloth = {
    micro1: "https://www.taladpha.com/images/%E0%B8%9C%E0%B9%89%E0%B8%B2%E0%B9%84%E0%B8%A1%E0%B9%82%E0%B8%84%E0%B8%A3%E0%B9%80%E0%B8%A3%E0%B8%B5%E0%B8%A2%E0%B8%9A_%E0%B8%82%E0%B8%B2%E0%B8%A7%E0%B8%88%E0%B8%B1%E0%B9%8A%E0%B8%A7%E0%B8%B0_+taladpha+2038x640.jpg",
    micro2: "https://www.taladpha.com/images/%E0%B8%9C%E0%B9%89%E0%B8%B2%E0%B9%84%E0%B8%A1%E0%B9%82%E0%B8%84%E0%B8%A3%E0%B9%80%E0%B8%A3%E0%B8%B5%E0%B8%A2%E0%B8%9A_%E0%B8%82%E0%B8%B2%E0%B8%A7%E0%B8%88%E0%B8%B1%E0%B9%8A%E0%B8%A7%E0%B8%B0_+taladpha+2038x640.jpg",
    micro3: "https://www.taladpha.com/images/%E0%B8%9C%E0%B9%89%E0%B8%B2%E0%B9%80%E0%B8%A1%E0%B9%87%E0%B8%94%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B8%A7%E0%B9%82%E0%B8%9E%E0%B8%94%E0%B9%84%E0%B8%A1%E0%B9%82%E0%B8%84%E0%B8%A3_%E0%B8%82%E0%B8%B2%E0%B8%A7%E0%B8%A2%E0%B8%B8%E0%B9%82%E0%B8%A3%E0%B8%9B_+taladpha+8015.jpg",
    micro4: "https://www.taladpha.com/images/%E0%B8%9C%E0%B9%89%E0%B8%B2%E0%B8%94%E0%B8%B2%E0%B8%A7%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B8%88%E0%B8%B2%E0%B8%A2_%E0%B8%82%E0%B8%B2%E0%B8%A7%E0%B8%A2%E0%B8%B8%E0%B9%82%E0%B8%A3%E0%B8%9B_+taladpha+57.jpg",
    lightning: "https://www.taladpha.com/images/%E0%B8%9C%E0%B9%89%E0%B8%B2%E0%B8%AA%E0%B8%B2%E0%B8%A2%E0%B8%9F%E0%B9%89%E0%B8%B2_%E0%B8%A3%E0%B8%B1%E0%B8%99%E0%B9%80%E0%B8%A7%E0%B8%A2%E0%B9%8C_%E0%B8%82%E0%B8%B2%E0%B8%A7%E0%B8%88%E0%B8%B1%E0%B9%8A%E0%B8%A7%E0%B8%B0_+taladpha+4290x640.jpg",
    
  }


  return (
    <>
      <Nav />
      <div className="container">

        <div className="con-head">
          <div className="head">
            <h1>Recommend</h1>
          </div>
        </div>
       

      </div>
      <Footer />
    </>
  );
}

export default Recommend;
