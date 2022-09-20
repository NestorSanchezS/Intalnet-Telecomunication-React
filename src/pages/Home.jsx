import React from "react";
import { BannerTv } from "../components/BannerTv";
import { PageSlider } from "../components/PageSlider";
import service01 from "../assets/images/service/01.png";
import service02 from "../assets/images/service/02.jpg";
import service03 from "../assets/images/service/03.jpg";
import service04 from "../assets/images/service/04.jpg";

export const Home = () => {
  return (
    <>
      <PageSlider />
      <section
        className="s-pt-60 s-pb-50 s-pt-lg-160 s-pb-lg-110 ls ms service-part c-gutter-0 c-mb-20 c-mb-lg-60 text-center text-lg-left"
        id="services"
      >
        <div className="divider-5 d-block d-lg-none"></div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-lg-4 text-center text-lg-right">
              <div className="service-title d-flex d-lg-block">
                <span className="small-width color1">01</span>
                <div>
                  <h6 className="fs-12 text-uppercase fw-400">full hd & SD</h6>
                  <h1 className="mt-1">Cable TV</h1>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="service-image text-center">
                <img src={service01} alt="Imagen de serivicio" />
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <p className="service-text fs-20">
                Contamos con canales HD y una gran variedad de contenido. Puedes
                encontrar canales de Peliculas, deportes, infantiles, religiosos
                y muchos más.
              </p>
            </div>
          </div>
          <div className="divider-20 d-block d-lg-none"></div>
          <div className="row align-items-center service02">
            <div className="col-12 col-lg-4 order-lg-3">
              <div className="service-title d-flex d-lg-block">
                <span className="small-width color2">02</span>
                <div>
                  <h6 className="fs-12 text-uppercase fw-400">
                    Canales HD y SD
                  </h6>
                  <h1 className="mt-1">Televisión Digital</h1>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-4 order-lg-2">
              <div className="service-image text-center">
                <img src={service02} alt="Imagen de serivicio" />
              </div>
            </div>
            <div className="col-12 col-lg-4 text-center text-lg-right order-lg-1">
              <p className="service-text fs-20">
                Disfruta de la mejor television digital del municipio, todo por
                fibra fibra optica. Sin clausulas de permanencia.
              </p>
            </div>
          </div>
          <div className="divider-20 d-block d-lg-none"></div>
          <div className="row align-items-center service03">
            <div className="col-12 col-lg-4 ">
              <div className="service-title d-flex d-lg-block text-center text-lg-right">
                <span className="small-width color3">03</span>
                <div>
                  <h6 className="fs-12 text-uppercase fw-400">
                    Alta Velocidad
                  </h6>
                  <h1 className="mt-1">Internet</h1>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="service-image text-center">
                <img src={service03} alt="Imagen de serivicio" />
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <p className="service-text fs-20">
                Ofrecemos internet bancha y planes desde lo mas básicos hasta
                los más avanzados. Navegacion ilimitada a bajo costo.
              </p>
            </div>
          </div>
          <div className="divider-20 d-block d-lg-none"></div>
          <div className="row align-items-center service04">
            <div className="col-12 col-lg-4 order-lg-3">
              <div className="service-title d-flex d-lg-block">
                <span className="small-width color4">04</span>
                <div>
                  <h6 className="fs-12 text-uppercase fw-400">
                    Servicio Internet
                  </h6>
                  <h1 className="mt-1">Fibra OPtica</h1>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4 order-lg-2">
              <div className="service-image text-center">
                <img src={service04} alt="Imagen de serivicio" />
              </div>
            </div>
            <div className="col-12 col-lg-4 text-center text-lg-right order-lg-1">
              <p className="service-text fs-20">
                Te ofrecemos conexión a internet a alta velocidad y último en
                tecnología. Velocidad simétrica. Servicio tecnico oportuno.
              </p>
            </div>
          </div>
        </div>
        <div className="divider-10 d-block d-lg-none"></div>
        <div className="divider-50 d-block"></div>
      </section>

      <section className="ls s-pt-80 s-pb-20 s-pt-lg-120 s-pb-lg-20 s-pt-xl-155 s-pb-xl-60 c-mb-30 c-mb-lg-50">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="row">
                <div className="col-lg-4">
                  <div className="icon-box text-center bordered p-30">
                    <div className="icon-styled color-main icon-bordered bordered fs-32">
                      <i className="fa fa-phone"></i>
                    </div>
                    <h4>Soporte Inmediato</h4>
                    <p>
                      Nos encargamos siempre en darle soporte de manera
                      inmediata y efiente a nuestros clientes.
                    </p>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="icon-box text-center bordered p-30">
                    <div className="icon-styled color-darkgrey icon-bordered fs-32">
                      <i className="fa fa-cog"></i>
                    </div>
                    <h4>Soporte Especializado</h4>
                    <p>
                      Marcamos la diferencia dando los mejores soluciones
                      operativas a los usuarios.
                    </p>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="icon-box text-center bordered p-30">
                    <div className="icon-styled color-main3 icon-bordered fs-32">
                      <i className="fa fa-heart-o"></i>
                    </div>
                    <h4>Rápidos y Eficientes</h4>
                    <p>
                      Duante varios años nos ha apasiado lograr los mejores
                      resultados.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <BannerTv />
    </>
  );
};
