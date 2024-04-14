import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
// import { HeartOutlined, HeartFilled, CommentOutlined } from "@ant-design/icons";
// import "./Post.css";

const Offer = () => {
  const { offers } = useSelector((state) => state.offers);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const reversedOffers = offers.slice().reverse();

  const offer = reversedOffers?.map((offer, index) => {
    // const checkTheUserId = () => {
    //   for (const obj of offers.likes) {
    //     if (obj.userId === user._id) {
    //       return true;
    //     }
    //   }
    //   return false;
    // };
    // console.log(post);
    // const isPostedByUser = offer.userId === user._id; 

    const formatDate = (dateString) => {
      const date = new Date(dateString);
      return date.toISOString().split("T")[0];
    };
    return (
      <div
        // key={offer._id}
        // className={`card ${isPostedByUser ? "user-post" : ""}`}
      >
        <h2 className="title">{offer.title}</h2>

        <div className="offer-info">
          <p>User ID:{offer.userId}</p>
          <p>Posted on: {formatDate(offer.createdAt)}</p>
        </div>
        <hr></hr>
        <p className="content ">{offer.content}</p>
        {/* <div className="offer-footer"> */}
          {/* <button className="likes" onClick={manageLikes}>
            <span>Likes: {post.likes?.length} </span>
            {isLiked ? <HeartFilled /> : <HeartOutlined />}
          </button> */}
          {/* <button className="comments">
            <Link to={`/post/${post._id}`}>
              <span>Comments: {post.commentsIds?.length} </span>
              <CommentOutlined />
            </Link>
          </button> */}
        {/* </div> */}
      </div>
    );
  });

  return offer;
};

export default Offer;