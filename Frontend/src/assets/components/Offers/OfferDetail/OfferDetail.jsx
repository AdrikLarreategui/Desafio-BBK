import { useParams } from "react-router-dom";
import { getById } from "../../../redux/auth/offerAuthSlice";
import { getById } from '../../../redux/auth/companyAuthSlice'
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


const OfferDetail = () => {
  const { id } = useParams();
  const { offer } = useSelector((state) => state.offers);
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getById(id));
  }, []);

//   const checkTheUserId = () => {
//     return (
//       post.likes?.some(
//         (likeObj) => likeObj.userId === user._id && likeObj.like
//       ) ?? false
//     );
//   };
  console.log(offer);
//   const isLiked = checkTheUserId();

//   const manageLikes = () => {
//     if (!isLiked) {
//       dispatch(like(post._id));
//     } else {
//       dispatch(unlike(post._id));
//     }
//   };
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    if (isNaN(date)) {
      return "Invalid date";
    }
    return date.toISOString().split("T")[0];
  };

  return (
    <>
      <div className="offer-detail">
        <h2>Offer Detail</h2>
        <div key={offer._id} className={`card `}>
          <h2 className="title">{offer.title}</h2>

          <div className="offer-info">
            {/* <p>User ID:{offer.userId}</p> */}
            <p>Posted on: {formatDate(offer.createdAt)}</p>
          </div>
          <hr></hr>
          <p className="content">{offer.content}</p>
          <div className="offer-footer">
            {/* <button className="likes" onClick={manageLikes}>
              <span>Likes: {offer.likes?.length} </span>
              {isLiked ? <HeartFilled /> : <HeartOutlined />}
            </button> */}
          </div>
        </div>
      </div>
      <div>
        <Comments />
      </div>
    </>
  );
};

export default OfferDetail;