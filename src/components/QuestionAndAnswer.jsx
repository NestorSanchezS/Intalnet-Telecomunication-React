import React from "react";

export const QuestionAndAnswer = ({ questions }) => {
  const { question, answer, id } = questions;
  return (
    // <div className="col-xl-4 mb-4">
    //   <h4>{question}</h4>
    //   <p>{answer}</p>
    // </div>
    <>
      <div className="card">
        <div className="card-header" role="tab" id={`collapse0${id}_header`}>
          <h5>
            <a
              data-toggle="collapse"
              href={`#collapse0${id}`}
              aria-expanded="true"
              aria-controls={`collapse0${id}`}
            >
              <i className="fa fa-pencil" aria-hidden="true"></i>
              {question}
            </a>
          </h5>
        </div>

        <div
          id={`collapse0${id}`}
          className="collapse show"
          role="tabpanel"
          aria-labelledby={`collapse0${id}_header`}
          data-parent="#accordion01"
        >
          <div className="card-body">
            <p>{answer}</p>
          </div>
        </div>
      </div>
      <div className="divider-15 d-none d-xl-block"></div>
    </>
  );
};
