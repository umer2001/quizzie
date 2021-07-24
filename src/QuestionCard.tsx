import React, { useState, useEffect } from "react";
import { Card, Typography, Radio, Space, Button } from "antd";

interface Question {
  category: string;
  correct_answer: string;
  incorrect_answers: string[];
  question: string;
  type: string;
}

const QuestionCard = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const [questionIndex, setQuestionIndex] = useState<number | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    (async () => {
      const res = await fetch("https://opentdb.com/api.php?amount=10");
      const { results } = await res.json();
      const questions: Question[] = results;
      setQuestions(questions);
      setQuestionIndex(0);
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
            {questions[questionIndex].incorrect_answers.map((answer) => (
              <Radio value={answer}>{answer}</Radio>
            ))}

            <Radio value={questions[questionIndex].correct_answer}>
              {questions[questionIndex].correct_answer}
            </Radio>
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
