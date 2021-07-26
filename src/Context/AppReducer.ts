//TODO: eslint

import { State, Action, APIOptions } from "../models";

// eslint-disable-next-line
export default (state: State, action: Action) => {
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
    default: {
      return state;
    }
  }
};
