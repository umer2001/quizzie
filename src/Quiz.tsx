import React, { FC, useState, useContext, useEffect } from "react";
import { GlobalStateContext } from "./Context/GlobalContext";
import { Row, Col } from "antd";
import { addChoicesAll } from "./utils/utils";
import { Question, QuestionWithChoices } from "./models";
import Loading from "./Loading";
import QuestionCard from "./QuestionCard";
import TrackSheet from "./TrackSheet";

const Quiz: FC = () => {
  const { quizOptions } = useContext(GlobalStateContext);
  const [questions, setQuestions] = useState<QuestionWithChoices[]>([]);

  useEffect(() => {
    (async () => {
      const url: string = `https://opentdb.com/api.php?amount=${
        quizOptions.quantity
      }${quizOptions.category ? "&category=" + quizOptions.category : ""}${
        quizOptions.difficulty ? "&difficulty=" + quizOptions.difficulty : ""
      }`;
      const res = await fetch(url);
      const { results } = await res.json();
      const questions: Question[] = results;
      setQuestions(addChoicesAll(questions));
      console.log(questions);
    })();
  }, [quizOptions]);
  return questions.length ? (
    <Row justify="space-between">
      <Col span={24} md={{ span: 17 }}>
        <QuestionCard questions={questions} />
      </Col>
      <Col span={24} md={{ span: 6 }}>
        <TrackSheet />
      </Col>
    </Row>
  ) : (
    <Loading />
  );
};

export default Quiz;
