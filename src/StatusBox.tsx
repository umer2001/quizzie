import React, { FC } from "react";
import { CloseSquareFilled, CheckSquareFilled } from "@ant-design/icons";
import Square from "./Square";

const StatusBox: FC<{ status: "right" | "wrong" | "unknown" }> = ({
  status,
}) => {
  return status === "unknown" ? (
    <Square />
  ) : status === "wrong" ? (
    <CloseSquareFilled style={{ color: "red" }} />
  ) : (
    <CheckSquareFilled style={{ color: "#52c41a" }} />
  );
};

export default StatusBox;
