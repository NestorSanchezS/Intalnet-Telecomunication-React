import React from "react";
import img01 from "../assets/images/shop/01.jpg";

export const TopProductCard = ({ topCard }) => {
  const { name, images, price, previous_price } = topCard;
  console.log(images);
  const width_card2 = {
    width: "100%",
  };
  let imgPath = img01;
  if (images.length > 1) {
    imgPath = `http://localhost:3300${images[0].path}`;
  }
  return (
    <li>
      <a>
        <img src={imgPath} alt="" />
        <span className="product-title">{name}</span>
      </a>
      <div className="star-rating">
        <span style={width_card2}>
          Rated
          <strong className="rating">5.00 </strong>
          out of 5
        </span>
      </div>
      <span className="woocommerce-Price-amount amount">
        {previous_price > 0 && (
          <del>
            <span>
              <span>$</span>
              {previous_price}
            </span>
          </del>
        )}
        <span className="woocommerce-Price-currencySymbol">$</span>
        {price}
      </span>
    </li>
  );
};
