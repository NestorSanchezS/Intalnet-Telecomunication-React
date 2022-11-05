import React from "react";
import { Layout } from "../layout/Layout";
import { HeaderPage } from "./HeaderPage";
import internet_sano from "../assets/images/internet_sano.png";
import internet_sano2 from "../assets/images/internet_sano2.png";
import img2 from "../assets/images/gallery/32.jpg";
import img3 from "../assets/images/gallery/33.jpg";
import img4 from "../assets/images/gallery/34.jpg";

export const InternetSano = () => {
  return (
    <>
      <HeaderPage message="Internet Sano" />
      <section className="ls s-py-70 s-py-lg-120 s-py-xl-150">
        <div className="container">
          <div className="row">
            <div className="row c-gutter-60 c-mt-20 c-mb-0 c-mb-lg-40 mb-5">
              <div className="col-lg-7">
                <img
                  src={internet_sano}
                  alt="internet sano"
                  className="img_internetsano"
                />
                <p className="letter-internetsano">
                  Los niños cada vez tienen acceso a las nuevas tecnologías en
                  edades más tempranas ya que principalmente las usan para
                  llegar hasta recursos educativos o de entretenimiento. Sin
                  embargo, dejar al niño sólo con una tablet o un Smartphone o
                  computador sin llevar a cabo unas simples medidas de
                  seguridad, les puede exponer a ciertos peligros. Es importante
                  que los padres eduquemos a nuestros hijos y les avisemos de
                  los riesgos que supone la navegación en Internet y el uso de
                  las redes sociales. Saber qué puede ocurrir les mantendrá
                  alerta.
                </p>
              </div>
              <div className="col-lg-5">
                <img
                  src={internet_sano2}
                  alt="internet sano2"
                  className="img_internetsano"
                />
              </div>
            </div>
            <div className="col-12">
              <h1 className="text-center widget-title mt-60 mb-5">
                Protección contra la pornografía infantil
              </h1>
              <p className="text-internetsano">
                INTALNET TELECOMUNICACIONES (Inversiones Zuluaga Sejin S.A.S)
                como parte de su compromiso social y en cumplimiento de las
                normas vigentes, informa a sus usuarios sobre la existencia y
                los alcances de la Ley 679 de 2001, y sus decretos
                reglamentario. Si desea conocer el texto completo de la Ley,
                puede ingresar a la secretaría del senado en:
                http://www.secretariasenado.gov.co
              </p>
              <p className="text-internetsano">
                Internet Sano es la campaña del Ministerio de Comunicaciones por
                medio de la cual se pretende generar opinión y conocimiento en
                torno al tema de la explotación infantil en Internet, destacando
                mensajes de prevención, de denuncia, informativos e
                institucionales. Esta campaña del Ministerio de Comunicaciones
                busca que todos los Colombianos comprendan y asimilen lo que
                significa la prevención de la pornografía infantil y juvenil en
                Internet. Dentro de los desarrollos de esta campaña y en
                cumplimiento de la Ley 679 de 2001 y del Decreto 1524 de 2004,
                Colombia Telecomunicaciones adoptó el Código de Conducta para el
                manejo y aprovechamiento de redes globales de información y la
                protección de los menores de edad contra la pornografía infantil
                con el objetivo de prevenir la divulgación de material de
                pornografía infantil a través de las redes y equipos de cómputo
                bajo su directa administración, con el fin de prevenir el acceso
                de menores de edad a cualquier tipo de material pornográfico,
                como herramienta para la lucha contra la pornografía infantil.
              </p>
              <p className="text-internetsano">
                En los siguientes lugares de Internet se pueden realizar las
                denuncias relacionadas con sitios y contenidos de pornografía de
                menores de edad y páginas electrónicas en las que se ofrezcan
                servicios sexuales con niños:
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="ls s-pt-80 s-pb-50  s-pb-lg-90  s-pb-xl-130 c-gutter-30 c-mb-30 service-page cards-internetsano">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="vertical-item rounded rounded-image-top hero-bg content-padding padding-small text-center">
                <div className="item-media">
                  <img src={img2} alt="" />
                  <div className="media-links">
                    <a
                      className="abs-link"
                      title=""
                      href="https://www.mintic.gov.co/"
                    ></a>
                  </div>
                </div>
                <div className="item-content">
                  <h5 className="service-title">
                    <a
                      href="https://www.mintic.gov.co/"
                      className="no-text-decoration"
                    >
                      Ministerio TIC
                    </a>
                  </h5>

                  <p>
                    En TIC confío es la campaña del Ministerio de Comunicaciones
                    para que todos los colombianos comprendamos el significado
                    de la prevención de la pornografía infantil y juvenil en
                    Internet.
                  </p>
                  <h6>Teléfonos:</h6>
                  <p>3443460 en Bogotá</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="vertical-item rounded rounded-image-top hero-bg content-padding padding-small text-center">
                <div className="item-media">
                  <img src={img3} alt="" />
                  <div className="media-links">
                    <a
                      className="abs-link"
                      title=""
                      href="https://www.fiscalia.gov.co"
                    ></a>
                  </div>
                </div>
                <div className="item-content">
                  <h5 className="service-title">
                    <a
                      href="https://www.fiscalia.gov.co"
                      className="no-text-decoration"
                    >
                      FISCALÍA GENERAL DE LA NACIÓN
                    </a>
                  </h5>
                  <h5>Telefono</h5>
                  <p>01 8000 916 111</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="vertical-item rounded rounded-image-top hero-bg content-padding padding-small text-center">
                <div className="item-media">
                  <img src={img4} alt="" />
                  <div className="media-links">
                    <a
                      className="abs-link"
                      title=""
                      href="https://www.icbf.gov.co/"
                    ></a>
                  </div>
                </div>
                <div className="item-content">
                  <h5 className="service-title">
                    <a
                      href="https://www.icbf.gov.co/"
                      className="no-text-decoration"
                    >
                      INSTITUTO COLOMBIANO DE BIENESTAR FAMILIAR: ICBF
                    </a>
                  </h5>

                  <h5>Linea gratuita nacional: Prevención de abuso sexual:</h5>
                  <p>(57 1) 01 8000 112 440</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
