import React from "react";
import intalnet from "../assets/INTALNET-TELECOMUNICACIONES.png";
import valores from "../assets/valoresintalnet.png";

export const OurCompany = () => {
  return (
    <>
      <section className="page_title cs s-pt-60 s-pb-10 s-pt-lg-130 s-pb-lg-60 page_title text-center">
        <div className="container-fluid">
          <div className="row">
            <div className="divider-60"></div>

            <div className="col-md-12 text-center">
              <h1>¿Quienes Somos?</h1>
            </div>

            <div className="divider-50"></div>
          </div>
        </div>
        <ol className="breadcrumb full-width">
          {/* <li className="breadcrumb-item">
            <a href="./">Inicio</a>
          </li> */}

          <li className="breadcrumb-item active"></li>
        </ol>
      </section>
      <section className="s-py-80 s-py-lg-120 s-py-xl-60 ls ms">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 widget">
              <p className="text-center big">
                Somos INTALNET TELECOMUNICACIONES, creada a partir del 11 de
                septiembre de 2015 en Montería - Córdoba, una empresa prestadora
                de servicios de telecomunicaciones para cubrir las necesidades
                de conexión y tecnologías de la información en algunos
                municipios del departamento de Córdoba.
                <img src={intalnet} alt="logo-intalnet" />
              </p>
              <h1 className="text-center widget-title">MISION</h1>
              <p className="text-center big">
                Brindar a los usuarios el servicio de conexión para el acceso a
                internet, a través de equipos altamente tecnológicos y
                confiables, con el fin de garantizar la calidad, velocidad y
                oportunidad del servicio, llegando a los hogares, instituciones
                publicas, empresas privadas, y todos los sectores que requieran
                alinearse e ingresar a la nueva era digital, creándole a la
                sociedad oportunidades de acceso a tecnologías de la información
                y comunicación
              </p>
              <h1 className="text-center widget-title mt-60">VISION</h1>
              <p className="text-center big ">
                Ser la empresa líder en la región del Alto Sinú, con tecnología
                a la vanguardia de las telecomunicaciones, reconocidos por la
                calidad del servicio, la excelencia y el acompañamiento
                permanente.
              </p>
              <h1 className="text-center widget-title mt-60">VALORES</h1>
              <span className="valores-intalnet">
                <img src={valores} alt="logo-intalnet" />
              </span>
            </div>
          </div>
          <div className="divider-45 d-none d-lg-block"></div>
        </div>
      </section>
    </>
  );
};
