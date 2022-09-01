import React from "react";
import { useIntalnetContext } from "../hooks/useIntalnetContext";
import { QuestionAndAnswer } from "./QuestionAndAnswer";

export const FrequentQuestions = () => {
  const { getQuestions } = useIntalnetContext();
  return (
    <>
      <section className="page_title cs s-pt-60 s-pb-10 s-pt-lg-130 s-pb-lg-60 page_title text-center">
        <div className="container-fluid">
          <div className="row">
            <div className="divider-60"></div>

            <div className="col-md-12 text-center">
              <h1>Preguntas Frecuentes</h1>
            </div>

            <div className="divider-50"></div>
          </div>
        </div>
        <ol className="breadcrumb full-width"></ol>
      </section>
      <section className="ls s-py-75 s-py-lg-100">
        <div className="container">
          <div className="row">
            <main className="col-lg-12 col-xl-12">
              <div className="row">
                {getQuestions.map((questions) => (
                  <QuestionAndAnswer
                    key={questions.id}
                    question={questions.question}
                    answer={questions.answer}
                  />
                ))}
              </div>
            </main>
            <div className="d-none d-lg-block divider-50"></div>
          </div>
        </div>
      </section>
    </>
  );
};
