import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Offer.css";

import { Link } from "react-router-dom";

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

const Offer = () => {
  const { offers } = useSelector((state) => state.offers);

  const reversedOffers = offers.slice().reverse();

  const offer = reversedOffers?.map((offer, index) => {
    const formatDate = (dateString) => {
      if (!dateString) {
        return "no info";
      }
      const date = new Date(dateString);
      return date.toISOString().split("T")[0];
    };

    return (
      <>
        <div key={offer._id} className="jobListingCard">
          <div className="jobListingHeader">
            <div className="cardImageContainer">
              <img
                className="cardCompanyLogo"
                src={randomLogo(logoArray)}
                alt="Company Logo"
              />
            </div>

            <div className="titleAndCompanyName">
              <div className="cardJobTitle">{offer.title}</div>

              <div className="cardCompanyName">
                <span style={{ marginLeft: "10px" }}>
                  {offer.companyName ? offer.companyName : "BEST COMPANY BRUH"}
                </span>
              </div>
            </div>

            <div className="locationTimeContainer">
              <div className="jobLocation">{offer.location}</div>

              <div className="postingTime">{formatDate(offer.createdAt)}</div>
            </div>
          </div>

          <div className="jobListingContent">
            <p>
              {offer.content.length > 250 ? (
                `${offer.content.substring(0, 250)}...`
              ) : (
                <div>
                  offer.content
                  <br />
                </div>
              )}
              <span>
                <Link to={`/offer/${offer._id}`}>leer más</Link>
              </span>
            </p>
          </div>
          <div className="jobListingFooter">
            <span className="employmentType">{offer.contractKind}</span>
            <span className="jobWorkload">{offer.workingDayType}</span>
            <span className="salaryRange">
              {offer.salaryRange} <span>€ Bruto/año</span>
            </span>
          </div>
        </div>
      </>
    );
  });

  return offer;
};

export default Offer;
