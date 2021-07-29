import React, { FC } from "react";
import m1 from "./images/1medal.svg";
import m2 from "./images/2medal.svg";
import m3 from "./images/3medal.svg";
import fail from "./images/failure-icon-23219.png";
import { Medal } from "./models";

const ResultIcon: FC<{ medal: Medal }> = ({ medal }) => {
  return (
    <img
      src={
        medal === "Gold"
          ? m1
          : medal === "Silver"
          ? m2
          : medal === "Bronze"
          ? m3
          : fail
      }
      alt="medal"
      style={{ width: "100%", marginBottom: "20px" }}
    />
  );
};

export default ResultIcon;
