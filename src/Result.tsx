import React, { FC, useContext, useState, useEffect } from "react";
import {
  GlobalStateContext,
  GlobalDispatchContext,
} from "./Context/GlobalContext";
import useWindowDimensions from "./hooks/useWindowDimensions";
import { Card, Button } from "antd";
import Confetti from "react-confetti";
import party from "party-js";
import ResultIcon from "./ResultIcon";
import { calculatePercentage } from "./utils/utils";
import { Medal } from "./models";
import Loading from "./Loading";

const Result: FC = () => {
  const { playerName, totalQuestions, score } = useContext(GlobalStateContext);
  const dispatch = useContext(GlobalDispatchContext);
  const [medal, setMedal] = useState<Medal>(null);
  const [percentage, setPercentage] = useState<number | null>(null);

  useEffect(() => {
    const percentage = calculatePercentage(score, totalQuestions);
    setPercentage(percentage);
    console.log(percentage);

    if (percentage >= 90) {
      setMedal("Gold");
    } else if (percentage >= 70) {
      setMedal("Silver");
    } else if (percentage >= 50) {
      setMedal("Bronze");
    } else {
      setMedal("Fail");
    }
  }, [totalQuestions, score]);

  const { height, width } = useWindowDimensions();
  return medal ? (
    <div
      onClick={
        medal === "Fail"
          ? undefined
          : (e) => party.confetti(e.nativeEvent, { spread: 40 })
      }
    >
      <Confetti
        width={width ? (width > 768 ? width : undefined) : undefined}
        height={height}
        hidden={medal !== "Fail" ? false : true}
      />
      <Card title="Result">
        <ResultIcon medal={medal} />
        {medal !== "Fail" ? (
          <>
            <p>
              Congratulations <b>{playerName}</b> 😃, you have socored{" "}
              <b>{percentage}%</b> in this quiz
            </p>
            <p>
              As you have scored <b>{percentage}%</b> in the quiz you are
              awarded <b>{medal} medal🥇</b> displayed above.
            </p>
          </>
        ) : (
          <>
            <p>
              Sorry <b>{playerName}</b>, we don't have good news for you 😔
            </p>
            <p>
              You have failed to passed the quiz as you need to score a minimum
              of <b>50%</b> where as you have socred <b>{percentage}%</b>
            </p>
            <p>
              We suggest you to not to lose hope and prepare more and retry!!
              Lastly good luck for you next try 😃.
            </p>
          </>
        )}
        <Button
          onClick={() => dispatch({ type: "CHANGE_SCREEN", payload: "quiz" })}
        >
          Attempt Again
        </Button>
      </Card>
    </div>
  ) : (
    <Loading />
  );
};

export default Result;
