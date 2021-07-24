import React, { useState, useEffect } from "react";
import { Card, Typography, Radio, Space, Button } from "antd";
import { addChoicesAll } from "./utils/utils";
import { Question, QuestionWithChoices } from "./models";

const QuestionCard = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const [questionIndex, setQuestionIndex] = useState<number | null>(null);
  const [questions, setQuestions] = useState<QuestionWithChoices[]>([]);

  useEffect(() => {
    (async () => {
      const res = await fetch("https://opentdb.com/api.php?amount=10");
      const { results } = await res.json();
      const questions: Question[] = results;
      setQuestions(addChoicesAll(questions));
      setQuestionIndex(0);
      console.log(questions);
    })();
  }, []);

  const onChange = (e: any) => {
    console.log("radio checked", e.target.value);
    setSelected(e.target.value);
  };
  const { Title } = Typography;
  return questionIndex !== null ? (
    <Card
      title={<Title level={3}>Question No : {questionIndex + 1}</Title>}
      bordered={false}
      style={{ backgroundColor: "#fafafa", textAlign: "left" }}
    >
      <Card
        title={
          <Title level={5} style={{ whiteSpace: "normal" }}>
            {questions[questionIndex].question}
          </Title>
        }
      >
        <Radio.Group onChange={onChange} value={selected}>
          <Space direction="vertical">
            {questions[questionIndex].choices.map((answer) => (
              <Radio key={answer} value={answer}>
                {answer}
              </Radio>
            ))}
          </Space>
        </Radio.Group>
      </Card>
      <Button
        type="primary"
        size="large"
        style={{
          marginTop: "2%",
        }}
        disabled={questionIndex === questions.length - 1 ? true : false}
        onClick={() => setQuestionIndex(questionIndex + 1)}
      >
        Next
      </Button>
    </Card>
  ) : (
    <Title level={4}>Loading</Title>
  );
};

export default QuestionCard;
// TODO: shuffle functionality
