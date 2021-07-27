import React, { FC } from "react";
import { Space, Typography } from "antd";
import StatusBox from "./StatusBox";
import { AnswerStatus } from "./models";

const TrackSheet: FC<{ userResponses: AnswerStatus[] }> = ({
  userResponses,
}) => {
  const { Title } = Typography;
  return (
    <div
      style={{
        padding: "5%",
        backgroundColor: "rgb(250, 250, 250)",
        textAlign: "left",
      }}
    >
      <Title level={4}>Question Palette</Title>

      <Space size={[8, 16]} wrap>
        {userResponses.map((response, index) => (
          <StatusBox key={index} status={response} />
        ))}
      </Space>
    </div>
  );
};

export default TrackSheet;
