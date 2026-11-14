import { NavLink, Link } from "react-router-dom";
import "../Compcss/Nav.css";

const menu = [
  { to: "/About", label: "About Us / เกี่ยวกับเรา" },
  { to: "/Product", label: "Product / สินค้า" },
  { to: "/Recommend", label: "สินค้าแนะนำ" },
  { to: "/Contact", label: "Contact / ติดต่อ" },
];

function Nav() {
  return (
    <nav>
      <div className="wrapper">
        <div className="container">
          <div className="nav_logo">
            <Link to="/">IDEA SPORT</Link>
          </div>
          <div className="nav_menu">
            <ul>
              {menu.map((m) => (
                <li key={m.to}>
                  <NavLink to={m.to}>{m.label}</NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
