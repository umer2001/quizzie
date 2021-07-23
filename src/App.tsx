import React, { FC } from "react";
import { Button, Typography } from "antd";
import logo from "./logo.svg";
import "./App.css";
import Form from "./Form";
import Loading from "./Loading";

const App: FC = () => {
  const { Title, Text } = Typography;
  return (
    <div className="App">
      {/* TODO: change Header tag */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Title level={2}>Quizzie!!</Title>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          autem eveniet rem, facilis deleniti eum consequuntur molestiae.
          Perspiciatis aut nihil inventore porro aperiam, iure ea ratione non
          harum ab ullam!
        </Text>
        <Button type="primary" size="large">
          Start
        </Button>
        {/* TODO: if need loading */}
        <Loading />
        <Form />
      </header>
    </div>
  );
};

export default App;
