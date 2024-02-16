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
        
        <div className="recommend-con">
          <div className="content1">
            <div className="content-img">
              <img src="https://scontent.fhdy1-1.fna.fbcdn.net/v/t39.30808-6/420806248_357492430549502_3255374628980366745_n.jpg?stp=dst-jpg_s851x315&_nc_cat=101&ccb=1-7&_nc_sid=3d9721&_nc_eui2=AeHqRaibZWrrynQTohtPp42ZZ3aY9l-udE5ndpj2X650Th0JlySFMpHY0fL-Phl-0WHExSVYst55xF01xtf0CoHn&_nc_ohc=Gf1ddhTyPG8AX8SpKMw&_nc_ht=scontent.fhdy1-1.fna&oh=00_AfD-dPXvRYb5F5apUowDCjPFo0aZyzEfeiA8jXxC4Ry4TQ&oe=65D13480" alt="img" />
            </div>
            <div className="content-info">
              <h1>ชุดพละ</h1>
              <h3>รับผลิตเสื้อชุดพละโรงเรียน  เสื้อพร้อมกางเกง<br />
              ลูกค้าสามารถร่วมกันคิดแบบเสื้อที่เป็นเอกลักษณ์เฉพาะของโรงเรียนได้
              ที่มีทั้งแบบพิมพ์ลายและสกรีน มีผ้าให้เลือกได้ 
              </h3>

              <div className="details">
                  <div>
                    <h4>ผ้าที่นิยมใช้:</h4>
                  </div>
                <div className="logo">
                  <div className="logo-con">
                    <img src={cloth.micro1} alt="" />
                    <p>ผ้าไมโคร</p>
                  </div>
                  <div className="logo-con">
                    <img src={cloth.lightning} alt="" />
                    <p>ผ้าสายฟ้า</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
          
          <div className="content1">
            <div className="content-img">
              <img src="https://scontent.fhdy4-1.fna.fbcdn.net/v/t39.30808-6/420763403_357498210548924_7944678513085268221_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=3635dc&_nc_ohc=lBMLiZS4OgwAX8tKjys&_nc_ht=scontent.fhdy4-1.fna&oh=00_AfB53slfnmdolvVuP_Z05X_Yf3s6Iix8AsMLm2Yubo_oYQ&oe=65D32339" alt="img" />
            </div>
            <div className="content-info">
              <h1>เสื้อกีฬาสี</h1>
              <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos ipsum expedita esse placeat quisquam, numquam impedit consequuntur accusamus quia aliquid, necessitatibus porro error non autem sunt dolor suscipit, eius sit.</h3>
              <div className="details">
                  <div>
                    <h4>ผ้าที่นิยมใช้:</h4>
                  </div>
                <div className="logo">
                  <div className="logo-con">
                    <img src={cloth.micro1} alt="" />
                    <p>ผ้าไมโคร</p>
                  </div>
                  <div className="logo-con">
                    <img src={cloth.micro2} alt="" />
                    <p>ผ้าเม็ดข้าวสาร</p>
                  </div>
                  <div className="logo-con">
                    <img src={cloth.micro3} alt="" />
                    <p>ผ้าเม็ดข้าวโพด</p>
                  </div>
                  <div className="logo-con">
                    <img src={cloth.micro4} alt="" />
                    <p>ผ้าดาวกระจาย</p>
                  </div>
                </div>
              </div>
            </div>

            
          </div>


        </div>

       

      </div>
      <Footer />
    </>
  );
}

export default Recommend;
