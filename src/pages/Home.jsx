import React from "react";
import { PageSlider } from "../components/PageSlider";
import img11 from "../assets/images/square/28.jpg";
import img15 from "../assets/images/square/21.jpg";
import img16 from "../assets/images/square/34.png";
import img13 from "../assets/images/square/33.png";
import img01 from "../assets/images/square/12.png";
import img02 from "../assets/images/square/14.jpg";
import img03 from "../assets/images/square/15.jpg";
import img05 from "../assets/images/square/13.jpg";
import img06 from "../assets/images/square/17.png";
import img07 from "../assets/images/square/19.png";
import img08 from "../assets/images/square/20.png";
import img09 from "../assets/images/square/11.webp";

export const Home = () => {
  return (
    <>
      <PageSlider />
      <section className="footer-carousel c-gutter-0 container-px-0 s-py-0 mt-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 text-center">
              <div
                className="owl-carousel small-gallery-carousel"
                data-margin="0"
                data-responsive-lg="8"
                data-responsive-md="4"
                data-responsive-sm="3"
                data-responsive-xs="2"
                data-nav="true"
                data-loop="true"
              >
                <a
                  href="images/square/03.jpg"
                  className="photoswipe-link"
                  data-width="800"
                  data-height="800"
                >
                  <img src={img15} alt="" />
                </a>
                <a
                  href="images/square/03.jpg"
                  className="photoswipe-link"
                  data-width="800"
                  data-height="800"
                >
                  <img src={img16} alt="" />
                </a>
                <a
                  href="images/square/03.jpg"
                  className="photoswipe-link"
                  data-width="800"
                  data-height="800"
                >
                  <img src={img13} alt="" />
                </a>
                <a
                  href="images/square/03.jpg"
                  className="photoswipe-link"
                  data-width="800"
                  data-height="800"
                >
                  <img src={img01} alt="" />
                </a>
                <a
                  href="images/square/04.jpg"
                  className="photoswipe-link"
                  data-width="800"
                  data-height="800"
                >
                  <img src={img02} alt="" />
                </a>
                <a
                  href="images/square/05.jpg"
                  className="photoswipe-link"
                  data-width="800"
                  data-height="800"
                >
                  <img src={img03} alt="" />
                </a>
                <a
                  href="images/square/06.jpg"
                  className="photoswipe-link"
                  data-width="800"
                  data-height="800"
                >
                  <img src={img11} alt="" />
                </a>
                <a
                  href="images/square/07.jpg"
                  className="photoswipe-link"
                  data-width="800"
                  data-height="800"
                >
                  <img src={img05} alt="" />
                </a>
                <a
                  href="images/square/08.jpg"
                  className="photoswipe-link"
                  data-width="800"
                  data-height="800"
                >
                  <img src={img06} alt="" />
                </a>
                <a
                  href="images/square/09.jpg"
                  className="photoswipe-link"
                  data-width="800"
                  data-height="800"
                >
                  <img src={img07} alt="" />
                </a>
                <a
                  href="images/square/10.jpg"
                  className="photoswipe-link"
                  data-width="800"
                  data-height="800"
                >
                  <img src={img08} alt="" />
                </a>
                <a
                  href="images/square/01.jpg"
                  className="photoswipe-link"
                  data-width="800"
                  data-height="800"
                >
                  <img src={img09} alt="" />
                </a>
                <a
                  href="images/square/02.jpg"
                  className="photoswipe-link"
                  data-width="800"
                  data-height="800"
                >
                  <img src={img11} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
