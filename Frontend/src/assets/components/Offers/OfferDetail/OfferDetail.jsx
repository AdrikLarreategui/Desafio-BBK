import { useParams } from "react-router-dom";
import { getById } from "../../../redux/auth/offerAuthSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./OfferDetail.css";
// import "./PostDetail.css";
const logoArray = [
  "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
  "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
  "https://upload.wikimedia.org/wikipedia/commons/c/ce/Coca-Cola_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/3/36/McDonald%27s_Golden_Arches.svg",
  "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
  "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/9/90/Mercedes-Logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg",
  "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/2/24/LEGO_logo.svg",
];

const randomLogo = (someArray) => {
  const randomIndex = Math.floor(Math.random() * someArray.length);
  return logoArray[randomIndex];
};
const OfferDetail = () => {
  const { id } = useParams();
  const { offer } = useSelector((state) => state.offers);
  console.log(id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getById(id));
  }, []);

  console.log(offer);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    if (isNaN(date)) {
      return "Invalid date";
    }
    return date.toISOString().split("T")[0];
  };

  return (
    <>
      <div key={offer._id} className="offerDetailCard">
        <div className="offerDetailHeader">
          <div className="offerDetailImageContainer">
            <img
              className="offerDetailCompanyLogo"
              src={randomLogo(logoArray)}
              alt="Company Logo"
            />
          </div>
          <hr style={{ color: "gray" }} className="offerDetailHr"></hr>
          <h2 className="offerTitle">{offer.title}</h2>
          <hr style={{ color: "gray" }} className="offerDetailHr"></hr>
        </div>

        <div className="offer-info" style={{ marginBottom: "15px" }}>
          <span>{offer.companyName}</span>
          <p>Posted on: {formatDate(offer.createdAt)}</p>
          <span style={{ color: "gray" }}>{offer.contractKind} | </span>
          <span style={{ color: "gray" }}>{offer.workingDayType} | </span>
          <span style={{ color: "gray" }}>
            {offer.salaryRange} <span>€ Bruto/año</span>
          </span>
        </div>
        <hr></hr>
        <h4>Sobre la oportunidad</h4>
        <p className="content">{offer.content}</p>
        <div className="offer-footer"></div>
      </div>
    </>
  );
};

export default OfferDetail;
