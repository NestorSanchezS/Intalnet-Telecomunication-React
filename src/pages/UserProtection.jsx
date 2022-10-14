import React from "react";
import { HeaderPage } from "../components/HeaderPage";
import img7 from "../assets/images/gallery/11.jpg";
import img8 from "../assets/images/gallery/26.png";
import img9 from "../assets/images/gallery/27.jpg";
import img10 from "../assets/images/gallery/29.jpg";
import img11 from "../assets/images/gallery/30.jpg";
import img12 from "../assets/images/gallery/31.png";
import pdfSeguridad from "../assets/docs/seguridad_en_la_red.pdf";
import pdfBloquear from "../assets/docs/bloquear_sitios_en_internet_explorer_y_firefox.pdf";
import pdfProteja from "../assets/docs/proteja_su_red-filtro_antivirus_y_antispam.pdf";
import pdfRiesgo from "../assets/docs/riesgo_en_la_red_malware.pdf";
import pdfInalambricas from "../assets/docs/uso_de_redes_inalambricas_en_forma_segura.pdf";

export const UserProtection = () => {
  return (
    <>
      <HeaderPage message="Protección al usuario" />
      <section className="ls s-pt-80 s-pb-50 s-pt-lg-120 s-pb-lg-90 s-pt-xl-160 s-pb-xl-130 blog-grid">
        <div className="container">
          <div className="row c-mb-30">
            <main className="offset-lg-1 col-lg-10">
              <div className="row isotope-wrapper masonry-layout">
                <div className="col-xl-4 col-md-6">
                  <article className="vertical-item text-center content-padding padding-small hero-bg rounded rounded-image-top post type-post status-publish format-standard has-post-thumbnail">
                    <div className="item-media post-thumbnail">
                      <a href="blog-single-full.html">
                        <img src={img8} alt="" />
                      </a>
                    </div>
                    <div className="item-content">
                      <header className="entry-header d-block">
                        <h4 className="entry-title letters-title-card">
                          <a
                            className="entry-title-a"
                            href="blog-single-video-full.html"
                            rel="bookmark"
                          >
                            Seguridad en la Red
                          </a>
                        </h4>
                        <div className="entry-meta">
                          <span className="screen-reader-text">Posted on</span>
                        </div>
                      </header>

                      <div className="entry-content">
                        <p>
                          La red mundial Internet y sus elementos asociados son
                          mecanismos ágiles que proveen una alta gama de
                          posibilidades de comunicación...
                        </p>
                      </div>
                      <button
                        type="button"
                        className="btn btn-maincolor btn_parrilla-tv "
                      >
                        <span>
                          <a
                            className="btn_parrilla_tv-a"
                            href={pdfSeguridad}
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            Leer más
                          </a>
                        </span>
                      </button>
                    </div>
                  </article>
                </div>

                <div className="col-xl-4 col-md-6 ">
                  <article className="vertical-item text-center content-padding padding-small hero-bg rounded rounded-image-top post type-post status-publish format-standard has-post-thumbnail">
                    <div className="item-content">
                      <header className="entry-header d-block">
                        <h4 className="entry-title">
                          <a
                            className="entry-title-a"
                            href="blog-single-video-full.html"
                            rel="bookmark"
                          >
                            Bloquear sitios en Internet Explorer y Firefox
                          </a>
                        </h4>
                        <div className="entry-meta">
                          <span className="screen-reader-text">Posted on</span>
                        </div>
                      </header>

                      <div className="entry-content">
                        <p>
                          Aprende a bloquear citios web en navegadores como
                          Chrome y Morzilla.
                        </p>
                      </div>
                      <button
                        type="button"
                        className="btn btn-maincolor btn_parrilla-tv "
                      >
                        <span>
                          <a
                            className="btn_parrilla_tv-a"
                            href={pdfBloquear}
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            Leer más
                          </a>
                        </span>
                      </button>
                    </div>
                  </article>
                </div>

                <div className="col-xl-4 col-md-6">
                  <article className="vertical-item text-center content-padding padding-small hero-bg rounded rounded-image-top post type-post status-publish format-standard has-post-thumbnail">
                    <div className="embed-responsive embed-responsive-3by2">
                      <img src={img9} alt="" />
                    </div>
                    <div className="item-content">
                      <header className="entry-header d-block">
                        <h4 className="entry-title">
                          <a
                            className="entry-title-a"
                            href="blog-single-video-full.html"
                            rel="bookmark"
                          >
                            Riesgo en la Red Malware
                          </a>
                        </h4>
                        <div className="entry-meta">
                          <span className="screen-reader-text">Posted on</span>
                        </div>
                      </header>
                      <div className="entry-content">
                        <p>
                          Malware es cualquier código que pueda utilizarse para
                          robar datos, evitar los controles de acceso, ocasionar
                          daños o comprometer...
                        </p>
                      </div>
                      <button
                        type="button"
                        className="btn btn-maincolor btn_parrilla-tv "
                      >
                        <span>
                          <a
                            className="btn_parrilla_tv-a"
                            rel="noopener noreferrer"
                            href={pdfRiesgo}
                            target="_blank"
                          >
                            Leer más
                          </a>
                        </span>
                      </button>
                    </div>
                  </article>
                </div>

                <div className="col-xl-4 col-md-6">
                  <article className="cover-image ds s-overlay post type-post status-publish format-quote has-post-thumbnail">
                    <div className="post-thumbnail">
                      <a href="blog-single-full.html">
                        <img src={img7} alt="" />
                      </a>
                    </div>
                    <header className="entry-header">
                      <img src={img12} className="avatar" alt="" />
                    </header>
                    <div className="entry-content">
                      <blockquote>
                        <cite>
                          <a>INTALNET TELECOMUNICACIONES S.A.S</a>
                        </cite>
                        <p>
                          Régimen de protección de los derechos de los usuarios
                          de servicios de telecomunicaciones.
                        </p>
                      </blockquote>
                      <div className="entry-meta">
                        <span className="post-tags">
                          <i className="fa fa-tags fs-14 color-main"></i>
                          <span className="screen-reader-text">Categories</span>
                          <a rel="category tag">quote</a>
                        </span>
                      </div>
                    </div>
                  </article>
                </div>

                <div className="col-xl-4 col-md-6">
                  <article className="vertical-item text-center content-padding padding-small hero-bg rounded rounded-image-top post type-post status-publish format-standard has-post-thumbnail">
                    <div className="item-media post-thumbnail">
                      <a href="blog-single-full.html">
                        <img src={img10} alt="" />
                      </a>
                    </div>

                    <div className="item-content">
                      <header className="entry-header d-block">
                        <h4 className="entry-title">
                          <a
                            className="entry-title-a"
                            href="blog-single-video-full.html"
                            rel="bookmark"
                          >
                            Proteja su red - Filtro y Antispam
                          </a>
                        </h4>
                      </header>
                      <div className="entry-content">
                        <p>
                          Un antivirus es un programa informático que tiene el
                          propósito de detectar y eliminar...
                        </p>
                      </div>
                      <button
                        type="button"
                        className="btn btn-maincolor btn_parrilla-tv "
                      >
                        <span>
                          <a
                            className="btn_parrilla_tv-a"
                            href={pdfProteja}
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            Leer más
                          </a>
                        </span>
                      </button>
                    </div>
                  </article>
                </div>

                <div className="col-xl-4 col-md-6">
                  <article className="vertical-item text-center content-padding padding-small hero-bg rounded rounded-image-top post type-post status-publish format-standard has-post-thumbnail">
                    <div className="item-media post-thumbnail">
                      <a href="blog-single-full.html">
                        <img src={img11} alt="" />
                      </a>
                    </div>
                    <div className="item-content">
                      <header className="entry-header d-block">
                        <h4 className="entry-title">
                          <a
                            className="entry-title-a"
                            href="blog-single-video-full.html"
                            rel="bookmark"
                          >
                            Uso de redes inalámbricas en forma segura
                          </a>
                        </h4>
                        <div className="entry-meta">
                          <span className="screen-reader-text">Posted on</span>
                        </div>
                      </header>
                      <div className="entry-content">
                        <p>
                          Las redes inalámbricas permiten que los dispositivos
                          habilitados con Wi-Fi, como computadoras portátiles y
                          tablets, se conecten...
                        </p>
                      </div>
                      <button
                        type="button"
                        className="btn btn-maincolor btn_parrilla-tv "
                      >
                        <span>
                          <a
                            className="btn_parrilla_tv-a"
                            href={pdfInalambricas}
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            Leer más
                          </a>
                        </span>
                      </button>
                    </div>
                  </article>
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>
    </>
  );
};
