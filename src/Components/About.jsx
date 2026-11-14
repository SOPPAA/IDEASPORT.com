import Nav from "./Nav";
import Footer from "./Footer";
import shop from "../data/shop";
import "../Compcss/About.css";

function About() {
  return (
    <>
      <Nav />

      <div className="container">
        <div className="con_about">
          <div className="con_content">
            <h1>
              {shop.name} {shop.city}
            </h1>
            <h3>{shop.tagline}</h3>
            <p>{shop.description}</p>
          </div>
          <div className="con_logo" role="img" aria-label="โลโก้ร้าน"></div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default About;
