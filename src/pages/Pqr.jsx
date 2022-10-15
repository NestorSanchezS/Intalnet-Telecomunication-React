import React from "react";
import { HeaderPage } from "../components/HeaderPage";

export const Pqr = () => {
  return (
    <>
      <HeaderPage message="PQR´S" />
      <section className="ls s-py-70 s-pb-lg-120 s-pb-xl-160 c-gutter-60 container-px-30">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 animate" data-animation="scaleAppear">
              <form
                className="contact-form c-mb-15 c-gutter-15"
                method="post"
                action="/"
              >
                <div className="row">
                  <div className="col-sm-12">
                    <h4>Peticiones, Quejas y Reclamos</h4>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group has-placeholder">
                      <label htmlFor="name">
                        Nombres <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        aria-required="true"
                        size="30"
                        name="name"
                        id="name"
                        className="form-control"
                        placeholder="Nombres"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group has-placeholder">
                      <label htmlFor="phone">
                        celular<span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        aria-required="true"
                        size="30"
                        name="phone"
                        id="phone"
                        className="form-control"
                        placeholder="Celular"
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group has-placeholder">
                      <label htmlFor="email">
                        Email<span className="required">*</span>
                      </label>
                      <input
                        type="email"
                        aria-required="true"
                        size="30"
                        name="email"
                        id="email"
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group has-placeholder">
                      <label htmlFor="subject">
                        Dirección<span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        aria-required="true"
                        size="30"
                        name="subject"
                        id="subject"
                        className="form-control"
                        placeholder="Dirección residencia"
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-12">
                    <div className="form-group has-placeholder">
                      <label htmlFor="message">PQR</label>
                      <textarea
                        aria-required="true"
                        rows="6"
                        cols="45"
                        name="message"
                        id="message"
                        className="form-control"
                        placeholder="PQR"
                      ></textarea>
                    </div>
                  </div>
                </div>

                <div className="row mt-20">
                  <div className="col-sm-12">
                    <div className="form-group has-placeholder">
                      <button
                        type="submit"
                        id="contact_form_submit"
                        name="contact_submit"
                        className="btn btn-maincolor"
                      >
                        <span>Enviar Mensaje</span>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>

            <div className="divider-40 d-block d-lg-none"></div>
            <div className="col-lg-4 animate" data-animation="scaleAppear">
              <h4>Datos de contacto</h4>

              <p className="icon-inline">
                <span className="icon-styled color-main">
                  <i className="fa fa-map-marker"></i>
                </span>
                <span>
                  Cr. 25 No. 23-74 Calle Principal Barrio la Pradera, Montería,
                  CO
                </span>
              </p>
              <p className="icon-inline">
                <span className="icon-styled color-main">
                  <i className="fa fa-map-marker"></i>
                </span>
                <span>Cr. 13 # 5-31 Barrio El Prado, Tierralta, CO</span>
              </p>
              <p className="icon-inline">
                <span className="icon-styled color-main">
                  <i className="fa fa-map-marker"></i>
                </span>
                <span>Cr. 14 # 12-26 Barrio Centro, Valencia, CO</span>
              </p>

              <p className="icon-inline">
                <span className="icon-styled color-main">
                  <i className="fa fa-phone"></i>
                </span>
                <span>314 804 2601, Montería.</span>
              </p>
              <p className="icon-inline">
                <span className="icon-styled color-main">
                  <i className="fa fa-phone"></i>
                </span>
                <span>311 393 4218, Tierralta.</span>
              </p>
              <p className="icon-inline">
                <span className="icon-styled color-main">
                  <i className="fa fa-phone"></i>
                </span>
                <span>315 252 2215, Valencia.</span>
              </p>

              <p className="icon-inline">
                <span className="icon-styled color-main">
                  <i className="fa fa-pencil"></i>
                </span>
                <span>intalnet.monteria@gmail.com</span>
              </p>

              <h4>Horario de atención</h4>

              <div className="row c-gutter-30">
                <div className="col-6">
                  <span className="icon-styled color-main pr-2">
                    <i className="fa fa-clock-o"></i>
                  </span>
                  <span className="color-darkgrey fw-500">Lunes - Viernes</span>
                </div>
                <div className="col-6">8:00am - 12:00m - 2:00pm - 6:00pm</div>

                <div className="col-6">
                  <span className="icon-styled color-main pr-2">
                    <i className="fa fa-clock-o"></i>
                  </span>
                  <span className="color-darkgrey fw-500">Sábados</span>
                </div>
                <div className="col-6">8:00-12:00</div>

                <div className="col-6">
                  <span className="icon-styled color-main pr-2">
                    <i className="fa fa-close"></i>
                  </span>
                  <span className="color-darkgrey fw-500">Domingo</span>
                </div>
                <div className="col-6">Closed</div>
                <div className="col-6">
                  <span className="icon-styled color-main pr-2">
                    <i className="fa fa-close"></i>
                  </span>
                  <span className="color-darkgrey fw-500">Días festivos</span>
                </div>
                <div className="col-6">Closed</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
