import React from "react";

export const QuestionAndAnswer = ({ answer, question }) => {
  return (
    <div className="col-xl-4 mb-4">
      <h4>{question}</h4>
      <p>{answer}</p>
    </div>
  );
};
