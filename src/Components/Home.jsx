import React from "react";
import "../Compcss/Home.css";
import Nav from "./Nav";
import Footer from "./Footer";
import { Link } from "react-router-dom";


function Home() {
  return (
    <>
      {/* <Nav /> */}
      <div className="wrapper">
        <div className="container1">
          {/* HEADER */}
          <div className="header">
            <div className="conhead">
              <h1>WELCOME TO </h1>
            </div>
            <div className="conp">
              <p>idea sport pattani</p>
            </div>
          </div>

          {/* CARD */}

          <div className="con-card">
            {/* card1 */}
            <div className="card-box">
              <div className="card">
                <div className="card-img">
                  <img
                    src="https://scontent.fhdy1-1.fna.fbcdn.net/v/t39.30808-6/420791929_357490180549727_8378940300820375909_n.jpg?stp=dst-jpg_s851x315&_nc_cat=107&ccb=1-7&_nc_sid=3d9721&_nc_eui2=AeEQIlPwPNW_p4bozrzXM-Q6Qfn4xw3Wp4JB-fjHDdangk9dKrKIhYmUtIENgo--chnlex6mxve-QUNn9rmzNEti&_nc_ohc=R712jtzoeNYAX9kV7Cb&_nc_ht=scontent.fhdy1-1.fna&oh=00_AfCed-8rGznOm7NpsZulqp2VaSnhl1HXo9uaCgEI37Hhyg&oe=65D0C8AF"
                    alt="Location Unknown"
                  />
                </div>
                <div class="details">
                  <h1>เสื้อคอกลม</h1>
                  <h2>2021 • PG • 1hr 38min</h2>

                  <div class="tags">
                    <span class="tag">Italian</span>
                    <span class="tag">Drama</span>
                    <span class="tag">Indie</span>
                  </div>
                  <p class="desc">
                    Marco, a disillusioned backpacker in his late 20s, embarks
                    on a solitary journey in search for meaning.
                  </p>
                </div>
              </div>
              <div className="card-text">
                <Link to="/">
                  <h3>HOME</h3>
                </Link>
              </div>
            </div> {/* div card box */}
            
            {/* card2 */}
            <div className="card-box">

            <div className="card">
              <div className="card-img">
                <img
                  src="https://scontent.fhdy1-1.fna.fbcdn.net/v/t39.30808-6/420791929_357490180549727_8378940300820375909_n.jpg?stp=dst-jpg_s851x315&_nc_cat=107&ccb=1-7&_nc_sid=3d9721&_nc_eui2=AeEQIlPwPNW_p4bozrzXM-Q6Qfn4xw3Wp4JB-fjHDdangk9dKrKIhYmUtIENgo--chnlex6mxve-QUNn9rmzNEti&_nc_ohc=R712jtzoeNYAX9kV7Cb&_nc_ht=scontent.fhdy1-1.fna&oh=00_AfCed-8rGznOm7NpsZulqp2VaSnhl1HXo9uaCgEI37Hhyg&oe=65D0C8AF"
                  alt="Location Unknown"
                />
              </div>
              <div class="details">
                <h1>เสื้อคอกลม</h1>
                <h2>2021 • PG • 1hr 38min</h2>

                <div class="tags">
                  <span class="tag">Italian</span>
                  <span class="tag">Drama</span>
                  <span class="tag">Indie</span>
                </div>
                <p class="desc">
                  Marco, a disillusioned backpacker in his late 20s, embarks on
                  a solitary journey in search for meaning.
                </p>
              </div>
            </div>
            <div className="card-text">
                <Link to="/About">
                  <h3>ABOUT</h3>
                </Link>
              </div>
            </div> {/* div card box */}
            {/* card3 */}
            <div className="card-box">

            <div className="card">
              <div className="card-img">
                <img
                  src="https://scontent.fhdy1-1.fna.fbcdn.net/v/t39.30808-6/420791929_357490180549727_8378940300820375909_n.jpg?stp=dst-jpg_s851x315&_nc_cat=107&ccb=1-7&_nc_sid=3d9721&_nc_eui2=AeEQIlPwPNW_p4bozrzXM-Q6Qfn4xw3Wp4JB-fjHDdangk9dKrKIhYmUtIENgo--chnlex6mxve-QUNn9rmzNEti&_nc_ohc=R712jtzoeNYAX9kV7Cb&_nc_ht=scontent.fhdy1-1.fna&oh=00_AfCed-8rGznOm7NpsZulqp2VaSnhl1HXo9uaCgEI37Hhyg&oe=65D0C8AF"
                  alt="Location Unknown"
                />
              </div>
              <div class="details">
                <h1>เสื้อคอกลม</h1>
                <h2>2021 • PG • 1hr 38min</h2>

                <div class="tags">
                  <span class="tag">Italian</span>
                  <span class="tag">Drama</span>
                  <span class="tag">Indie</span>
                </div>
                <p class="desc">
                  Marco, a disillusioned backpacker in his late 20s, embarks on
                  a solitary journey in search for meaning.
                </p>
              </div>
            </div>
            <div className="card-text">
                <Link to="/Product">
                  <h3>Product</h3>
                </Link>
              </div>
            </div> {/* div card box */}

            {/* card4 */}
            <div className="card-box">
            <div className="card">
              <div className="card-img">
                <img
                  src="https://scontent.fhdy1-1.fna.fbcdn.net/v/t39.30808-6/420791929_357490180549727_8378940300820375909_n.jpg?stp=dst-jpg_s851x315&_nc_cat=107&ccb=1-7&_nc_sid=3d9721&_nc_eui2=AeEQIlPwPNW_p4bozrzXM-Q6Qfn4xw3Wp4JB-fjHDdangk9dKrKIhYmUtIENgo--chnlex6mxve-QUNn9rmzNEti&_nc_ohc=R712jtzoeNYAX9kV7Cb&_nc_ht=scontent.fhdy1-1.fna&oh=00_AfCed-8rGznOm7NpsZulqp2VaSnhl1HXo9uaCgEI37Hhyg&oe=65D0C8AF"
                  alt="Location Unknown"
                />
              </div>
              <div class="details">
                <h1>เสื้อคอกลม</h1>
                <h2>2021 • PG • 1hr 38min</h2>

                <div class="tags">
                  <span class="tag">Italian</span>
                  <span class="tag">Drama</span>
                  <span class="tag">Indie</span>
                </div>
                <p class="desc">
                  Marco, a disillusioned backpacker in his late 20s, embarks on
                  a solitary journey in search for meaning.
                </p>
              </div>
            </div>
            <div className="card-text">
                <Link to="/Contact">
                  <h3>CONTACT</h3>
                </Link>
              </div>
            </div> {/* div card box */}

          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default Home;
