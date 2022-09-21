import React from "react";
import img01 from "../assets/images/shop/01.jpg";

export const TopProducts = () => {
  const width_card2 = {
    width: "100%",
  };

  return (
    <div className="widget woocommerce widget_top_rated_products">
      <h5 className="widget-title">Top Products</h5>
      <ul className="product_list_widget">
        <li>
          <a href="shop-product-right.html">
            <img src={img01} alt="" />
            <span className="product-title">IPTV Remote</span>
          </a>
          <div className="star-rating">
            <span style={width_card2}>
              Rated
              <strong className="rating">5.00 </strong>
              out of 5
            </span>
          </div>
          <span className="woocommerce-Price-amount amount">
            <del>
              <span>
                <span>$</span>25.00
              </span>
            </del>
            <span className="woocommerce-Price-currencySymbol">$</span>
            20.00
          </span>
        </li>

        <li>
          <a href="shop-product-right.html">
            <img src={img01} alt="" />
            <span className="product-title">Woo Album #4</span>
          </a>
          <div className="star-rating">
            <span style={width_card2}>
              Rated
              <strong className="rating">5.00</strong>
              out of 5
            </span>
          </div>
          <span className="woocommerce-Price-amount amount">
            <span className="woocommerce-Price-currencySymbol">$</span>
            9.00
          </span>
        </li>

        <li>
          <a href="shop-product-right.html">
            <img src={img01} alt="" />
            <span className="product-title">Happy Ninja</span>
          </a>
          <div className="star-rating">
            <span style={width_card2}>
              Rated
              <strong className="rating">5.00</strong>
              out of 5
            </span>
          </div>
          <span className="woocommerce-Price-amount amount">
            <span className="woocommerce-Price-currencySymbol">$</span>
            18.00
          </span>
        </li>
      </ul>
    </div>
  );
};
