import React from "react";
import { useEffect, useState } from "react";
import { getQuestions } from "../services/questions";

const Questionnaire = () => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswer] = useState({});

  useEffect(() => {
    const getData = async () => {
      const questions = await getQuestions();
      setQuestions(questions);
    };
    getData();
  }, []);

  const handleRadioClick = (event) => {
    setAnswer((prev) => ({ ...prev, [event.target.id]: event.target.value }));
  };

  return (
    <div className="container pt-4">
      <div className="row">
        <h4>Spiritual Wellness Questions</h4>
        {questions.map((question) => (
          <div>
            <div className="questionnaire-card">
              <div className={"question-bold"}>
                <span>{question.id + ")"} </span>
                <span>{question.question_text}</span>
              </div>
              <hr className="horizontal-line" />
              <form>
                <div className="option-first">
                  {question.options.map((option) => (
                    <div className="radio">
                      <label>
                        <input
                          className="options"
                          type="radio"
                          id={question.id}
                          name="options"
                          value={option}
                          onChange={handleRadioClick}
                        />{" "}
                        {option}
                      </label>
                    </div>
                  ))}
                </div>
              </form>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Questionnaire;
