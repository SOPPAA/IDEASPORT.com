import { Link } from "react-router-dom";
import { formatPrice } from "../data/products";
import "../Compcss/Product.css";

// แสดงสินค้า 1 หมวด — ใช้ซ้ำได้ทั้งหน้า /Product และ /Product/:slug
function ProductSection({ category, showLink = false }) {
  return (
    <section className="product-section">
      <div className="liner">
        <h2>{category.title}</h2>
        <p>{category.description}</p>
      </div>

      <div className="product-content">
        {category.products.map((p) => (
          <article className="products-item" key={p.id}>
            <div className="products-img">
              <img src={p.image} alt={p.name} loading="lazy" />
            </div>
            <div className="products-name">{p.name}</div>
            <div className="products-price">
              <div className="pro-price">{formatPrice(category.price)}</div>
              <div className="pro-right">
                <span className={p.sold ? "badge sold" : "badge"}>
                  {p.sold ? "ขายแล้ว" : "พร้อมสั่งผลิต"}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>

      {showLink && (
        <div className="see-more">
          <Link to={`/Product/${category.slug}`}>ดูเฉพาะหมวดนี้ →</Link>
        </div>
      )}
    </section>
  );
}

export default ProductSection;
