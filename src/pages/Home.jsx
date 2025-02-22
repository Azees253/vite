import { BsEmojiSmile } from "react-icons/bs";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { BsTwitter } from "react-icons/bs";
import "./pagesStyles/Home.css";
import headerImg from "../assets/images/img1.jpg";
import img1 from "../assets/images/img2.jpg";
import img2 from "../assets/images/img3.jpg";
import img3 from "../assets/images/img4.jpg";
import img4 from "../assets/images/img5.jpg";
import want1 from "../assets/images/w1.jpg";
import want2 from "../assets/images/w2.jpg";
import want3 from "../assets/images/w3.jpg";
import want4 from "../assets/images/w4.jpg";

export default function Home() {
  return (
    <>
      <div className="header">
        <div>
          <h1>Level up Your styles</h1>
          <p>With our stunning Collection</p>
          <button>Shop</button>
        </div>
        <div>
          <img className="header-img" src={headerImg} />
        </div>
      </div>

      {/* service */}

      <div className="service">
        <div className="service-container-1">
          <div>
            <h2>We Provide Best</h2>
            <h2>Customer Experience</h2>
          </div>
          <div>
            <p>
              {" "}
              || we ensure that one Customer have the best shopping experience
            </p>
          </div>
        </div>
        <div className="service-container-2">
          <div>
            <i>
              <BsEmojiSmile />
            </i>
            <h4>Satisfaction Guarantee</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard
            </p>
          </div>

          <div>
            <i>
              <BsEmojiSmile />
            </i>
            <h4>New Arrivel</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard
            </p>
          </div>

          <div>
            <i>
              <BsEmojiSmile />
            </i>
            <h4>Fast and free shop</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard{" "}
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2 style={{ padding: "20px" }}>New Arrivel</h2>
      </div>

      <div className="new-arrivel">
        <div className="new-arrivel-container">
          <img className="new-arrivel-img" src={img1} />
          <button>
            Shop Now{" "}
            <i>
              <FaLongArrowAltRight />
            </i>
          </button>
        </div>
        <div className="new-arrivel-container">
          <img className="new-arrivel-img" src={img2} />
          <button>
            Shop Now{" "}
            <i>
              <FaLongArrowAltRight />
            </i>
          </button>
        </div>
        <div className="new-arrivel-container">
          <img className="new-arrivel-img" src={img3} />
          <button>
            Shop Now{" "}
            <i>
              <FaLongArrowAltRight />
            </i>
          </button>
        </div>
        <div className="new-arrivel-container">
          <img className="new-arrivel-img" src={img4} />
          <button>
            Shop Now{" "}
            <i>
              <FaLongArrowAltRight />
            </i>
          </button>
        </div>
      </div>
      <div>
        <h2 style={{ padding: "20px" }}>Most wanted</h2>
      </div>

      <div className="new-arrivel">
        <div className="new-arrivel-container">
          <img className="new-arrivel-img" src={want4} />
          <button>
            Shop Now{" "}
            <i>
              <FaLongArrowAltRight />
            </i>
          </button>
        </div>
        <div className="new-arrivel-container">
          <img className="new-arrivel-img" src={want1} />
          <button>
            Shop Now{" "}
            <i>
              <FaLongArrowAltRight />
            </i>
          </button>
        </div>
        <div className="new-arrivel-container">
          <img className="new-arrivel-img" src={want2} />
          <button>
            Shop Now{" "}
            <i>
              <FaLongArrowAltRight />
            </i>
          </button>
        </div>
        <div className="new-arrivel-container">
          <img className="new-arrivel-img" src={want3} />
          <button>
            Shop Now{" "}
            <i>
              <FaLongArrowAltRight />
            </i>
          </button>
        </div>
      </div>

      {/* News */}
      <div className="news">
        <h2>Join our News Letter</h2>
        <p>
          Signup for our email newsletter to get exclusive discount and updates
        </p>
        <div>
          <input type="text" className="search"></input>
        </div>
        <div>
          <button>
            Subscribe{" "}
            <i>
              <FaLongArrowAltRight />
            </i>
          </button>
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
