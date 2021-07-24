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
