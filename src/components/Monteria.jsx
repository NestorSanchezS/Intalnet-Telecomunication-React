import React, { useState, useEffect } from "react";
import { HeaderPage } from "./HeaderPage";
import { Plan } from "./Plan";

export const Monteria = () => {
  const [planMonteria, setPlanMonteria] = useState([]);
  useEffect(() => {
    try {
      const getServerPlansMonteria = async () => {
        const url = "http://localhost:3300/api/v1/cities";
        const responseMonteria = await fetch(url);
        const dataMonteria = await responseMonteria.json();
        setPlanMonteria(dataMonteria);
      };
      getServerPlansMonteria();
    } catch (error) {
      console.log(error);
    }
  }, []);
  console.log(planMonteria);
  const { plan, name } = planMonteria;

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
          {plan && plan.map((plane) => <Plan key={plane.id} plane={plane} />)}
        </div>
      </section>
    </>
  );
};
