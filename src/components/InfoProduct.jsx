import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { HeaderPage } from "./HeaderPage.jsx";
import img01 from "../assets/images/shop/03.jpg";
import img02 from "../assets/images/shop/13.jpg";
import img03 from "../assets/images/shop/14.jpg";
import img04 from "../assets/images/shop/15.jpg";

export const InfoProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    try {
      const getProduct = async () => {
        const url = `http://localhost:3300/api/v1/products/${id}`;
        const response = await fetch(url);
        const data = await response.json();
        setProduct(data);
      };
      getProduct();
    } catch (error) {
      console.log(error);
    }
  }, [id]);
  const width_card = {
    width: "72.6%",
  };
  const { name, description, price, images } = product;

  return (
    <>
      <HeaderPage message="Accesorios de Tecnologia" />
      <section className="ls s-py-80 s-py-lg-120 s-py-xl-160 c-gutter-60">
        <div className="container">
          <div className="row">
            <main className="col-lg-7 col-xl-8">
              <div className="product">
                <div className="images" data-columns="4">
                  <figure>
                    <div data-thumb={img01}>
                      <a href={img01}>
                        <img
                          src={img01}
                          alt="Imagen de dispositivo"
                          data-caption=""
                          data-src={img01}
                          data-large_image={img01}
                          data-large_image_width="1000"
                          data-large_image_height="1000"
                        />
                      </a>
                    </div>
                    <div data-thumb={img02}>
                      <a href={img02}>
                        <img
                          src={img02}
                          alt="Imagen de dispositivo"
                          data-caption=""
                          data-src={img02}
                          data-large_image={img02}
                          data-large_image_width="1000"
                          data-large_image_height="1000"
                        />
                      </a>
                    </div>
                    <div data-thumb={img03}>
                      <a href={img03}>
                        <img
                          src={img03}
                          alt="Imagen de dispositivo"
                          data-caption=""
                          data-src={img03}
                          data-large_image={img03}
                          data-large_image_width="1000"
                          data-large_image_height="1000"
                        />
                      </a>
                    </div>
                    <div data-thumb={img04}>
                      <a href={img04}>
                        <img
                          src={img04}
                          alt="Imagen de dispositivo"
                          data-caption=""
                          data-src={img04}
                          data-large_image={img04}
                          data-large_image_width="1000"
                          data-large_image_height="1000"
                        />
                      </a>
                    </div>
                  </figure>
                </div>
                <div className="summary entry-summary">
                  <h1 className="product_title entry-title">{name}</h1>
                  <div className="woocommerce-product-rating">
                    <div className="star-rating">
                      <span style={width_card}>
                        Rated <strong className="rating">4.33</strong> out of 5
                        based on <span className="rating">3</span> customer
                        ratings
                      </span>
                    </div>
                    <a
                      href="#reviews"
                      className="woocommerce-review-link"
                      rel="nofollow"
                    >
                      (<span className="count">3</span> customer reviews)
                    </a>
                  </div>

                  <p className="price">
                    <span>
                      <span>$</span>
                      {price}
                    </span>
                  </p>
                  <div>
                    <p>{description}</p>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>
    </>
  );
};
