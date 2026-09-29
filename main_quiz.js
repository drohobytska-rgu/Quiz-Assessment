const prompt = require("readline-sync");
console.log("Welcome to the Quiz");

for(;;){


let playerName = prompt.question("Please enter your name:");

if (playerName.trim() === "")
    {
    console.log("Please enter your name:");
}
else if (/[0-9]/.test(playerName))
{
    console.log("It is a Number! Please enter your name without numbers");

} 
else if (!/^[a-zA-Z\s]+$/.test(playerName)) 
{
   console.log("Please don't use symbols. Enter your name:");
}
else{
     console.log("Hello " + playerName + "!" + " Let's start the quiz");;
    break;
}}
  

// console.log("Hello" + playerName + "!" + " Let's start the quiz");


console.log ("================================");
console.log("            MAIN MENU");
console.log("===============================");

while (true){
console.log("1. Start Quiz");
console.log("2. View Rules");
console.log("3. View High Scores");
console.log("4. Exit");





let menuChoice =prompt.question("Please select an option 1 - 4:");
let categoryName;

if (menuChoice === "1") {
   
    console.log("1. General Knowledge");
    console.log("2. Technology");
    console.log("3. Cybersecurity");
    console.log("4. Science");
     categoryName = (prompt.question("Please select a category:"));

// generalKnowledgeQuiz questions and all the next questions or category choise and its questions will be desplaied later
}
else if (menuChoice ==="2") {
    console.log("Quiz Rules");
    console.log("1. There are 4 questions in each category.");
    console.log("2. Each question has 4 answer options.");
    console.log("3. You have 20 seconds to answer each question..");
    console.log("4. Each question has one available hint.");
    console.log("5. 3 points - correct answer with no hint and within 20 seconds");
    console.log("6. 2 points - correct answer with a hint OR after 20 seconds");
    console.log("7. 1 point - correct answer with a hint AND after 20 seconds");
    console.log("8. 0 points - incorrect answer. The attempt ends immediately, with no second guess, and you move on to the next question.");

// here will be desplied the rules of the quiz
}
else if (menuChoice ==="3") {
    console.log("View High Scores")
}
// here a user can see the high scores of the quiz
else if(menuChoice === "4"){
    console.log("Exiting the quiz. Goodbye!")
}
    else {
    console,log("Invalid option. Please select 1 -4.");
    continue;
}





if (categoryName === "1") {
    generalKnowledgeQuestions();
    break;
    // here will be desplayed the questions of the General Knowledge category
}
else if (categoryName === "2") {
    console.log("You have selected Technology category");
    break;
    // here will be desplayed the questions of the Technology category
}
else if (categoryName === "3") {
    console.log("You have selected Cybersecurity category");
    break;
    // here will be desplayed the questions of the Cybersecurity category
}
else if (categoryName === "4") {
    console.log("You have selected Science category");
    break;
   // here will be desplayed the questions of the Science category
}
}


// // GENERAL QUESTION QUIZ


// QUESTION 1

function generalKnowledgeQuestions() {
  console.log("You have selected General Knowledge category");

  const generalKQ = [
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
    },
    {
      questionNumber: 3,
      questionText: "How many sides does a hexagon have?",
      answerOptions: ["A. 5", "B. 6", "C. 7", "D. 8"],
      correctAnswer: "B",
      questionHint: "A hexagon has more than 5 sides."
    },
    {
      questionNumber: 4,
      questionText: "Which ocean is the largest?",
      answerOptions: ["A. Atlantic Ocean", "B. Indian Ocean", "C. Arctic Ocean", "D. Pacific Ocean"],
      correctAnswer: "D",
      questionHint: "The largest ocean is not the Atlantic or Indian Ocean."
    }
  ];

  for (let i = 0; i<generalKQ.length; i++) {
    question = generalKQ[i];
    console.log(question.questionText);
    console.log(question.answerOptions.join("\n"));

    const playerAnswer = prompt.question("Please select one of the options A, B, C or D:");

    if (playerAnswer.toUpperCase() === question.correctAnswer) {
      console.log("Correct answer! You have earned 3 points.");
    } else {
      console.log("Incorrect answer");
    }
  }
}