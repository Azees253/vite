import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { BsTwitter } from "react-icons/bs";
import { FaMagnifyingGlass } from "react-icons/fa6";
import "./pagesStyles/Collection.css";
import black from "../assets/images/black.jpg";
import white from "../assets/images/white.jpg";
import cottan from "../assets/images/cottan.jpg";
import jeans from "../assets/images/jeans.jpg";
import Tshirt from "../assets/images/T-shirt.jpg";
import placer from "../assets/images/placer.jpg";

export default function Collection() {
  function handleClick(e) {
    const list = document.querySelectorAll("#product > div");
    const searchVal = e.target.value.toUpperCase();
    list.forEach((el) => {
      el.style.display = el
        .querySelector("p")
        .textContent.toUpperCase()
        .includes(searchVal)
        ? "block"
        : "none";
    });
  }
  return (
    <>
      {/* product */}
      <div className="product-section">
        <form className="product-search">
          <input
            type="text"
            id="search"
            placeholder="Search"
            onKeyUp={handleClick}
          ></input>
          <i>
            <FaMagnifyingGlass />
          </i>
        </form>
        <div className="product" id="product">
          <div className="product-box">
            <img style={{ width: "200px", height: "200px" }} src={white}></img>
            <p>White shirt</p>
          </div>
          <div className="product-box">
            <img style={{ width: "200px", height: "200px" }} src={black}></img>
            <p>Black shirt</p>
          </div>
          <div className="product-box">
            <img style={{ width: "200px", height: "200px" }} src={Tshirt}></img>
            <p>T -shirt</p>
          </div>
          <div className="product-box">
            <img style={{ width: "200px", height: "200px" }} src={jeans}></img>
            <p>Jeans</p>
          </div>
          <div className="product-box">
            <img style={{ width: "200px", height: "200px" }} src={cottan}></img>
            <p>Cotten-shirt</p>
          </div>
          <div className="product-box">
            <img style={{ width: "200px", height: "200px" }} src={placer}></img>
            <p>Placer</p>
          </div>
        </div>
      </div>
      {/* Footer */}
      <div className="footer">
        <div className="footer-container">
          <div className="footer-box-1">
            <h2 className="heading-text"> FLYWALK</h2>
            <p>Lorem Ipsum is simply dummy text of the printing</p>
            <div className="footer-icon-container">
              <i style={{ color: "#ffffff" }}>
                <FaInstagram />
              </i>
              <i style={{ color: "#ffffff" }}>
                <CiFacebook />
              </i>
              <i style={{ color: "#ffffff" }}>
                <BsTwitter />
              </i>
            </div>
          </div>
        </div>

        <p>@2025 FLYWALK</p>
      </div>
    </>
  );
}
