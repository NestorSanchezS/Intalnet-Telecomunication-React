import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import messenger from "../assets/images/messeger.png";
import intalnet from "../assets/INTALNET-TELECOMUNICACIONES.png";
import { LinkCity } from "./LinkCity";
import "../styles/bootstrap.min.css";
import "../styles/bootstrap.css";

export const NavBar = () => {
  const [dataCity, setDataCity] = useState([]);
  useEffect(() => {
    try {
      const getApiCity = async () => {
        const url = "http://localhost:3300/api/v1/cities";
        const response = await fetch(url);
        const data = await response.json();
        setDataCity(data);
      };
      getApiCity();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      {/* nav completo */}
      <div className="header_absolute header_layout_1">
        <header className="page_header ls justify-nav-end">
          <div className="container-fluid">
            <div className="row align-items-center">
              {/* Logo intalnet que tambien lleva a inicio */}
              <div className="col-xl-2 col-lg-4 col-md-5 col-11">
                <a className="logo" href="/">
                  <span className="logo-text py-20">
                    <img src={intalnet} alt="logo intalnet" />
                  </span>
                </a>
              </div>
              <div className="col-xl-9 col-lg-8 col-md-7 col-1">
                <div className="nav-wrap">
                  {/* Inicio de nav principal */}
                  <nav className="top-nav">
                    <ul className="nav sf-menu">
                      <li className="active">
                        <a href="/">Inicio</a>
                      </li>
                      <li>
                        <Link to="/ourcompany">Nuestra Empresa</Link>
                      </li>

                      <li>
                        <a>Servicios</a>
                        <ul>
                          <li>
                            <a>Planes por sedes</a>
                            <ul>
                              {dataCity.map((city) => (
                                <LinkCity key={city.id} city={city} />
                              ))}
                            </ul>
                          </li>

                          <li>
                            <a>Otros Services</a>
                            <ul>
                              <li>
                                <a>Camaras se seguridad</a>
                              </li>
                              <li>
                                <a>Internet dedicado</a>
                              </li>
                              <li>
                                <Link to="technologyaccessories">
                                  Accesorios de tecnologia
                                </Link>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>

                      <li>
                        <a>Info Usuarios</a>
                        <ul>
                          <li>
                            <Link to="frequentquestions">
                              Preguntas Frecuentes
                            </Link>
                          </li>
                          <li>
                            <a href="pqr">
                              Peticiones, Quejas y Reclamos (PQR)
                            </a>
                          </li>
                          <li>
                            <a href="userprotection">Protección al usuario</a>
                          </li>
                        </ul>
                      </li>

                      <li>
                        <Link to="/internetsano">Internet Sano</Link>
                      </li>

                      <li>
                        <Link to="/contactus">Contactenos</Link>
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
                        <a>
                          <i className="color-main7 fa fa-question-circle"></i>
                          FAQ
                        </a>
                      </li>
                      <li>
                        <a>
                          <i className="color-main7 fa fa-paper-plane"></i>
                          Submit a ticket
                        </a>
                      </li>
                      <li>
                        <a>
                          <i className="color-main7 fa fa-rocket"></i>
                          Terms Of Use
                        </a>
                      </li>
                      <li>
                        <a>
                          <i className="color-main7 fa fa-file-text-o"></i>
                          Terms of Service
                        </a>
                      </li>
                      <li>
                        <a>
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
