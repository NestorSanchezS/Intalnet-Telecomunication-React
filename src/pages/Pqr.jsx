import React from "react";
import { Formik } from "formik";
import { HeaderPage } from "../components/HeaderPage";
import { formPqrSchema } from "../schemas";

const onSubmit = async (values, actions) => {
  console.log(values);
  console.log(actions);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

export const Pqr = () => {
  return (
    <>
      <HeaderPage message="PQR´S" />
      <section className="ls s-py-70 s-pb-lg-120 s-pb-xl-160 c-gutter-60 container-px-30">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 animate" data-animation="scaleAppear">
              <Formik
                initialValues={{
                  namepqr: "",
                  phonepqr: "",
                  emailpqr: "",
                  addresspqr: "",
                  messagepqr: "",
                }}
                validationSchema={formPqrSchema}
                onSubmit={onSubmit}
              >
                {({
                  isSubmitting,
                  touched,
                  handleSubmit,
                  errors,
                  getFieldProps,
                }) => (
                  <form
                    onSubmit={handleSubmit}
                    className="contact-form c-mb-15 c-gutter-15"
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
                          <label htmlFor="namepqr">
                            Nombres <span className="required">*</span>
                          </label>
                          <input
                            type="text"
                            aria-required="true"
                            size="30"
                            name="namepqr"
                            id="namepqr"
                            className={`form-control ${
                              errors.namepqr && touched.namepqr
                                ? "input-error"
                                : ""
                            }`}
                            placeholder="Nombres"
                            {...getFieldProps("namepqr")}
                          />
                          {errors.namepqr && touched.namepqr && (
                            <p className="error">{errors.namepqr}</p>
                          )}
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group has-placeholder">
                          <label htmlFor="phonepqr">
                            celular<span className="required">*</span>
                          </label>
                          <input
                            type="text"
                            aria-required="true"
                            size="30"
                            name="phonepqr"
                            id="phone"
                            className={`form-control ${
                              errors.phonepqr && touched.phonepqr
                                ? "input-error"
                                : ""
                            }`}
                            placeholder="Celular"
                            {...getFieldProps("phonepqr")}
                          />
                          {errors.phonpqr && touched.phonepqr && (
                            <p className="error">{errors.phonepqr}</p>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-sm-6">
                        <div className="form-group has-placeholder">
                          <label htmlFor="emailpqr">
                            Email<span className="required">*</span>
                          </label>
                          <input
                            type="email"
                            aria-required="true"
                            size="30"
                            name="emailpqr"
                            id="email"
                            className={`form-control ${
                              errors.emailpqr && touched.emailpqr
                                ? "input-error"
                                : ""
                            }`}
                            placeholder="Email"
                            {...getFieldProps("emailpqr")}
                          />
                          {errors.emailpqr && touched.emailpqr && (
                            <p className="error">{errors.emailpqr}</p>
                          )}
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group has-placeholder">
                          <label htmlFor="addresspqr">
                            Dirección<span className="required">*</span>
                          </label>
                          <input
                            type="text"
                            aria-required="true"
                            size="30"
                            name="addresspqr"
                            id="addresspqr"
                            className={`form-control ${
                              errors.addresspqr && touched.addresspqr
                                ? "input-error"
                                : ""
                            }`}
                            placeholder="Dirección residencia"
                            {...getFieldProps("addresspqr")}
                          />
                          {errors.addresspqr && touched.addresspqr && (
                            <p className="error">{errors.addresspqr}</p>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-sm-12">
                        <div className="form-group has-placeholder">
                          <label htmlFor="messagepqr">PQR</label>
                          <textarea
                            aria-required="true"
                            rows="6"
                            cols="45"
                            name="messagepqr"
                            id="messagepqr"
                            className={`form-control ${
                              errors.messagepqr && touched.messagepqr
                                ? "input-error"
                                : ""
                            }`}
                            placeholder="PQR"
                            {...getFieldProps("messagepqr")}
                          ></textarea>
                          {errors.messagepqr && touched.messagepqr && (
                            <p className="error">{errors.messagepqr}</p>
                          )}
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
                            disabled={isSubmitting}
                          >
                            <span>Enviar Mensaje</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                )}
              </Formik>
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
