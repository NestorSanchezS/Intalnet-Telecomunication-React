import React from "react";
import img01 from "../assets/images/shop/13.jpg";
import { Link } from "react-router-dom";
export const CardProduct = ({ product }) => {
  const { id, name, description, price, images } = product;
  const width_card = {
    width: "80%",
  };
  let imgPath = img01;
  if (images.length > 1) {
    imgPath = `http://localhost:3300${images[0].path}`;
  }
  return (
    <li className="product vertical-item padding-small content-padding">
      <div className="product-inner hero-bg rounded">
        <a className="link-scale" href="shop-product-right.html">
          <span className="onsale small-text">Promoción!</span>
          <img src={imgPath} alt="" />
        </a>
        <div className="item-content">
          <h2>{name}</h2>
          <div className="star-rating">
            <span style={width_card}>
              Rated <strong className="rating">4.00</strong> out of 5
            </span>
          </div>
          <span className="price">
            <del>
              <span>
                <span>$</span>2500
              </span>
            </del>
            <span>$</span>
            {price}
          </span>
          <span
            rel="nofollow"
            href="shop-cart.html"
            className="btn btn-maincolor small-btn product_type_simple add_to_cart_button"
          >
            <span>
              <a href={`/infoproduct/${id}`}>Más información</a>
            </span>
          </span>
        </div>
      </div>
    </li>
  );
};
