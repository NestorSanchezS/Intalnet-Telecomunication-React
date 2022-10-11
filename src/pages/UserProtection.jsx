import React from "react";
import { HeaderPage } from "../components/HeaderPage";
import img7 from "../assets/images/gallery/11.jpg";
import img8 from "../assets/images/gallery/26.png";
import img9 from "../assets/images/gallery/27.jpg";
import pdfSeguridad from "../assets/docs/seguridad_en_la_red.pdf";
import pdfBloquear from "../assets/docs/bloquear_sitios_en_internet_explorer_y_firefox.pdf";
import pdfProteja from "../assets/docs/proteja_su_red-filtro_antivirus_y_antispam.pdf";
import pdfRiesgo from "../assets/docs/riesgo_en_la_red_malware.pdf";
import pdfInalambricas from "../assets/docs/uso_de_redes_inalambricas_en_forma_segura.pdf";

export const UserProtection = () => {
  return (
    <>
      <HeaderPage message="Protección al usuario" />
      <section class="ls s-pt-80 s-pb-50 s-pt-lg-120 s-pb-lg-90 s-pt-xl-160 s-pb-xl-130 blog-grid">
        <div class="container">
          <div class="row c-mb-30">
            <main class="offset-lg-1 col-lg-10">
              <div class="row isotope-wrapper masonry-layout">
                <div class="col-xl-4 col-md-6">
                  <article class="vertical-item text-center content-padding padding-small hero-bg rounded rounded-image-top post type-post status-publish format-standard has-post-thumbnail">
                    <div class="item-media post-thumbnail">
                      <a href="blog-single-full.html">
                        <img src={img8} alt="" />
                      </a>
                    </div>
                    <div class="item-content">
                      <header class="entry-header d-block">
                        <h4 class="entry-title letters-title-card">
                          <a
                            className="entry-title-a"
                            href="blog-single-video-full.html"
                            rel="bookmark"
                          >
                            Seguridad en la Red
                          </a>
                        </h4>
                        <div class="entry-meta">
                          <span class="screen-reader-text">Posted on</span>
                        </div>
                      </header>

                      <div class="entry-content">
                        <p>Conoce como funciona la seguriudad en la red.</p>
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

                <div class="col-xl-4 col-md-6 ">
                  <article class="vertical-item text-center content-padding padding-small hero-bg rounded rounded-image-top post type-post status-publish format-standard has-post-thumbnail">
                    <div class="item-content">
                      <header class="entry-header d-block">
                        <h4 class="entry-title">
                          <a
                            className="entry-title-a"
                            href="blog-single-video-full.html"
                            rel="bookmark"
                          >
                            Bloquear sitios en Internet Explorer y Firefox
                          </a>
                        </h4>
                        <div class="entry-meta">
                          <span class="screen-reader-text">Posted on</span>
                        </div>
                      </header>

                      <div class="entry-content">
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

                <div class="col-xl-4 col-md-6">
                  <article class="vertical-item text-center content-padding padding-small hero-bg rounded rounded-image-top post type-post status-publish format-standard has-post-thumbnail">
                    <div class="embed-responsive embed-responsive-3by2">
                      <img src={img9} alt="" />
                    </div>
                    <div class="item-content">
                      <header class="entry-header d-block">
                        <h4 class="entry-title">
                          <a
                            className="entry-title-a"
                            href="blog-single-video-full.html"
                            rel="bookmark"
                          >
                            Riesgo en la Red Malware
                          </a>
                        </h4>
                        <div class="entry-meta">
                          <span class="screen-reader-text">Posted on</span>
                        </div>
                      </header>
                      <div class="entry-content">
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

                <div class="col-xl-4 col-md-6">
                  <article class="cover-image ds s-overlay post type-post status-publish format-quote has-post-thumbnail">
                    <div class="post-thumbnail">
                      <a href="blog-single-full.html">
                        <img src={img7} alt="" />
                      </a>
                    </div>
                    <header class="entry-header">
                      <img src={img8} class="avatar" alt="" />
                    </header>
                    <div class="entry-content">
                      <blockquote>
                        <cite>
                          <a href="http://www.brainyquote.com/quotes/quotes/m/marktwain163473.html">
                            Gregory D. Grey, Client
                          </a>
                        </cite>
                        <p>
                          We had hughesnet for ages and were completely unhappy
                          with it. We switched to MaxiCom and have never looked
                          back. We are much much happier!
                        </p>
                      </blockquote>
                      <div class="entry-meta">
                        <span class="post-tags">
                          <i class="fa fa-tags fs-14 color-main"></i>
                          <span class="screen-reader-text">Categories</span>
                          <a href="blog-left.html" rel="category tag">
                            quote
                          </a>
                        </span>
                      </div>
                    </div>
                  </article>
                </div>

                <div class="col-xl-4 col-md-6">
                  <article class="vertical-item text-center content-padding padding-small hero-bg rounded rounded-image-top post type-post status-publish format-standard has-post-thumbnail">
                    <div class="item-media post-thumbnail">
                      <div
                        class="owl-carousel"
                        data-loop="true"
                        data-margin="0"
                        data-nav="false"
                        data-dots="true"
                        data-autoplay="false"
                        data-responsive-xs="1"
                        data-responsive-sm="1"
                        data-responsive-md="1"
                        data-responsive-lg="1"
                      >
                        <div class="item">
                          <img src={img8} alt="image" />
                        </div>
                        <div class="item">
                          <img src={img8} alt="image" />
                        </div>
                        <div class="item">
                          <img src={img8} alt="image" />
                        </div>
                      </div>
                    </div>

                    <div class="item-content">
                      <header class="entry-header d-block">
                        <h4 class="entry-title">
                          <a
                            className="entry-title-a"
                            href="blog-single-video-full.html"
                            rel="bookmark"
                          >
                            Proteja su red - Filtro y Antispam
                          </a>
                        </h4>
                      </header>
                      <div class="entry-content">
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

                <div class="col-xl-4 col-md-6">
                  <article class="vertical-item text-center content-padding padding-small hero-bg rounded rounded-image-top post type-post status-publish format-standard has-post-thumbnail">
                    <div class="item-media post-thumbnail">
                      <a href="blog-single-full.html">
                        <img src={img8} alt="" />
                      </a>
                    </div>
                    <div class="item-content">
                      <header class="entry-header d-block">
                        <h4 class="entry-title">
                          <a
                            className="entry-title-a"
                            href="blog-single-video-full.html"
                            rel="bookmark"
                          >
                            Uso de redes inalámbricas en forma segura
                          </a>
                        </h4>
                        <div class="entry-meta">
                          <span class="screen-reader-text">Posted on</span>
                        </div>
                      </header>
                      <div class="entry-content">
                        <p>
                          Las redes inalámbricas permiten que los dispositivos
                          habilitados...
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
