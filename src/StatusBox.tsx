import React, { FC } from "react";
import { CloseSquareFilled, CheckSquareFilled } from "@ant-design/icons";
import Square from "./Square";
import { AnswerStatus } from "./models";

const StatusBox: FC<{ status: AnswerStatus }> = ({ status }) => {
  return status === "unknown" ? (
    <Square />
  ) : status === "wrong" ? (
    <CloseSquareFilled style={{ fontSize: "33px", color: "#ff4d4f" }} />
  ) : (
    <CheckSquareFilled style={{ fontSize: "33px", color: "#52c41a" }} />
  );
};

export default StatusBox;
