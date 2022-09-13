import React from "react";
import img01 from "../assets/images/shop/01.jpg";
import { Link } from "react-router-dom";
export const CardProduct = () => {
  const width_card = {
    width: "80%",
  };
  return (
    <li className="product vertical-item padding-small content-padding">
      <div className="product-inner hero-bg rounded">
        <a className="link-scale" href="shop-product-right.html">
          <span className="onsale small-text">Promoción!</span>
          <img src={img01} alt="" />
        </a>
        <div className="item-content">
          <h2>ZXHN F660 V8.0</h2>
          <div className="star-rating">
            <span style={width_card}>
              Rated <strong className="rating">4.00</strong> out of 5
            </span>
          </div>
          <span className="price">
            <del>
              <span>
                <span>$</span>250.00
              </span>
            </del>
            <span>$</span>200.00
          </span>
          <span
            rel="nofollow"
            href="shop-cart.html"
            className="btn btn-maincolor small-btn product_type_simple add_to_cart_button"
          >
            <span>
              <a>Más información</a>
            </span>
          </span>
        </div>
      </div>
    </li>
  );
};
