import React from "react";
import "../Compcss/Nav.css";
import { Link } from "react-router-dom";

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
              <li>
                <Link to="/">Home/หน้าแรก</Link>
              </li>
              <li>
                <Link to="/About">AboutUs/เกี่ยวกับเรา</Link>
              </li>
              <li>
                <Link to="/Product">Produc/สินค้า</Link>
              </li>
              <li>
                <Link to="/Contact">Contact/ติดต่อ</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
