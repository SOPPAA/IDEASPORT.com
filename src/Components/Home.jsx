import { Link } from "react-router-dom";
import Footer from "./Footer";
import shop from "../data/shop";
import { categories } from "../data/products";
import "../Compcss/Home.css";

// การ์ดเมนูหน้าแรก — รูปมาจากสินค้าตัวแรกของแต่ละหมวด
const cards = [
  {
    to: "/About",
    label: "ABOUT",
    title: "เกี่ยวกับเรา",
    desc: shop.tagline,
    image: "/images/banner.svg",
  },
  {
    to: "/Product",
    label: "PRODUCT",
    title: "สินค้าทั้งหมด",
    desc: `${categories.length} หมวด เริ่มต้น ${Math.min(...categories.map((c) => c.price))} บาท`,
    image: categories[0].products[0].image,
  },
  {
    to: "/Recommend",
    label: "RECOMMEND",
    title: "สินค้าแนะนำ",
    desc: "เนื้อผ้ายอดนิยมสำหรับเสื้อกีฬา",
    image: categories[2].products[0].image,
  },
  {
    to: "/Contact",
    label: "CONTACT",
    title: "ติดต่อสั่งผลิต",
    desc: "LINE · โทร · Facebook",
    image: categories[3].products[0].image,
  },
];

function Home() {
  return (
    <>
      <div className="wrapper">
        <div className="container1">
          <div className="header">
            <div className="conhead">
              <h1>WELCOME TO</h1>
            </div>
            <div className="conp">
              <p>
                {shop.name.toLowerCase()} {shop.city.toLowerCase()}
              </p>
            </div>
          </div>

          <div className="con-card">
            {cards.map((c) => (
              <div className="card-box" key={c.to}>
                <div className="card">
                  <div className="card-img">
                    <img src={c.image} alt={c.title} />
                  </div>
                  <div className="details">
                    <h1>{c.title}</h1>
                    <h2>{c.desc}</h2>
                  </div>
                </div>
                <div className="card-text">
                  <Link to={c.to}>
                    <h3>{c.label}</h3>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
