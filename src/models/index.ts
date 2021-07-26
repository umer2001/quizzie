export interface Question {
  category: string;
  correct_answer: string;
  incorrect_answers: string[];
  question: string;
  type: string;
}

export interface QuestionWithChoices {
  category: string;
  choices: string[];
  correct_answer: string;
  incorrect_answers: string[];
  question: string;
  type: string;
}

export interface APIOptions {
  category?: string;
  difficulty?: string;
  quantity: number;
}

export interface State {
  playerName: string;
  score: number;
  screen: string;
  quizOptions: APIOptions;
}

export type ActionsType =
  | "SET_NAME"
  | "SET_QUIZ_OPTIONS"
  | "SCORE_INCREMENT"
  | "CHANGE_SCREEN"
  | null;

export interface Action {
  type: ActionsType;
  payload?: any;
}

export type Dispatch = (action: Action) => void;
