import React from "react";
import { Formik } from "formik";
import { SERVICES } from "../constans";
import { HeaderPage } from "../components/HeaderPage";
import { formContactusSchema } from "../schemas";

const onSubmit = async (values, actions) => {
  console.log(values);
  console.log(actions);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

export const ContactUs = () => {
  // const {  } =
  //   useFormik({
  //     initialValues: {},
  //     validationSchema: formContactusSchema,
  //     onSubmit,
  //   });
  // console.log(errors);

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
              <Formik
                initialValues={{
                  servi: "",
                  address: "",
                  name: "",
                  phone: "",
                  email: "",
                  message: "",
                }}
                validationSchema={formContactusSchema}
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
                    className="contact-form c-mb-10 c-mb-md-20 c-gutter-20 text-center text-md-left"
                    action="/"
                  >
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="form-group has-placeholder">
                          <label htmlFor="select">Seleccione</label>
                          <i className="fa fa-gear color-main"></i>
                          <select
                            className={`form-control ${
                              errors.servi && touched.servi ? "input-error" : ""
                            }`}
                            id="select"
                            {...getFieldProps("servi")}
                          >
                            {SERVICES.map((service) => (
                              <option value={service.value} key={service.id}>
                                {service.name}
                              </option>
                            ))}
                          </select>
                          {errors.servi && touched.servi && (
                            <p className="error">{errors.address}</p>
                          )}
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
                            id="address"
                            placeholder="Dirección"
                            className={`form-control ${
                              errors.address && touched.address
                                ? "input-error"
                                : ""
                            }`}
                            {...getFieldProps("address")}
                          />
                          {errors.address && touched.address && (
                            <p className="error">{errors.address}</p>
                          )}
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
                            id="name"
                            placeholder="Nombres"
                            className={`form-control ${
                              errors.name && touched.name ? "input-error" : ""
                            }`}
                            {...getFieldProps("name")}
                          />
                          {errors.name && touched.name && (
                            <p className="error">{errors.name}</p>
                          )}
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
                            id="phone"
                            className={`form-control ${
                              errors.phone && touched.phone ? "input-error" : ""
                            }`}
                            placeholder="Numero celular"
                            {...getFieldProps("phone")}
                          />
                          {errors.phone && touched.phone && (
                            <p className="error">{errors.phone}</p>
                          )}
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
                            id="email"
                            className={` ${
                              errors.email && touched.email ? "input-error" : ""
                            } form-control`}
                            placeholder="E-mail"
                            {...getFieldProps("email")}
                          />
                          {errors.email && touched.email && (
                            <p className="error">{errors.email}</p>
                          )}
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
                            id="message"
                            className={`form-control ${
                              errors.message && touched.message
                                ? "input-error"
                                : ""
                            }`}
                            placeholder="Tu mensaje"
                            {...getFieldProps("message")}
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
                            Acepto que mis datos enviados se recopilen y
                            almacenen.
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12 text-center text-md-left mt-30">
                        <div className="form-group">
                          <button
                            type="submit"
                            id="contact_form_submit button_submit-disabled"
                            name="contact_submit"
                            className="btn btn-maincolor"
                            disabled={isSubmitting}
                          >
                            <span>Enviar</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
