import React from "react";
import plan03 from "../assets/images/price-icon01.png";
import plan02 from "../assets/images/price-icon02.png";
import plan01 from "../assets/images/price-icon03.png";

export const Plan = () => {
  return (
    <>
      <div className="row c-gutter-60 container-card">
        <div className="col-lg-4 col-12">
          <div className="pricing-plan hero-bg rounded">
            <div className="plan-name text-uppercase bg-maincolor">
              <h3>Premium</h3>
            </div>
            <div className="plan-desc">
              <div className="plan-content">
                <h4 className="color-main">120</h4>
                <p className="small-text text-left">
                  <i
                    className="color-main fa fa-angle-down"
                    aria-hidden="true"
                  ></i>
                  mb/s
                </p>
                <h4 className="color-main2">120</h4>
                <p className="small-text text-left">
                  <i
                    className="color-main2 fa fa-angle-up"
                    aria-hidden="true"
                  ></i>
                  mb/s
                </p>
              </div>
              <div className="price-icon">
                <img src={plan03} alt="" />
              </div>
            </div>
            <div className="plan-features">
              <ul className="list-bordered">
                <li>Sorporte 24/7</li>
                <li>47 Canales TV</li>
                <li>Canales HD y SD</li>
              </ul>
            </div>
            <div className="price-wrap d-flex">
              <span className="plan-sign small-text">$</span>
              <span className="plan-price color-main2">120.000</span>
              <span className="plan-decimals small-text"></span>
            </div>
            <div className="plan-button">
              <a href="#" class="btn btn-maincolor">
                <span>Lo quiero!</span>
              </a>
            </div>
          </div>
          <div className="divider-45 d-block d-lg-none"></div>
        </div>
        <div className="col-lg-4 col-12">
          <div className="pricing-plan hero-bg rounded">
            <div className="plan-name text-uppercase bg-maincolor2">
              <h3>Plus</h3>
            </div>
            <div className="plan-desc">
              <div className="plan-content">
                <h4 className="color-main3">80</h4>
                <p className="small-text">
                  <i
                    className="color-main3 fa fa-angle-down"
                    aria-hidden="true"
                  ></i>
                  mb/s
                </p>
                <h4 className="color-main4">80</h4>
                <p className="small-text">
                  <i
                    className="color-main4 fa fa-angle-up"
                    aria-hidden="true"
                  ></i>
                  mb/s
                </p>
              </div>
              <div className="price-icon">
                <img src={plan02} alt="" />
              </div>
            </div>
            <div className="plan-features">
              <ul className="list-bordered">
                <li>Sorporte 24/7</li>
                <li>47 Canales TV</li>
                <li>Canales HD y SD</li>
              </ul>
            </div>
            <div className="price-wrap d-flex">
              <span className="plan-sign small-text">$</span>
              <span className="plan-price color-main3">80.000</span>
              <span className="plan-decimals small-text"></span>
            </div>
            <div className="plan-button">
              <a href="#" className="btn btn-maincolor2">
                <span>Lo Quiero!</span>
              </a>
            </div>
          </div>
        </div>
        <div className="divider-20 d-block d-md-none"></div>
        <div className="col-lg-4 col-12">
          <div className="pricing-plan hero-bg rounded">
            <div className="plan-name text-uppercase bg-maincolor3">
              <h3>Básico</h3>
            </div>
            <div className="plan-desc">
              <div className="plan-content">
                <h4 clasName="color-main5">40</h4>
                <p className="small-text">
                  <i
                    className="color-main5 fa fa-angle-down"
                    aria-hidden="true"
                  ></i>
                  mb/s
                </p>
                <h4 className="color-main6">40</h4>
                <p className="small-text">
                  <i
                    className="color-main6 fa fa-angle-up"
                    aria-hidden="true"
                  ></i>
                  mb/s
                </p>
              </div>
              <div className="price-icon">
                <img src={plan01} alt="" />
              </div>
            </div>
            <div className="plan-features">
              <ul className="list-bordered">
                <li>Sorporte Especializado</li>
                <li>47 Canales TV</li>
                <li>Canales HD y SD</li>
              </ul>
            </div>
            <div className="price-wrap d-flex">
              <span className="plan-sign small-text">$</span>
              <span className="plan-price color-main5">60.000</span>
              <span className="plan-decimals small-text"></span>
            </div>
            <div className="plan-button">
              <a href="#" className="btn btn-maincolor3">
                <span>Lo Quiero!</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};