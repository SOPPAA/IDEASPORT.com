import { Link, useParams } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import ProductSection from "./ProductSection";
import { categories, getCategory } from "../data/products";
import "../Compcss/Product.css";

// /Product          -> ทุกหมวด
// /Product/:slug    -> เฉพาะหมวดนั้น
function Product() {
  const { slug } = useParams();
  const current = slug ? getCategory(slug) : null;
  const shown = current ? [current] : categories;

  return (
    <>
      <Nav />

      <div className="container">
        <div className="con-head">
          <div className="head">
            <h1>{current ? current.title : "PRODUCT / สินค้า"}</h1>
          </div>
        </div>

        <ul className="head-liner">
          <li>
            <Link to="/Product">ทั้งหมด</Link>
          </li>
          {categories.map((c) => (
            <li key={c.slug}>
              <Link to={`/Product/${c.slug}`}>{c.title}</Link>
            </li>
          ))}
        </ul>

        {slug && !current && (
          <p className="not-found">
            ไม่พบหมวดสินค้านี้ <Link to="/Product">กลับไปดูสินค้าทั้งหมด</Link>
          </p>
        )}

        {(!slug || current) &&
          shown.map((c) => (
            <ProductSection key={c.slug} category={c} showLink={!current} />
          ))}
      </div>

      <Footer />
    </>
  );
}

export default Product;
