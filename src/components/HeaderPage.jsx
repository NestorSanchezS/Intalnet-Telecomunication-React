import React from "react";
import Particles from "react-tsparticles";

export const HeaderPage = ({ message }) => {
  return (
    <section className="page_title cs s-pt-60 s-pb-10 s-pt-lg-130 s-pb-lg-60 page_title text-center">
      {/* <Particles
        options={{
          background: {
            color: "#0e387a",
          },
          fpsLimit: 60,
          interactivity: {
            detectsOn: "canvas",
            events: {
              resize: true,
            },
          },
          particles: {
            color: {
              value: "9fafca",
            },
            number: {
              density: {
                enable: true,
                area: 1080,
              },
              limit: 0,
              value: 400,
            },
            opacity: {
              animation: {
                enable: true,
                minimumValue: 0.05,
                speed: 1,
                sync: false,
              },
              random: {
                enable: true,
                minimumValue: 0.05,
              },
              value: 1,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: {
                enable: true,
                minimumValue: 0.5,
              },
              value: 1,
            },
          },
        }}
      /> */}
      <div className="container-fluid">
        <div className="row">
          <div className="divider-60"></div>

          <div className="col-md-12 text-center">
            <h1>{message}</h1>
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

        <li className="breadcrumb-item active"></li>
      </ol>
    </section>
  );
};
