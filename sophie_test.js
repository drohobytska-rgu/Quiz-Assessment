const prompt = require("readline-sync");

let question_list = [
     {
      questionNumber: 1,
      questionText: "What is the capital city of Australia?",
      answerOptions: ["A. Sydney", "B. Melbourne", "C. Canberra", "D. Brisbane"],
      correctAnswer: "C",
      questionHint: "The capital city is not Sydney or Melbourne."
    },
    {
      questionNumber: 2,
      questionText: "What is the largest planet in our solar system?",
      answerOptions: ["A. Earth", "B. Jupiter", "C. Saturn", "D. Mars"],
      correctAnswer: "B",
      questionHint: "The largest planet is not Earth or Mars."
    }
]
// let question_object = {
//     questionNumber: 1,
//     questionText: "What is the capital city of Australia?",
//     answerOptions: ["A. Sydney", "B. Melbourne", "C. Canberra", "D. Brisbane"],
//     correctAnswer: "C",
//     questionHint: "The capital city is not Sydney or Melbourne."   
// }

// for (question_object in question_list){
for (let i = 0; i<question_list.length; i++){
    question_object = question_list[i];
    console.log(question_object.questionText);
    console.log(question_object.answerOptions.join("\n"));

    const playerAnswer = prompt.question("Please select one of the options A, B, C or D:");

    if (playerAnswer.toUpperCase() === question_object.correctAnswer) {
        console.log("Correct answer! You have earned 3 points.");
    } else {
        console.log("Incorrect answer");
    }
}


