import React from "react";
import { HeaderPage } from "../components/HeaderPage";

export const Pqr = () => {
  return (
    <>
      <HeaderPage message="PQR´S" />
      <section class="ls s-py-70 s-pb-lg-120 s-pb-xl-160 c-gutter-60 container-px-30">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 animate" data-animation="scaleAppear">
              <form
                class="contact-form c-mb-15 c-gutter-15"
                method="post"
                action="/"
              >
                <div class="row">
                  <div class="col-sm-12">
                    <h4>Peticiones, Quejas y Reclamos</h4>
                  </div>
                </div>

                <div class="row">
                  <div class="col-sm-6">
                    <div class="form-group has-placeholder">
                      <label for="name">
                        Nombres <span class="required">*</span>
                      </label>
                      <input
                        type="text"
                        aria-required="true"
                        size="30"
                        value=""
                        name="name"
                        id="name"
                        class="form-control"
                        placeholder="Nombres"
                      />
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="form-group has-placeholder">
                      <label for="phone">
                        celular<span class="required">*</span>
                      </label>
                      <input
                        type="text"
                        aria-required="true"
                        size="30"
                        value=""
                        name="phone"
                        id="phone"
                        class="form-control"
                        placeholder="Celular"
                      />
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-sm-6">
                    <div class="form-group has-placeholder">
                      <label for="email">
                        Email<span class="required">*</span>
                      </label>
                      <input
                        type="email"
                        aria-required="true"
                        size="30"
                        value=""
                        name="email"
                        id="email"
                        class="form-control"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="form-group has-placeholder">
                      <label for="subject">
                        Dirección<span class="required">*</span>
                      </label>
                      <input
                        type="text"
                        aria-required="true"
                        size="30"
                        value=""
                        name="subject"
                        id="subject"
                        class="form-control"
                        placeholder="Dirección residencia"
                      />
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-sm-12">
                    <div class="form-group has-placeholder">
                      <label for="message">PQR</label>
                      <textarea
                        aria-required="true"
                        rows="6"
                        cols="45"
                        name="message"
                        id="message"
                        class="form-control"
                        placeholder="PQR"
                      ></textarea>
                    </div>
                  </div>
                </div>

                <div class="row mt-20">
                  <div class="col-sm-12">
                    <div class="form-group has-placeholder">
                      <button
                        type="submit"
                        id="contact_form_submit"
                        name="contact_submit"
                        class="btn btn-maincolor"
                      >
                        <span>Enviar Mensaje</span>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>

            <div class="divider-40 d-block d-lg-none"></div>
            <div class="col-lg-4 animate" data-animation="scaleAppear">
              <h4>Datos de contacto</h4>

              <p class="icon-inline">
                <span class="icon-styled color-main">
                  <i class="fa fa-map-marker"></i>
                </span>
                <span>
                  Cr. 25 No. 23-74 Calle Principal Barrio la Pradera, Montería,
                  CO
                </span>
              </p>
              <p class="icon-inline">
                <span class="icon-styled color-main">
                  <i class="fa fa-map-marker"></i>
                </span>
                <span>Cr. 13 # 5-31 Barrio El Prado, Tierralta, CO</span>
              </p>
              <p class="icon-inline">
                <span class="icon-styled color-main">
                  <i class="fa fa-map-marker"></i>
                </span>
                <span>Cr. 14 # 12-26 Barrio Centro, Valencia, CO</span>
              </p>

              <p class="icon-inline">
                <span class="icon-styled color-main">
                  <i class="fa fa-phone"></i>
                </span>
                <span>314 804 2601, Montería.</span>
              </p>
              <p class="icon-inline">
                <span class="icon-styled color-main">
                  <i class="fa fa-phone"></i>
                </span>
                <span>311 393 4218, Tierralta.</span>
              </p>
              <p class="icon-inline">
                <span class="icon-styled color-main">
                  <i class="fa fa-phone"></i>
                </span>
                <span>315 252 2215, Valencia.</span>
              </p>

              <p class="icon-inline">
                <span class="icon-styled color-main">
                  <i class="fa fa-pencil"></i>
                </span>
                <span>intalnet.monteria@gmail.com</span>
              </p>

              <h4>Horario de atención</h4>

              <div class="row c-gutter-30">
                <div class="col-6">
                  <span class="icon-styled color-main pr-2">
                    <i class="fa fa-clock-o"></i>
                  </span>
                  <span class="color-darkgrey fw-500">Lunes - Viernes</span>
                </div>
                <div class="col-6">8:00am - 12:00m - 2:00pm - 6:00pm</div>

                <div class="col-6">
                  <span class="icon-styled color-main pr-2">
                    <i class="fa fa-clock-o"></i>
                  </span>
                  <span class="color-darkgrey fw-500">Sábados</span>
                </div>
                <div class="col-6">8:00-12:00</div>

                <div class="col-6">
                  <span class="icon-styled color-main pr-2">
                    <i class="fa fa-close"></i>
                  </span>
                  <span class="color-darkgrey fw-500">Domingo</span>
                </div>
                <div class="col-6">Closed</div>
                <div class="col-6">
                  <span class="icon-styled color-main pr-2">
                    <i class="fa fa-close"></i>
                  </span>
                  <span class="color-darkgrey fw-500">Días festivos</span>
                </div>
                <div class="col-6">Closed</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
