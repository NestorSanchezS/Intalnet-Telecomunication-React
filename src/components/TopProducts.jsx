import React from "react";
import { TopProductCard } from "./TopProductCard";

export const TopProducts = ({ topProduct }) => {
  const width_card2 = {
    width: "100%",
  };

  return (
    <div className="widget woocommerce widget_top_rated_products">
      <h5 className="widget-title">Top Products</h5>
      <ul className="product_list_widget">
        {topProduct.map((topCard) => (
          <TopProductCard key={topCard.id} topCard={topCard} />
        ))}
      </ul>
    </div>
  );
};
