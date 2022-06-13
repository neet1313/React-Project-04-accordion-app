import React, { useState } from "react";
// import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const QuestionList = ({ title, info }) => {
  const [expandButton, setExpandButton] = useState(false);

  const buttonExpandHandler = () => {
    setExpandButton(!expandButton);
  };

  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button type="button" className="btn" onClick={buttonExpandHandler}>
          {expandButton ? "-" : "+"}
        </button>
      </header>

      <p>{expandButton && info}</p>
    </article>
  );
};

export default QuestionList;
