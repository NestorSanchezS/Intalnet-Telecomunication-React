import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { HeaderPage } from "./HeaderPage.jsx";
import img01 from "../assets/images/shop/03.jpg";
import img02 from "../assets/images/shop/13.jpg";
import img03 from "../assets/images/shop/14.jpg";
import img04 from "../assets/images/shop/15.jpg";
import { TopProducts } from "./TopProducts.jsx";
import { useIntalnetContext } from "../hooks/useIntalnetContext.jsx";
import { ImgInfoProduct } from "./ImgInfoProduct.jsx";

export const InfoProduct = () => {
  const { topProduct } = useIntalnetContext();
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

  let imgPath = img01;
  if (images?.length > 1) {
    imgPath = `http://localhost:3300${images[0].path}`;
  }
  let imgPath2 = img02;
  if (images?.length > 1) {
    imgPath2 = `http://localhost:3300${images[1].path}`;
  }
  let imgPath3 = img03;
  if (images?.length > 1) {
    imgPath3 = `http://localhost:3300${images[2].path}`;
  }
  let imgPath4 = img04;
  if (images?.length > 1) {
    imgPath4 = `http://localhost:3300${images[3].path}`;
  }

  // if (images == undefined || images.length == 0) {
  //   return <p>Loading...</p>;
  // }
  // console.log(images[0].path);

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
                    <div data-thumb={imgPath}>
                      <a href={imgPath}>
                        <img
                          src={imgPath}
                          alt="Imagen de dispositivo"
                          data-caption=""
                          data-src={imgPath}
                          data-large_image={imgPath}
                          data-large_image_width="1000"
                          data-large_image_height="1000"
                        />
                      </a>
                    </div>
                    <div data-thumb={imgPath2}>
                      <a href={imgPath2}>
                        <img
                          src={imgPath2}
                          alt="Imagen de dispositivo"
                          data-caption=""
                          data-src={imgPath2}
                          data-large_image={imgPath2}
                          data-large_image_width="1000"
                          data-large_image_height="1000"
                        />
                      </a>
                    </div>
                    <div data-thumb={imgPath3}>
                      <a href={imgPath3}>
                        <img
                          src={imgPath3}
                          alt="Imagen de dispositivo"
                          data-caption=""
                          data-src={imgPath3}
                          data-large_image={imgPath3}
                          data-large_image_width="1000"
                          data-large_image_height="1000"
                        />
                      </a>
                    </div>
                    <div data-thumb={imgPath4}>
                      <a href={imgPath4}>
                        <img
                          src={imgPath4}
                          alt="Imagen de dispositivo"
                          data-caption=""
                          data-src={imgPath4}
                          data-large_image={imgPath4}
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
            <aside className="col-lg-5 col-xl-4">
              <TopProducts topProduct={topProduct} />
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};
