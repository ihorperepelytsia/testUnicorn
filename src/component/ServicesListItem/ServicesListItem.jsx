import { BsCurrencyPound } from "react-icons/bs";
import icon1 from "../../imgs/icon1.png";
import icon2 from "../../imgs/icon2.png";
import icon3 from "../../imgs/icon3.png";
import icon4 from "../../imgs/icon4.png";

//       "text": "Bank Accounts with upto £55 Cash Back\nLimited Company Included\nIncorporation filing fee (worth £13)\nFastest Online Filing Submission\nDigital Incorporation Certificate\nDigital Articles of Association\nDigitial Share Certificates\nDigital Company Register\nFree Accountancy Consulation\nHMRC UTR Number",
//       "cashback": 55
export const ServicesListItem = ({
  logo,
  price,
  type,
  subtitle,
  text,
  cashback,
}) => {
  return (
    <>
      <div className="service">
        <div className="service-logo">
          {logo === "icon1" && <img src={icon1} alt="#" />}
          {logo === "icon2" && <img src={icon2} alt="#" />}
          {logo === "icon3" && <img src={icon3} alt="#" />}
          {logo === "icon4" && <img src={icon4} alt="#" />}
        </div>
        <div className="service-price">
          <div>
            <BsCurrencyPound />
          </div>
          <p>{price}</p>
        </div>
        <h5 className="service-type">{type}</h5>
        <p className="service-subtitle">{subtitle}</p>
        <p className="service-text">{text}</p>
        <div className="service-cashback">
          <div>
            <BsCurrencyPound />
          </div>
          <p>{cashback}</p>
        </div>
        <p className="service-cashback-text">Cash Back</p>
        <div className="service-container-btn">
          <button className="service-container-btn__btn">Get Satrted</button>
        </div>
      </div>
    </>
  );
};
