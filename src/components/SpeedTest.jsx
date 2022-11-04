import React from "react";

export const SpeedTest = () => {
  return (
    <section className="ls s-py-80 s-py-lg-120 s-py-xl-160">
      <div className="container">
        <div className="row c-gutter-60">
          <main className="offset-lg-1 col-lg-10">
            <article className="post side-item text-center text-md-left event-post content-padding rounded rounded-image-left hero-bg">
              <div className="row">
                <div className="col-xl-4 col-lg-5 col-md-5">
                  <div className="item-media cover-image">
                    <img src="images/gallery/08.jpg" alt="" />
                    <div className="media-links">
                      <a
                        className="abs-link"
                        title=""
                        href="event-single-full.html"
                      ></a>
                    </div>
                  </div>
                </div>

                <div className="col-xl-8 col-lg-7 col-md-6">
                  <div className="item-content">
                    <h5>
                      <a href="event-single-full.html">Magna aliquyam erased</a>
                    </h5>

                    <p className="item-meta color-darkgrey">
                      <i className="fa fa-calendar color-main"></i>
                      <span>March 12, 2018</span>
                      <i className="fa fa-clock-o color-main"></i>
                      <span>01:15 pm - 04:30 pm</span>
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      In dictum bibendum dui, nec malesuada urna laoreet non.
                      Maecenas id semper nisi.
                    </p>
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
