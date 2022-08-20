import React from "react";
import slide01 from "../assets/images/slide01.jpg";
import slide02 from "../assets/images/slide02.jpg";
import slide03 from "../assets/images/slide03.jpg";
import bottom from "../assets/images/bottom.png";

export const PageSlider = () => {
  return (
    <section className="page_slider">
      <div id="particles-js"></div>
      <div className="flexslider" data-nav="false">
        <ul className="slides">
          <li className="ds">
            <img src={slide01} alt="" />
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="intro_layers_wrapper">
                    <div className="intro_layers">
                      <div className="intro_layer" data-animation="fadeInRight">
                        <h1 className="intro_featured_word">
                          Preparate
                          <br />
                          ParaName
                          <br />
                          un internet
                          <br />
                          de alta velocidad
                        </h1>
                        <h5 className="intro_before_featured_word intro-absolute text-uppercase fw-200">
                          El mejor servicio
                          <br />
                          en el departamento
                        </h5>
                      </div>
                      <div className="intro_layer" data-animation="fadeInUp">
                        <p className="text-uppercase intro_after_featured_word">
                          Revisa nuestro planes
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="ds slide2">
            <img src={slide02} alt="" />
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="intro_layers_wrapper">
                    <div className="intro_layers">
                      <div className="intro_layer" data-animation="fadeInRight">
                        <h1 className="slide2 intro_featured_word">
                          Internet
                          <br />
                          for
                          <br />
                          Institution
                          <br />& SME
                        </h1>
                        <h5 className="fw-300 text-uppercase intro_before_featured_word intro-absolute">
                          Leased Line Internet
                          <br />
                          with A+ Category
                        </h5>
                      </div>
                      <div className="intro_layer" data-animation="fadeInUp">
                        <p className="text-uppercase intro_after_featured_word">
                          Check our Services
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="social-flex">
              <p className="social-heading">follow</p>
              <p className="social-icons">
                <a
                  href="#"
                  className="fa fa-facebook color-white"
                  title="facebook"
                ></a>
                <a
                  href="#"
                  className="fa fa-twitter color-white"
                  title="twitter"
                ></a>
                <a
                  href="#"
                  className="fa fa-youtube-play color-white"
                  title="google"
                ></a>
              </p>
            </div>
          </li>
          <li className="ds slide3">
            <img src={slide03} alt="" />
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="intro_layers_wrapper">
                    <div className="intro_layers">
                      <div className="intro_layer" data-animation="fadeInRight">
                        <h1 className="slide2 intro_featured_word">
                          Don’t
                          <br />
                          Suffer
                          <br />
                          The
                          <br />
                          Buffer
                        </h1>
                        <h5 className="intro-absolute fw-300 text-uppercase intro_before_featured_word">
                          Speeds Up to 1 Gbps
                          <br />
                          with Unlimited Data
                        </h5>
                      </div>
                      <div className="intro_layer" data-animation="fadeInUp">
                        <p className="text-uppercase intro_after_featured_word">
                          Check Testimonials
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div className="ds social-flex">
        <p className="social-heading">follow</p>
        <p className="social-icons">
          <a
            href="#"
            className="fa fa-facebook color-white"
            title="facebook"
          ></a>
          <a href="#" className="fa fa-twitter color-white" title="twitter"></a>
          <a
            href="#"
            className="fa fa-youtube-play color-white"
            title="google"
          ></a>
        </p>
      </div>
      <div className="arrow">
        <img src={bottom} alt="" />
      </div>
      <div className="animated-arrow">
        <a href="#price">
          <div className="mouse_scroll">
            <span className="">
              <i className="color-main fa fa-angle-down unu"></i>
            </span>
            <span className="">
              <i className="color-main fa fa-angle-down doi"></i>
            </span>
            <span className="">
              <i className="color-main fa fa-angle-down trei"></i>
            </span>
          </div>
        </a>
      </div>
    </section>
  );
};
