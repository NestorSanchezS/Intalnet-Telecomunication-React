import React, { useEffect, useState } from "react";
import { HeaderPage } from "../components/HeaderPage";
import { QuestionAndAnswer } from "../components/QuestionAndAnswer";
import { URL_BASE } from "../constans/dominio";

export const FrequentQuestions = () => {
  const [getQuestions, setGetQuestions] = useState([]);
  //Consumimos Api question intalnet json-server
  useEffect(() => {
    try {
      const callApiQuestions = async () => {
        const url = URL_BASE + "questions";
        const response = await fetch(url);
        const data = await response.json();
        setGetQuestions(data);
      };
      callApiQuestions();
    } catch (error) {
      console.log(error);
    }
  }, [HeaderPage]);

  return (
    <>
      {/* <HeaderPage message="Preguntas Frecuentes" />
      <section className="ls s-py-75 s-py-lg-100">
        <div className="container">
          <div className="row">
            <main className="col-lg-12 col-xl-12">
              <div className="row">
                {getQuestions.map((questions) => (
                  <QuestionAndAnswer key={questions.id} questions={questions} />
                ))}
              </div>
            </main>
            <div className="d-none d-lg-block divider-50"></div>
          </div>
        </div>
      </section> */}
      <HeaderPage message="Preguntas Frecuentes" />
      <section className="ls s-py-80 s-py-lg-120 s-py-xl-160">
        <div className="container">
          <div id="accordion01" role="tablist">
            {getQuestions.map((questions) => (
              <QuestionAndAnswer key={questions.id} questions={questions} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
