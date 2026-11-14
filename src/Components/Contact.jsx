import Nav from "./Nav";
import Footer from "./Footer";
import shop from "../data/shop";
import "../Compcss/Contact.css";

function Contact() {
  const rows = [
    { label: "โทร", value: shop.phone, href: `tel:${shop.phone.replace(/[^\d+]/g, "")}` },
    { label: "LINE", value: shop.lineId, href: shop.lineUrl },
    { label: "Facebook", value: "เพจร้าน", href: shop.facebookUrl },
    { label: "ที่อยู่", value: shop.address },
    { label: "เวลาทำการ", value: shop.hours },
  ];

  return (
    <>
      <Nav />
      <div className="container">
        <div className="con-head">
          <div className="head">
            <h1>CONTACT / ติดต่อ</h1>
          </div>
        </div>

        <div className="contact-card">
          <h2>
            {shop.name} {shop.city}
          </h2>
          <p className="contact-sub">สอบถามราคา สั่งผลิต หรือขอดูตัวอย่างผ้า ทักมาได้เลย</p>

          <dl className="contact-list">
            {rows.map((r) => (
              <div className="contact-row" key={r.label}>
                <dt>{r.label}</dt>
                <dd>
                  {r.href ? (
                    <a href={r.href} target="_blank" rel="noreferrer">
                      {r.value}
                    </a>
                  ) : (
                    r.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
