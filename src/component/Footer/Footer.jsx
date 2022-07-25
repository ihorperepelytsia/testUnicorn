import { FaWhatsapp } from "react-icons/fa";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillYoutube,
} from "react-icons/ai";
import { BiBasketball } from "react-icons/bi";
import { IconContext } from "react-icons";

export const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-logo">
          <a href="!#">Logo</a>
        </div>

        <div className="footer-useful-links">
          <h5>Useful links</h5>
          <ul>
            <li>
              <a href="!#">Cookie Policy</a>
            </li>
            <li>
              <a href="!#">Terms & Conditions</a>
            </li>
            <li>
              <a href="!#">Privacy Policy</a>
            </li>
            <li>
              <a href="!#">Complaints Policy</a>
            </li>
            <li>
              <a href="!#">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="footer-contact-us">
          <h5>Contact Us</h5>
          <ul>
            <li>Turner Little Limited</li>
            <li>Registered in England No. 3490752</li>
            <li>Vat No. 764466206</li>
          </ul>

          <div>
            <ul>
              <li>Registered Office:</li>
              <li>Fanshawe House</li>
              <li>Pioneer Business Park</li>
              <li>Amy Johnson Way</li>
              <li>York</li>
              <li>YO30 4TN</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Or message us on</li>
              <li>
                <a href="!#">
                  <FaWhatsapp /> WhatsApp
                </a>
              </li>
              <li>Licensed by the Financial Conduct</li>
              <li>Authority No. 734784</li>
            </ul>
          </div>
        </div>
        <div className="footer-social-network">
          <IconContext.Provider
            value={{ color: "#fff", className: "global-class-name" }}
          >
            <div>
              <a href="!#">
                <AiOutlineInstagram />
              </a>
            </div>
          </IconContext.Provider>
          <IconContext.Provider
            value={{ color: "#fff", className: "global-class-name" }}
          >
            <div>
              <a href="!#">
                <BiBasketball />
              </a>
            </div>
          </IconContext.Provider>
          <IconContext.Provider
            value={{ color: "#fff", className: "global-class-name" }}
          >
            <div>
              <a href="!#">
                <AiOutlineTwitter />
              </a>
            </div>
          </IconContext.Provider>
          <IconContext.Provider
            value={{ color: "#fff", className: "global-class-name" }}
          >
            <div>
              <a href="!#">
                <AiFillYoutube />
              </a>
            </div>
          </IconContext.Provider>
        </div>
      </div>
    </>
  );
};
