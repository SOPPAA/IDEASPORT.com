import shop from "../data/shop";
import "../Compcss/Footer.css";

function Footer() {
  return (
    <footer>
      <div>
        <p>
          © {new Date().getFullYear()} {shop.name} {shop.city}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
