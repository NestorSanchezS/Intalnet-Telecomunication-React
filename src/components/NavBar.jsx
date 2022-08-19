import React from "react";
import { Link } from "react-router-dom";
import messenger from "../assets/images/messeger.png";

export const NavBar = () => {
  return (
    <>
      {/* <div className="preloader">
        <div className="preloader_image"></div>
      </div> */}

      <div
        className="modal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="search_modal"
        id="search_modal"
      >
        <button
          type="button"
          className="close"
          data-dismiss="modal"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
        <div className="widget widget_search">
          <a href="./" className="logo">
            <span className="logo-text py-20">
              <strong>Intal</strong>net
            </span>
          </a>
          <form method="get" className="searchform search-form" action="/">
            <div className="form-group">
              <input
                type="text"
                name="search"
                className="form-control"
                placeholder="Search keyword"
                id="modal-search-input"
              />
            </div>
            <button type="submit" className="btn">
              Search
            </button>
          </form>
        </div>
      </div>

      <div
        className="modal fade"
        tabIndex="-1"
        role="dialog"
        id="messages_modal"
      >
        <div className="fw-messages-wrap ls p-normal">
          <ul className="list-unstyled">
            <li>Message To User</li>
          </ul>
        </div>
      </div>
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
                        <a href="about.html">Nuestra empresa</a>
                      </li>

                      <li>
                        <a href="internet.html">Servicios</a>
                        <ul>
                          <li>
                            <a href="contact.html">Planes por sedes</a>
                            <ul>
                              <li>
                                <a href="contact.html">Montería Córdoba</a>
                              </li>
                              <li>
                                <a href="contact2.html">Valencia Córdoba</a>
                              </li>
                              <li>
                                <a href="contact3.html">Tierralta Córdoba</a>
                              </li>
                              <li>
                                <a href="contact4.html">Los Córdoba, Córdoba</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="contact2.html">Otros de servios</a>
                            <ul>
                              <li>
                                <a href="contact.html">Camaras de seguridad</a>
                              </li>
                              <li>
                                <a href="contact2.html">Internet dedicado</a>
                              </li>
                              <li>
                                <a href="contact3.html">
                                  Accesorios de tecnologia
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>

                      <li>
                        <a href="contact.html">Info Usuarios</a>
                        <ul>
                          <li>
                            <a href="contact.html">Preguntas Frecuentes</a>
                          </li>
                          <li>
                            <a href="contact2.html">
                              Peticiones, Quejas y reclamos (PQR)
                            </a>
                          </li>
                          <li>
                            <a href="contact3.html">Entes de control</a>
                          </li>
                          <li>
                            <a href="contact4.html">Los Córdoba, Córdoba</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="pricing.html">Contactenos</a>
                      </li>
                    </ul>
                  </nav>

                  <ul className="top-includes d-none d-xl-block search-icon">
                    <li>
                      <span>
                        <a href="#" className="search_modal_button">
                          <i className="fa fa-search"></i>
                        </a>
                      </span>
                    </li>
                  </ul>
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
    </>
  );
};
