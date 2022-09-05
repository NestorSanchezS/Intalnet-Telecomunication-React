import React from "react";
import { useIntalnetContext } from "../hooks/useIntalnetContext";
import { HeaderPage } from "./HeaderPage";
import { QuestionAndAnswer } from "./QuestionAndAnswer";

export const FrequentQuestions = () => {
  const { getQuestions } = useIntalnetContext();
  return (
    <>
      <HeaderPage message="Preguntas Frecuentes" />
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
