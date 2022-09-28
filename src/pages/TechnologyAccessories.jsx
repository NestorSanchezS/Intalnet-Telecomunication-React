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

              {/* <div className="widget woocommerce widget_shopping_cart">
                <h5 className="widget-title">Shopping Cart</h5>

                <div className="widget_shopping_cart_content">
                  <ul className="woocommerce-mini-cart cart_list product_list_widget">
                    <li className="woocommerce-mini-cart-item mini_cart_item">
                      <a href="shop-product-right.html">
                        <img src={img11} alt="" />
                      </a>
                      <a className="cart-title" href="shop-product-right.html">
                        IS Router 002
                      </a>
                      <a
                        href="#"
                        className="remove"
                        aria-label="Remove this item"
                        data-product_id="73"
                        data-product_sku=""
                      >
                        ×
                      </a>
                      <span className="quantity small-text">
                        1 x
                        <span className="woocommerce-Price-amount amount">
                          <span className="woocommerce-Price-currencySymbol">
                            $
                          </span>
                          20.00
                        </span>
                      </span>
                    </li>
                    <li className="woocommerce-mini-cart-item mini_cart_item">
                      <a href="shop-product-right.html">
                        <img src={img12} alt="" />
                      </a>
                      <a className="cart-title" href="shop-product-right.html">
                        Remote Cntrl
                      </a>
                      <a
                        href="#"
                        className="remove"
                        aria-label="Remove this item"
                        data-product_id="73"
                        data-product_sku=""
                      >
                        ×
                      </a>
                      <span className="quantity small-text">
                        2 x
                        <span className="woocommerce-Price-amount amount">
                          <span className="woocommerce-Price-currencySymbol">
                            $
                          </span>
                          30.00
                        </span>
                      </span>
                    </li>
                  </ul>

                  <p className="woocommerce-mini-cart__total total">
                    <strong>Subtotal:</strong>
                    <span className="woocommerce-Price-amount amount">
                      <span className="woocommerce-Price-currencySymbol">
                        $
                      </span>
                      80.00
                    </span>
                  </p>

                  <p className="woocommerce-mini-cart__buttons buttons">
                    <a
                      href="shop-cart.html"
                      className="btn btn-maincolor wc-forward"
                    >
                      <span>View cart</span>
                    </a>
                    <a
                      href="shop-checkout.html"
                      className="btn btn-outline-maincolor checkout wc-forward"
                    >
                      <span>Checkout</span>
                    </a>
                  </p>
                </div>
              </div> */}
              <TopProducts topProduct={topProduct} />
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};
