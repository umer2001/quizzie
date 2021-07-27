import React, { FC, useState } from "react";
import { Card, Typography, Radio, Space, Button } from "antd";
import { QuestionWithChoices } from "./models";

const QuestionCard: FC<{ questions: QuestionWithChoices[] }> = ({
  questions,
}) => {
  const [selected, setSelected] = useState<number | null>(null);
  const [questionIndex, setQuestionIndex] = useState<number>(0);

  const onChange = (e: any) => {
    console.log("radio checked", e.target.value);
    setSelected(e.target.value);
  };
  const { Title } = Typography;
  return (
    <Card
      title={<Title level={3}>Question No : {questionIndex + 1}</Title>}
      bordered={false}
      style={{ backgroundColor: "#fafafa", textAlign: "left" }}
    >
      <Card
        title={
          <Title level={5} style={{ whiteSpace: "normal" }}>
            <span
              dangerouslySetInnerHTML={{
                __html: questions[questionIndex].question,
              }}
            ></span>
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
  );
};

export default QuestionCard;
