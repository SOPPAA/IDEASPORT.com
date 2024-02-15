import React from "react";
import '../Compcss/Recommend.css'
import Nav from "./Nav";
import Footer from "./Footer";

function Recommend() {
  return (
    <>
      <Nav />
      <div className="container">

        <div className="con-head">
          <div className="head">
            <h1>Recommend</h1>
          </div>
        </div>
        
        <div className="content1">
          <div className="content-img">
            <img src="https://scontent.fhdy1-1.fna.fbcdn.net/v/t39.30808-6/420806248_357492430549502_3255374628980366745_n.jpg?stp=dst-jpg_s851x315&_nc_cat=101&ccb=1-7&_nc_sid=3d9721&_nc_eui2=AeHqRaibZWrrynQTohtPp42ZZ3aY9l-udE5ndpj2X650Th0JlySFMpHY0fL-Phl-0WHExSVYst55xF01xtf0CoHn&_nc_ohc=Gf1ddhTyPG8AX8SpKMw&_nc_ht=scontent.fhdy1-1.fna&oh=00_AfD-dPXvRYb5F5apUowDCjPFo0aZyzEfeiA8jXxC4Ry4TQ&oe=65D13480" alt="img" />
          </div>
          <div className="content-info">
            <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos ipsum expedita esse placeat quisquam, numquam impedit consequuntur accusamus quia aliquid, necessitatibus porro error non autem sunt dolor suscipit, eius sit.</h3>
          </div>
        </div>
        
        <div className="content1">
          <div className="content-img">
            <img src="https://scontent.fhdy4-1.fna.fbcdn.net/v/t39.30808-6/420763403_357498210548924_7944678513085268221_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=3635dc&_nc_ohc=lBMLiZS4OgwAX8tKjys&_nc_ht=scontent.fhdy4-1.fna&oh=00_AfB53slfnmdolvVuP_Z05X_Yf3s6Iix8AsMLm2Yubo_oYQ&oe=65D32339" alt="img" />
          </div>
          <div className="content-info">
            <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos ipsum expedita esse placeat quisquam, numquam impedit consequuntur accusamus quia aliquid, necessitatibus porro error non autem sunt dolor suscipit, eius sit.</h3>
          </div>
        </div>
        

       

      </div>
      <Footer />
    </>
  );
}

export default Recommend;
