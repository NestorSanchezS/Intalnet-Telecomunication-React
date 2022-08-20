import React from "react";

export const Footer = () => {
  return (
    <>
      <footer className="page_footer ls ms s-pt-80 s-pb-70 s-py-lg-120 s-pt-xl-135 s-pb-xl-105 c-gutter-60 text-center text-md-left">
        <div className="container">
          <div className="row">
            <div className="divider-20 d-none d-xl-block"></div>

            <div
              className="col-md-6 col-xl-3 order-xl-1 order-md-1 animate"
              data-animation="fadeInUp"
            >
              <div className="widget widget_text">
                <h4 className="widget-title">About</h4>
                <p>
                  Bienvenido al proveedor de servicios de Internet y banda ancha
                  más grande donde puede elegir el mejor plan de todos.
                </p>
                <div className="widget widget_social_buttons">
                  <a
                    href="#"
                    className="fa fa-facebook color-bg-icon rounded-icon"
                    title="facebook"
                  ></a>
                  <a
                    href="#"
                    className="fa fa-twitter color-bg-icon rounded-icon"
                    title="twitter"
                  ></a>
                  <a
                    href="#"
                    className="fa fa-youtube-play color-bg-icon rounded-icon"
                    title="youtube-play"
                  ></a>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-xl-3 order-xl-2 order-md-4 animate"
              data-animation="fadeInUp"
            >
              <div className="widget links">
                <h4 className="widget-title">Links</h4>
                <ul>
                  <li className="cat-item">
                    <a href="blog-right.html">Packages</a>
                  </li>
                  <li className="cat-item">
                    <a href="blog-right.html">MaxiNet Media</a>
                  </li>
                  <li className="cat-item">
                    <a href="blog-right.html">Connection</a>
                  </li>
                  <li className="cat-item">
                    <a href="blog-right.html">Support</a>
                  </li>
                  <li className="cat-item">
                    <a href="blog-right.html">Video Tutorials</a>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-md-6 col-xl-3 order-xl-3 order-md-3 animate"
              data-animation="fadeInUp"
            >
              <div className="widget services-links">
                <h4 className="widget-title">Servicios</h4>
                <ul>
                  <li className="cat-item">
                    <a href="blog-right.html">Canales Full HD</a>
                  </li>
                  <li className="cat-item">
                    <a href="blog-right.html">Servidor Dedicado</a>
                  </li>
                  <li className="cat-item">
                    <a href="blog-right.html">Internet de Alta Velocidad</a>
                  </li>
                  <li className="cat-item">
                    <a href="blog-right.html">SFibra optica</a>
                  </li>
                  <li className="cat-item">
                    <a href="blog-right.html">Accesorios de tecnologia</a>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-md-6 col-xl-3 order-xl-4 order-md-2 animate"
              data-animation="fadeInUp"
            >
              <div className="widget widget_icons_list">
                <h4 className="widget-title">Call Us</h4>
                <p>23-456-7890</p>
                <a href="#" className="small-text">
                  <i className="fa fa-envelope-o color-main fs-14"></i>
                  email us
                </a>
                <h4 className="widget-title">Visit Us</h4>
                <p>246 Benson St., Ashwaubenon</p>
                <a href="#" className="small-text">
                  <i className="fa fa-map-marker color-main3 fs-14"></i>
                  Get Direction
                </a>
              </div>
              <div className="divider-45 d-none d-md-block d-xlz-none"></div>
            </div>
          </div>
        </div>
      </footer>
      <section className="page_copyright ds s-py-10 copyright-bg">
        <div className="container">
          <div className="row align-items-center">
            <div className="divider-15 d-none d-lg-block"></div>
            <div className="col-md-12 text-center">
              <p>
                &copy; Copyright <span className="copyright_year">2019</span>
                All Rights Reserved
              </p>
            </div>
            <div className="divider-15 d-none d-lg-block"></div>
          </div>
        </div>
      </section>
    </>
  );
};
