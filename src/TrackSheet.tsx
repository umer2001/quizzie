import React, { FC } from "react";
import { Space, Typography } from "antd";
import StatusBox from "./StatusBox";

const TrackSheet: FC = () => {
  const { Title } = Typography;
  return (
    <div
      style={{
        padding: "1%",
        backgroundColor: "rgb(218 218 218)",
        textAlign: "left",
      }}
    >
      <Title level={4}>Question Palette</Title>

      <Space size={[8, 16]} wrap>
        {new Array(20).fill(null).map((_, index) => (
          <StatusBox key={index} status="unknown" />
        ))}
      </Space>
    </div>
  );
};

export default TrackSheet;
