import { Question, QuestionWithChoices } from "../models";

function shuffle(array: any[]): any[] {
  var currentIndex: number = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

function addChioces(questionObject: Question): QuestionWithChoices {
  //   merge correct & incorrect answers
  var choices: string[] = questionObject.incorrect_answers;
  choices.push(questionObject.correct_answer);

  // shuffle the choices
  const shuffled: string[] = shuffle(choices);

  return {
    ...questionObject,
    choices: shuffled,
  };
}

export function addChoicesAll(
  questionsArray: Question[]
): QuestionWithChoices[] {
  return questionsArray.map((question) => addChioces(question));
}
