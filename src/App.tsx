import React, { FC, useContext } from "react";
import {
  GlobalStateContext,
  GlobalDispatchContext,
} from "./Context/GlobalContext";
import { Button, Typography } from "antd";
import logo from "./logo.svg";
import "./App.css";
import Form from "./Form";
import Loading from "./Loading";
import QuestionCard from "./QuestionCard";
import TrackSheet from "./TrackSheet";

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
            <img src={logo} className="App-logo" alt="logo" />
            <Title level={2}>Quizzie!!</Title>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos autem eveniet rem, facilis deleniti eum consequuntur
              molestiae. Perspiciatis aut nihil inventore porro aperiam, iure ea
              ratione non harum ab ullam!
            </Text>
            <Button
              type="primary"
              size="large"
              onClick={() =>
                dispatch({ type: "CHANGE_SCREEN", payload: "loading" })
              }
            >
              Start
            </Button>
          </>
        ) : screen === "form" ? (
          <Form />
        ) : screen === "quiz" ? (
          <>
            <QuestionCard />
            <TrackSheet />
          </>
        ) : (
          <Loading />
        )}
      </header>
    </div>
  );
};

export default App;
