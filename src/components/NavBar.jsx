import React from "react";
import { Link } from "react-router-dom";
import messenger from "../assets/images/messeger.png";
import slide01 from "../assets/images/slide01.jpg";
import slide02 from "../assets/images/slide02.jpg";
import slide03 from "../assets/images/slide03.jpg";
import bottom from "../assets/images/bottom.png";

export const NavBar = () => {
  return (
    <>
      <div id="canvas">
        <div id="box_wrapper">
          <div className="header_absolute header_layout_1">
            <header className="page_header ls justify-nav-end">
              <div className="container-fluid">
                <div className="row align-items-center">
                  <div className="col-xl-2 col-lg-4 col-md-5 col-11">
                    <a href="./" className="logo">
                      <span className="logo-text py-20">
                        <strong>Intal</strong>net
                      </span>
                    </a>
                  </div>
                  <div className="col-xl-9 col-lg-8 col-md-7 col-1">
                    <div className="nav-wrap">
                      <nav className="top-nav">
                        <ul className="nav sf-menu">
                          <li className="active">
                            <a href="index.html">Inicio</a>
                          </li>

                          <li>
                            <a href="internet.html">Nuestra Empresa</a>
                          </li>

                          <li>
                            <a href="about.html">Servicios</a>
                            <ul>
                              <li>
                                <a href="team.html">Planes por sedes</a>
                                <ul>
                                  <li>
                                    <a href="team.html">Montería Córdoba</a>
                                  </li>
                                  <li>
                                    <a href="team-single.html">
                                      Tierralta Córdoba
                                    </a>
                                  </li>
                                  <li>
                                    <a href="team-single.html">
                                      Valencia Córdoba
                                    </a>
                                  </li>
                                  <li>
                                    <a href="team-single.html">
                                      Los Córodoba, Córdoba
                                    </a>
                                  </li>
                                </ul>
                              </li>

                              <li>
                                <a href="services.html">Otros Services</a>
                                <ul>
                                  <li>
                                    <a href="services.html">
                                      Camaras se seguridad
                                    </a>
                                  </li>
                                  <li>
                                    <a href="services2.html">
                                      Internet dedicado
                                    </a>
                                  </li>
                                  <li>
                                    <a href="services3.html">
                                      Accesorios de tecnologia
                                    </a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>

                          <li>
                            <a href="blog-right.html">Info Usuarios</a>
                            <ul>
                              <li>
                                <a href="blog-right.html">
                                  Preguntas Frecuentes
                                </a>
                              </li>
                              <li>
                                <a href="blog-left.html">
                                  Peticiones, Quejas y Reclamos (PQR)
                                </a>
                              </li>
                              <li>
                                <a href="blog-full.html">Entes de control</a>
                              </li>
                            </ul>
                          </li>

                          <li>
                            <a href="contact.html">Contact</a>
                          </li>
                        </ul>
                      </nav>

                      <ul className="top-includes d-none d-xl-block search-icon"></ul>
                    </div>
                  </div>
                </div>
              </div>

              <span className="toggle_menu">
                <span></span>
              </span>
            </header>

            <div className="page_header_wrapper main-header-side">
              <div className="page_header_side header_slide header_side_right aaaa ls">
                <span className="toggle_menu toggle_menu_side header-slide">
                  <span></span>
                </span>
                <div className="scrollbar-macosx">
                  <div className="side_header_inner">
                    <div className="header-side-menu">
                      <nav className="mainmenu_side_wrapper">
                        <ul className="nav menu-click">
                          <li>
                            <a href="faq.html">
                              <i className="color-main7 fa fa-question-circle"></i>
                              FAQ
                            </a>
                          </li>
                          <li>
                            <a href="booking-form.html">
                              <i className="color-main7 fa fa-paper-plane"></i>
                              Submit a ticket
                            </a>
                          </li>
                          <li>
                            <a href="terms_of_use.html">
                              <i className="color-main7 fa fa-rocket"></i>
                              Terms Of Use
                            </a>
                          </li>
                          <li>
                            <a href="availability-map.html">
                              <i className="color-main7 fa fa-file-text-o"></i>
                              Terms of Service
                            </a>
                          </li>
                          <li>
                            <a href="contact.html">
                              <i className="color-main7 fa fa-phone"></i>
                              call me back
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
                <div className="facebook-messeger d-flex align-items-center hero-bg">
                  <img src={messenger} alt="" />
                  <a href="https://messenger.com" className="small-text">
                    facebook messenger
                  </a>
                </div>
              </div>
            </div>
          </div>

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
                            <div
                              className="intro_layer"
                              data-animation="fadeInRight"
                            >
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
                            <div
                              className="intro_layer"
                              data-animation="fadeInUp"
                            >
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
                            <div
                              className="intro_layer"
                              data-animation="fadeInRight"
                            >
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
                            <div
                              className="intro_layer"
                              data-animation="fadeInUp"
                            >
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
                            <div
                              className="intro_layer"
                              data-animation="fadeInRight"
                            >
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
                            <div
                              className="intro_layer"
                              data-animation="fadeInUp"
                            >
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
        </div>
      </div>
    </>
  );
};
