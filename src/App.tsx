import React, { FC, useContext } from "react";
import {
  GlobalStateContext,
  GlobalDispatchContext,
} from "./Context/GlobalContext";
import { Button, Typography } from "antd";
import "./App.css";
import Form from "./Form";
import Loading from "./Loading";
import Quiz from "./Quiz";
import Result from "./Result";
import Logo from "./Logo";

const App: FC = () => {
  const dispatch = useContext(GlobalDispatchContext);
  const { screen } = useContext(GlobalStateContext);

  const { Title, Text } = Typography;
  return (
    <div className="App">
      {/* TODO: change Header tag */}
      <header className="App-header">
        {screen === "initial" ? (
          <>
            <Logo />
            <Title level={2}>Quizzie!!</Title>
            <Text>
              A quiz app that can test you knowledge on different subjects.
              <br />
              <Text strong style={{ float: "left" }}>
                Rules
              </Text>
              <br />
              <ul style={{ textAlign: "left" }}>
                <li>
                  You will be given choice to select subject and quanitity of
                  questions.
                </li>
                <li>Each correct answer will add 1 point to your score.</li>
                <li>
                  you are required to score a minimum of <b>50%</b> in oreder to
                  pass.
                </li>
              </ul>
            </Text>
            <Button
              type="primary"
              size="large"
              onClick={() =>
                dispatch({ type: "CHANGE_SCREEN", payload: "form" })
              }
            >
              Start
            </Button>
          </>
        ) : screen === "form" ? (
          <Form />
        ) : screen === "quiz" ? (
          <Quiz />
        ) : screen === "result" ? (
          <Result />
        ) : (
          <Loading />
        )}
      </header>
    </div>
  );
};

export default App;
