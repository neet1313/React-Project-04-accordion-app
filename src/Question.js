import React from "react";
import QuestionList from "./QuestionList";

const Question = (props) => {
  return (
    <>
      {props.data.map((data) => (
        <ul>
          <QuestionList key={data.id} {...data} />
        </ul>
      ))}
    </>
  );
};

export default Question;
