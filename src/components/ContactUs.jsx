import React from "react";
import { SERVICES } from "../constans";
import { useIntalnetContext } from "../hooks/useIntalnetContext";
import { HeaderPage } from "./HeaderPage";

export const ContactUs = () => {
  return (
    <>
      <HeaderPage message="Contactenos" />
      <section className="ls s-py-80 s-py-lg-120 s-py-xl-160 c-gutter-100 booking-form container-px-30">
        <div className="container">
          <div className="row">
            <div className="col-lg-8" data-animation="scaleAppear">
              <h5 className="text-center text-md-left special-heading">
                Únete a Intalnet hoy <br />
                <span className="text-uppercase">Conectate ahora</span>
              </h5>
              <div className="divider-50 d-none d-xl-block"></div>
              <form
                className="contact-form c-mb-10 c-mb-md-20 c-gutter-20 text-center text-md-left"
                method="post"
                action="/"
              >
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group has-placeholder">
                      <label htmlFor="select">Seleccione</label>
                      <i className="fa fa-gear color-main"></i>
                      <select
                        className="form-control"
                        id="select"
                        name="service"
                      >
                        {SERVICES.map((service) => (
                          <option key={service.id}>{service.name}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group has-placeholder">
                      <label htmlFor="address">Direccón</label>
                      <i className="fa fa-home color-main"></i>
                      <input
                        type="text"
                        aria-required="true"
                        size="30"
                        name="address"
                        id="address"
                        className="form-control"
                        placeholder="Dirección"
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group has-placeholder">
                      <label htmlFor="name">Full Name </label>
                      <i className="fa fa-user color-main"></i>
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
                      <label htmlFor="phone">Phone Number</label>
                      <i className="fa fa-phone color-main"></i>
                      <input
                        type="text"
                        aria-required="true"
                        size="30"
                        name="phone"
                        id="phone"
                        className="form-control"
                        placeholder="Numero celular
                        "
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-12">
                    <div className="form-group has-placeholder">
                      <label htmlFor="email">Email address</label>
                      <i className="fa fa-envelope color-main"></i>
                      <input
                        type="email"
                        aria-required="true"
                        size="30"
                        name="email"
                        id="email"
                        className="form-control"
                        placeholder="E-mail"
                      />
                    </div>
                  </div>

                  <div className="col-sm-12">
                    <div className="form-group has-placeholder">
                      <label htmlFor="message">Message</label>
                      <i className="fa fa-edit color-main"></i>
                      <textarea
                        aria-required="true"
                        rows="6"
                        cols="45"
                        name="message"
                        id="message"
                        className="form-control"
                        placeholder="Tu mensaje"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="exampleCheck1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleCheck1"
                      >
                        Acepto que mis datos enviados se recopilen y almacenen.
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12 text-center text-md-left mt-30">
                    <div className="form-group">
                      <button
                        type="submit"
                        id="contact_form_submit"
                        name="contact_submit"
                        className="btn btn-maincolor"
                      >
                        <span>Enviar</span>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
