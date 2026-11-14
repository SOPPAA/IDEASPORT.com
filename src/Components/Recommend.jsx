import Nav from "./Nav";
import Footer from "./Footer";
import { fabrics } from "../data/products";
import "../Compcss/Recommend.css";

function Recommend() {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="con-head">
          <div className="head">
            <h1>RECOMMEND / สินค้าแนะนำ</h1>
          </div>
        </div>

        <p className="rec-intro">เนื้อผ้ายอดนิยมที่ลูกค้าเลือกสั่งผลิตบ่อย</p>

        <div className="rec-grid">
          {fabrics.map((f) => (
            <article className="rec-item" key={f.id}>
              <img src={f.image} alt={f.name} loading="lazy" />
              <h3>{f.name}</h3>
              <p>{f.note}</p>
            </article>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Recommend;
