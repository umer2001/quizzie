import React, { FC, useState, useContext } from "react";
import { Card, Typography, Radio, Space, Button } from "antd";
import { GlobalDispatchContext } from "./Context/GlobalContext";
import { AnswerStatus, QuestionWithChoices } from "./models";

const QuestionCard: FC<{
  questions: QuestionWithChoices[];
  onAnswer: (questionIndex: number, result: AnswerStatus) => void;
}> = ({ questions, onAnswer }) => {
  const dispatch = useContext(GlobalDispatchContext);
  const [selected, setSelected] = useState<string | null>(null);
  const [questionIndex, setQuestionIndex] = useState<number>(0);

  const onChange = (e: any) => {
    setSelected(e.target.value);
  };

  const handleNext = () => {
    const isCorrect = selected === questions[questionIndex].correct_answer;
    onAnswer(questionIndex, isCorrect ? "right" : "wrong");
    if (isCorrect) dispatch({ type: "SCORE_INCREMENT" });
    setQuestionIndex(questionIndex + 1);
    setSelected(null);
  };

  const moveToResult = () => {
    dispatch({ type: "CHANGE_SCREEN", payload: "result" });
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
        disabled={!selected}
        onClick={
          questionIndex === questions.length - 1 ? moveToResult : handleNext
        }
      >
        {questionIndex === questions.length - 1
          ? "Move to Result Screen"
          : "Next"}
      </Button>
    </Card>
  );
};

export default QuestionCard;
