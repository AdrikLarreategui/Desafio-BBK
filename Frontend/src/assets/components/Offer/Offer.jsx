import React from "react";
import { useSelector, useDispatch } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Offer.css";

import { Link } from "react-router-dom";
// import { HeartOutlined, HeartFilled, CommentOutlined } from "@ant-design/icons";
// import "./Post.css";

const Offer = () => {
  const { offers } = useSelector((state) => state.offers);

  const { user: userTalent } = useSelector((state) => state.talentAuth);
  const { user: userCompany } = useSelector((state) => state.companyAuth);

  const dispatch = useDispatch();

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
        {/* <div key={offer._id} className="offerCard">
          <div className="logoContainer">
            <img
              src={offer.companyLogo}
              alt="Company Logo"
              style={{ width: "100%" }}
            />
          </div>
          <div className="offerDetails">
            <h2>{offer.title}</h2>
            <p>
              <Link to="#">{offer.companyName}</Link>
            </p>
            <div className="offerDetailsSection">
              <p>
                {offer.location} | {offer.workingMode} |
                {formatDate(offer.createdAt)}
              </p>
            </div>
            <div>
              <p>
                {offer.content.length > 250
                  ? `${offer.content.substring(0, 250)}...`
                  : offer.content}{" "}
                <span>
                  <Link to="#">leer más</Link>
                </span>
              </p>
            </div>
            <div className="offerDetailsSection">
              <p>
                {offer.contractKind} | {offer.workingDayType} |{" "}
                {offer.salaryRange} <span>€ Bruto/año</span>
              </p>
            </div>
          </div>
        </div> */}

        <div class="jobListingCard">
          <div class="jobListingHeader">
            <img
              class="cardCompanyLogo"
              src={offer.companyLogo}
              alt="Company Logo"
              // style={{ width: "100%" }}
            />
            <div class="cardJobTitle">{offer.title}</div>

            <div class="cardCompanyName">
              <span style={{ marginLeft: "10px" }}>OFFER COMPANY BRUH</span>
            </div>
            <div class="locationTimeContainer">
              <span class="jobLocation">{offer.location}</span>
              <span class="postingTime">{formatDate(offer.createdAt)}</span>
              {/* <span class="badgeNew">Nueva</span> */}
            </div>
          </div>
          <div class="jobListingContent">
            <p>
              {offer.content.length > 250
                ? `${offer.content.substring(0, 250)}...`
                : offer.content}
              <span>
                <Link to="#">leer más</Link>
              </span>
            </p>
          </div>
          <div class="jobListingFooter">
            <span class="employmentType">{offer.contractKind}</span>
            <span class="jobWorkload">{offer.workingDayType}</span>
            <span class="salaryRange">
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
