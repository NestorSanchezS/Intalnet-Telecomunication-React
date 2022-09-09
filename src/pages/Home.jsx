import React from "react";
import { BannerTv } from "../components/BannerTv";
import { PageSlider } from "../components/PageSlider";

export const Home = () => {
  return (
    <>
      <PageSlider />
      <BannerTv />
      <section class="ls s-pt-80 s-pb-20 s-pt-lg-120 s-pb-lg-20 s-pt-xl-155 s-pb-xl-60 c-mb-30 c-mb-lg-50">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="row">
                <div class="col-lg-4">
                  <div class="icon-box text-center bordered p-30">
                    <div class="icon-styled color-main icon-bordered bordered fs-32">
                      <i class="fa fa-phone"></i>
                    </div>
                    <h4>Soporte Inmediato</h4>
                    <p>
                      Nos encargamos siempre en darle soporte de manera
                      inmediata y efiente a nuestros clientes.
                    </p>
                  </div>
                </div>

                <div class="col-lg-4">
                  <div class="icon-box text-center bordered p-30">
                    <div class="icon-styled color-darkgrey icon-bordered fs-32">
                      <i class="fa fa-cog"></i>
                    </div>
                    <h4>Soporte Especializado</h4>
                    <p>
                      Marcamos la diferencia dando los mejores soluciones
                      operativas a los usuarios.
                    </p>
                  </div>
                </div>

                <div class="col-lg-4">
                  <div class="icon-box text-center bordered p-30">
                    <div class="icon-styled color-main3 icon-bordered fs-32">
                      <i class="fa fa-heart-o"></i>
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
    </>
  );
};
