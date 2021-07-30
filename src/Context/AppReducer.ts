//TODO: eslint

import { State, Action, APIOptions } from "../models";

// eslint-disable-next-line
export default (state: State, action: Action): State => {
  console.log(action);

  switch (action.type) {
    case "SET_NAME": {
      return {
        ...state,
        playerName: action.payload as string,
      };
    }
    case "SET_QUIZ_OPTIONS": {
      return {
        ...state,
        quizOptions: action.payload as APIOptions,
      };
    }
    case "SET_TOTAL_QUESTIONS": {
      return {
        ...state,
        totalQuestions: action.payload as number,
      };
    }
    case "SCORE_INCREMENT": {
      return {
        ...state,
        score: state.score + 1,
      };
    }
    case "CHANGE_SCREEN": {
      return {
        ...state,
        screen: action.payload,
      };
    }
    case "ATTEMPT_AGAIN": {
      return {
        ...state,
        screen: "quiz",
        score: 0,
      };
    }
    case "START_FRESH": {
      return {
        playerName: "",
        score: 0,
        totalQuestions: 0,
        screen: "initial",
        quizOptions: {
          category: undefined,
          difficulty: undefined,
          quantity: 10,
        },
      };
    }
    default: {
      return state;
    }
  }
};
