import React from "react";
import img1 from "../assets/images/gallery/40.jpg";
import img2 from "../assets/images/gallery/41.jpg";
import img3 from "../assets/images/gallery/43.jpg";
import img4 from "../assets/images/gallery/44.png";

export const SpeedTest = () => {
  return (
    <section className="mb-5">
      <div className="container">
        <div className="row c-gutter-60">
          <main className="offset-lg-1 col-lg-10">
            <article className="post side-item text-center text-md-left event-post content-padding rounded rounded-image-left hero-bg">
              <div className="row">
                <div className="col-xl-4 col-lg-5 col-md-5">
                  <div className="item-media cover-image">
                    <img src={img3} alt="" />
                    <div className="media-links">
                      <a
                        className="abs-link"
                        href="https://www.speedtest.net/es"
                        target="_blank"
                      ></a>
                    </div>
                  </div>
                </div>

                <div className="col-xl-8 col-lg-7 col-md-6">
                  <div className="item-content">
                    <h1>
                      <span
                        href="event-single-full.html"
                        className="text-center widget-title"
                      >
                        TEST DE VELOCIDAD
                      </span>
                    </h1>

                    <h5 className="mt-5">
                      Si quieres saber que ancho de banda tienes contratado haz
                      click aquí
                    </h5>
                  </div>
                  <div className="plan-button">
                    <a
                      href="https://www.speedtest.net/es"
                      className="btn btn-maincolor"
                      target="_blank"
                    >
                      <span>Realizar test</span>
                    </a>
                  </div>
                </div>
              </div>
            </article>
          </main>
        </div>
      </div>
    </section>
  );
};
