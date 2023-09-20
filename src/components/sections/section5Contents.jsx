/* eslint-disable no-unused-vars */
import man_thinking from "../../assets/images/cwok_casual_21 1.svg";
import Star from "../reusables/Star";
import question1 from "../../assets/images/question1.svg";
import question2 from "../../assets/images/question2.svg";
import question3 from "../../assets/images/question3.svg";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import faqData from "../dummy";
import { useState } from "react";

export default function Section5() {
  const [showAnswer, setShAnswer] = useState(Array(faqData.length).fill(false));

  const toggle = (index) => {
    setShAnswer((prev) => {
      const newShowAnswer = [...prev];
      newShowAnswer[index] = !newShowAnswer[index];
      return newShowAnswer;
    });
  };

  return (
    <div className="section-5-items flex lg:flex-row sm:flex-col w-full py-8 justify-center flex-wrap">
      <div className="box-1 flex flex-col lg:w-2/4 sm:w-full lg:h-full sm:h-2/4 justify-start items-center">
        <div className="some-texts h-auto">
          <h1>
            Frequently Asked <span className="colored-text">Questions</span>
          </h1>
          <p>
            We got answers to the questions that you might want to ask about
            getlinked Hackathon 1.0
          </p>
        </div>

        <div className="faq-container w-full px-6 py-10">
          {faqData.map((el, i) => (
            <div className="faq py-8" key={el.id}>
              <div className="flex justify-between">
                {el.question}
                <span onClick={() => toggle(i)} className="cursor-pointer" >
                  {showAnswer[i] ? (
                    <AiOutlineMinus color="#d434fe" size="30px" />
                  ) : (
                    <AiOutlinePlus color="#d434fe" size="30px" />
                  )}
                </span>
              </div>
              {showAnswer[i] && (
                <div className="faq-answer mt-4">
                  <p className="text-wrap">{el.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="box-2 flex flex-col lg:w-2/4 sm:w-full lg:h-full sm:h-2/4 justify-center items-center">
        <div className="questions-container">
          <img src={man_thinking} alt="thoughts" loading="lazy" />
          <img src={question1} alt="thoughts" className="question-1" />
          <img src={question2} alt="thoughts" className="question-2" />
          <img src={question3} alt="thoughts" className="question-3" />
        </div>
      </div>

      <Star top="415%" left="2%" color="#903aff" />
      <Star top="420%" left="68%" color="#d434fe" />
      <Star top="440%" left="58%" color="#d434fe" />
      <Star top="470%" left="50%" color="darkgray" />
      <Star top="510%" left="82%" color="#ffffff" />
    </div>
  );
}
