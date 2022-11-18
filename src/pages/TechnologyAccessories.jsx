import React, { useEffect, useState } from "react";
import { HeaderPage } from "../components/HeaderPage";
import "../styles/shop.css";
import { CardProduct } from "../components/CardProduct";
import { TopProducts } from "../components/TopProducts";
import { useIntalnetContext } from "../hooks/useIntalnetContext";

export const TechnologyAccessories = () => {
  const { productCardApi, topProduct } = useIntalnetContext();

  return (
    <>
      <HeaderPage message="Accesorios de Tecnologia" />
      <section className="ls s-py-80 s-py-lg-120 s-py-xl-160">
        <div className="container">
          <div className="row">
            <main className="col-lg-8 col-xl-9">
              <div className="columns-3">
                <ul className="products">
                  {productCardApi?.map((product) => (
                    <CardProduct key={product.id} product={product} />
                  ))}
                </ul>
              </div>
            </main>
            <aside className="col-lg-4 col-xl-3">
              <div className="widget widget_product_search">
                <h5 className="widget-title">Search</h5>

                <form
                  role="search"
                  className="woocommerce-product-search"
                  action="/"
                >
                  <label
                    className="screen-reader-text"
                    htmlFor="woocommerce-product-search-field-widget"
                  >
                    Search for:
                  </label>

                  <input
                    type="search"
                    id="woocommerce-product-search-field-widget"
                    className="search-field"
                    placeholder="Keyword"
                    name="search"
                  />
                  <input type="submit" value="Search" />
                </form>
              </div>

              <TopProducts topProduct={topProduct} />
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};
