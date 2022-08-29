import React from "react";
import { Plan } from "./Plan";

export const Services = () => {
  return (
    <>
      <section className="page_title cs s-pt-60 s-pb-10 s-pt-lg-130 s-pb-lg-60 page_title text-center">
        <div className="container-fluid">
          <div className="row">
            <div className="divider-60"></div>

            <div className="col-md-12 text-center">
              <h1>Montería - Córdoba</h1>
            </div>

            <div className="divider-50"></div>
          </div>
        </div>
        <ol className="breadcrumb full-width">
          {/* <li class="breadcrumb-item">
      <a href="./">Home</a>
    </li>
    <li class="breadcrumb-item">
      <a href="#">Pages</a>
    </li>
    <li class="breadcrumb-item active">Contact 4</li> */}
        </ol>
      </section>
      <section className="s-py-80 s-py-lg-120 s-py-xl-160 ls ms">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2" id="price">
              <h5 className="special-heading text-center">Escoge</h5>
              <h1 className="text-center mt-2">Paquete</h1>
              <p class="text-center big ">
                Prepárese para más potencial, más oportunidades y más de todo lo
                que espera del proveedor de Internet.
              </p>
            </div>
          </div>
          <div className="divider-45 d-none d-lg-block"></div>
          <Plan />
        </div>
      </section>
    </>
  );
};
