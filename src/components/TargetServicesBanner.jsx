import React from "react";
import image01 from "../assets/images/gallery/Monteria.jpg";
import image02 from "../assets/images/gallery/Tierralta.jpg";
import image03 from "../assets/images/gallery/valencia.jpg";
import image04 from "../assets/images/gallery/cordoba.jpg";
import image05 from "../assets/images/gallery/05.jpeg";
import image06 from "../assets/images/gallery/06.jpeg";
import image08 from "../assets/images/gallery/08.png";

export const TargetServicesBanner = () => {
  return (
    <section
      className="s-pb-80 s-pb-lg-120 s-pb-xl-160 ls blog-carousel overflow-visible mt-2"
      id="blog"
    >
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div
              className="owl-carousel"
              data-autoplay="true"
              data-loop="true"
              data-responsive-lg="3"
              data-responsive-md="2"
              data-responsive-sm="2"
              data-nav="false"
              data-dots="false"
              data-margin="60"
            >
              <article className=" vertical-item text-center text-md-left post type-post status-publish format-standard has-post-thumbnail">
                <div className="item-media post-thumbnail">
                  <div className="item-media ">
                    <img className="item-media-border" src={image01} alt="" />
                  </div>
                </div>
                <div className="item-content">
                  <header className="entry-header">
                    <h5 className="letters-title-card">
                      Nuestro equipo de trabajo en la ciudad Montería.
                    </h5>
                  </header>
                </div>
              </article>

              <article className="vertical-item text-center text-md-left post type-post status-publish format-standard has-post-thumbnail">
                <div className="item-media post-thumbnail ">
                  <div className="item-media ">
                    <img className="item-media-border" src={image02} alt="" />
                  </div>
                </div>

                <div className="item-content">
                  <header className="entry-header">
                    <h5 className="letters-title-card">
                      Nuestro equipo de trabajo en el municipio de Tierralta.
                    </h5>
                  </header>
                </div>
              </article>

              <article className="vertical-item text-center text-md-left post type-post status-publish format-standard has-post-thumbnail">
                <div className="item-media post-thumbnail">
                  <div className="item-media">
                    <img className="item-media-border" src={image03} alt="" />
                  </div>
                </div>

                <div className="item-content">
                  <header className="entry-header">
                    <h5 className="letters-title-card">
                      Nuestro equipo de trabajo en el municipio de Valencia.
                    </h5>
                  </header>
                </div>
              </article>

              <article className="vertical-item text-center text-md-left post type-post status-publish format-standard has-post-thumbnail">
                <div className="item-media post-thumbnail">
                  <div className="item-media">
                    <img className="item-media-border" src={image04} alt="" />
                  </div>
                </div>

                <div className="item-content">
                  <header className="entry-header">
                    <h5 className="letters-title-card">
                      Conócenos y acercate a nuestras oficinas. Danos el gusto
                      en atenderte.
                    </h5>
                  </header>
                </div>
              </article>

              <article className="vertical-item text-center text-md-left post type-post status-publish format-standard has-post-thumbnail">
                <div className="item-media post-thumbnail">
                  <div className="item-media">
                    <img className="item-media-border" src={image05} alt="" />
                  </div>
                </div>

                <div className="item-content">
                  <header className="entry-header">
                    <h5 className="letters-title-card">
                      Somos una empresa que vino a darte el mejor entretimiento.
                    </h5>
                  </header>
                </div>
              </article>

              <article className="vertical-item text-center text-md-left post type-post status-publish format-standard has-post-thumbnail">
                <div className="item-media post-thumbnail">
                  <div className="item-media">
                    <img className="item-media-border" src={image06} alt="" />
                  </div>
                </div>

                <div className="item-content">
                  <header className="entry-header">
                    <h5 className="letters-title-card">
                      Obtén muchos beneficios, afiliate y visualiza la mejor
                      televisión del departamento.
                    </h5>
                  </header>
                </div>
              </article>
              <article className="vertical-item text-center text-md-left post type-post status-publish format-standard has-post-thumbnail">
                <div className="item-media post-thumbnail">
                  <div className="item-media">
                    <img className="item-media-border" src={image08} alt="" />
                  </div>
                </div>

                <div className="item-content">
                  <header className="entry-header">
                    <h5 className="letters-title-card">
                      Ofrecemos una plataforma de pelicula para que puedas ver
                      las peliculas TOP del momento totalmente GRATIS.
                    </h5>
                  </header>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
