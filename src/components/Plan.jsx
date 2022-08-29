import React from "react";

export const Plan = () => {
  return (
    <>
      <div className="row c-gutter-60">
        <div className="col-lg-4 col-12">
          <div className="pricing-plan hero-bg rounded">
            <div className="plan-name text-uppercase bg-maincolor">
              <h3>Platinum</h3>
            </div>
            <div className="plan-desc">
              <div className="plan-content">
                <h4 className="color-main">350</h4>
                <p className="small-text text-left">
                  <i
                    className="color-main fa fa-angle-down"
                    aria-hidden="true"
                  ></i>
                  mb/s
                </p>
                <h4 className="color-main2">250</h4>
                <p className="small-text text-left">
                  <i
                    className="color-main2 fa fa-angle-up"
                    aria-hidden="true"
                  ></i>
                  mb/s
                </p>
              </div>
              <div className="price-icon">
                <img src="images/price-icon01.png" alt="" />
              </div>
            </div>
            <div className="plan-features">
              <ul className="list-bordered">
                <li>VOIP Service</li>
                <li>Online IPTV HD</li>
                <li>Giga Port</li>
                <li>24/7 Support</li>
                <li>Free TV Set Installation</li>
              </ul>
            </div>
            <div className="price-wrap d-flex">
              <span className="plan-sign small-text">usd</span>
              <span className="plan-price color-main2">99</span>
              <span className="plan-decimals small-text">/mo</span>
            </div>
            <div className="plan-button">
              <a href="#" class="btn btn-maincolor">
                <span>Purchase</span>
              </a>
            </div>
          </div>
          <div className="divider-45 d-block d-lg-none"></div>
        </div>
        <div className="col-lg-4 col-12">
          <div className="pricing-plan hero-bg rounded">
            <div className="plan-name text-uppercase bg-maincolor2">
              <h3>Advanced</h3>
            </div>
            <div className="plan-desc">
              <div className="plan-content">
                <h4 className="color-main3">200</h4>
                <p className="small-text">
                  <i
                    className="color-main3 fa fa-angle-down"
                    aria-hidden="true"
                  ></i>
                  mb/s
                </p>
                <h4 className="color-main4">150</h4>
                <p className="small-text">
                  <i
                    className="color-main4 fa fa-angle-up"
                    aria-hidden="true"
                  ></i>
                  mb/s
                </p>
              </div>
              <div className="price-icon">
                <img src="images/price-icon02.png" alt="" />
              </div>
            </div>
            <div className="plan-features">
              <ul className="list-bordered">
                <li>VOIP Service</li>
                <li>Online IPTV</li>
                <li>Giga Port</li>Name
                <li>24/7 Support</li>
                <li>Free TV Set Installation</li>
              </ul>
            </div>
            <div className="price-wrap d-flex">
              <span className="plan-sign small-text">usd</span>
              <span className="plan-price color-main3">79</span>
              <span className="plan-decimals small-text">/mo</span>
            </div>
            <div className="plan-button">
              <a href="#" className="btn btn-maincolor2">
                <span>Purchase</span>
              </a>
            </div>
          </div>
        </div>
        <div className="divider-20 d-block d-md-none"></div>
        <div className="col-lg-4 col-12">
          <div className="pricing-plan hero-bg rounded">
            <div className="plan-name text-uppercase bg-maincolor3">
              <h3>Starter</h3>
            </div>
            <div className="plan-desc">
              <div className="plan-content">
                <h4 clasName="color-main5">100</h4>
                <p className="small-text">
                  <i
                    className="color-main5 fa fa-angle-down"
                    aria-hidden="true"
                  ></i>
                  mb/s
                </p>
                <h4 className="color-main6">50</h4>
                <p className="small-text">
                  <i
                    className="color-main6 fa fa-angle-up"
                    aria-hidden="true"
                  ></i>
                  mb/s
                </p>
              </div>
              <div className="price-icon">
                <img src="images/price-icon03.png" alt="" />
              </div>
            </div>
            <div className="plan-features">
              <ul className="list-bordered">
                <li>VOIP Service</li>
                <li>Online IPTV</li>
                <li>Giga Port</li>
                <li>24/7 Support</li>
                <li>Free TV Set Installation</li>
              </ul>
            </div>
            <div className="price-wrap d-flex">
              <span className="plan-sign small-text">usd</span>
              <span className="plan-price color-main5">49</span>
              <span className="plan-decimals small-text">/mo</span>
            </div>
            <div className="plan-button">
              <a href="#" className="btn btn-maincolor3">
                <span>Purchase</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
