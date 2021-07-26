//TODO: eslint

import { State, Action } from "../models";

// eslint-disable-next-line
export default (state: State, action: Action) => {
  console.log(action);

  switch (action.type) {
    case "SET_NAME": {
      console.log("called me");

      return {
        ...state,
        playerName: action.payload,
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
