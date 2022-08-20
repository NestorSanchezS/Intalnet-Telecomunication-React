import React from "react";
import { Link } from "react-router-dom";
import messenger from "../assets/images/messeger.png";
import intalnet from "../assets/INTALNET-TELECOMUNICACIONES.png";

export const NavBar = () => {
  return (
    <>
      <div className="header_absolute header_layout_1">
        <header className="page_header ls justify-nav-end">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-xl-2 col-lg-4 col-md-5 col-11">
                <a href="./" className="logo">
                  <span className="logo-text py-20">
                    <img src={intalnet} alt="" />
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
                                <a href="team-single.html">Tierralta Córdoba</a>
                              </li>
                              <li>
                                <a href="team-single.html">Valencia Córdoba</a>
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
                                <a href="services.html">Camaras se seguridad</a>
                              </li>
                              <li>
                                <a href="services2.html">Internet dedicado</a>
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
                            <a href="blog-right.html">Preguntas Frecuentes</a>
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
    </>
  );
};
