import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { HeaderPage } from "../components/HeaderPage";
import { Plan } from "../components/Plan";

export const CityService = () => {
  const { id } = useParams();
  const [infoCity, setInfoCity] = useState([]);
  useEffect(() => {
    try {
      const getServerPlansMonteria = async () => {
        const url = `http://localhost:3300/api/v1/cities/${id}`;
        const responseMonteria = await fetch(url);
        const dataMonteria = await responseMonteria.json();
        setInfoCity(dataMonteria);
      };
      getServerPlansMonteria();
    } catch (error) {
      console.log(error);
    }
  }, [id]);
  const { plans, name } = infoCity;
  return (
    <>
      <HeaderPage message={name} />
      <section className="s-py-80 s-py-lg-120 s-py-xl-160 ls ms">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2" id="price">
              <h5 className="special-heading text-center">Escoge</h5>
              <h1 className="text-center mt-2">Plan</h1>
              <p className="text-center big ">
                Prepárese para más potencial, más oportunidades y más de todo lo
                que espera del proveedor de Internet.
              </p>
            </div>
          </div>
          <div className="divider-45 d-none d-lg-block"></div>
          <div className="row c-gutter-60 container-card">
            {plans &&
              plans.map((plane) => <Plan key={plane.id} plane={plane} />)}
          </div>
        </div>
      </section>
    </>
  );
};
