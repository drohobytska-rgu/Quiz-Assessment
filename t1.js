// const prompt = require("readline-sync");
// console.log("Welcome to the Quiz");

// for(;;){


// let playerName = prompt.question("Please enter your name:");

// if (playerName.trim() === "")
//     {
//     console.log("Please enter your name:");
// }
// else if (/[0-9]/.test(playerName))
// {
//     console.log("It is a Number! Please enter your name without numbers");

// } 
// else if (!/^[a-zA-Z\s]+$/.test(playerName)) 
// {
//    console.log("Please don't use symbols. Enter your name:");
// }
// else{
//      console.log("Hello " + playerName + "!" + " Let's start the quiz");;
//     break;
// }}
  

// // console.log("Hello" + playerName + "!" + " Let's start the quiz");


// console.log ("================================");
// console.log("            MAIN MENU");
// console.log("===============================");

// while (true){
// console.log("1. Start Quiz");
// console.log("2. View Rules");
// console.log("3. View High Scores");
// console.log("4. Exit");





// let menuChoice =prompt.question("Please select an option 1 - 4:");
// let categoryName;

// if (menuChoice === "1") {
   
//     console.log("1. General Knowledge");
//     console.log("2. Technology");
//     console.log("3. Cybersecurity");
//     console.log("4. Science");
//      categoryName = (prompt.question("Please select a category:"));

// // generalKnowledgeQuiz questions and all the next questions or category choise and its questions will be desplaied later
// }
// else if (menuChoice ==="2") {
//     console.log("Quiz Rules");
//     console.log("1. There are 4 questions in each category.");
//     console.log("2. Each question has 4 answer options.");
//     console.log("3. You have 20 seconds to answer each question..");
//     console.log("4. Each question has one available hint.");
//     console.log("5. 3 points - correct answer with no hint and within 20 seconds");
//     console.log("6. 2 points - correct answer with a hint OR after 20 seconds");
//     console.log("7. 1 point - correct answer with a hint AND after 20 seconds");
//     console.log("8. 0 points - incorrect answer. The attempt ends immediately, with no second guess, and you move on to the next question.");

// // here will be desplied the rules of the quiz
// }
// else if (menuChoice ==="3") {
//     console.log("View High Scores")
// }
// // here a user can see the high scores of the quiz
// else if(menuChoice === "4"){
//     console.log("Exiting the quiz. Goodbye!")
// }
//     else {
//     process.exit();
// }





// if (categoryName === "1") {
//     generalKnowledgeQuestions();
//     // here will be desplayed the questions of the General Knowledge category
// }
// else if (categoryName === "2") {
//     console.log("You have selected Technology category");
//     // here will be desplayed the questions of the Technology category
// }
// else if (categoryName === "3") {
//     console.log("You have selected Cybersecurity category");
//     // here will be desplayed the questions of the Cybersecurity category
// }
// else if (categoryName === "4") {
//     console.log("You have selected Science category");
//    // here will be desplayed the questions of the Science category
// }}


// // GENERAL QUESTION QUIZ
// function generalKnowledgeQuestions(){
//      console.log("You have selected General Knowledge category")


// // QUESTION 1
// console.log("Question 1:");
//     console.log("What is the capital city of Australia?");
//      let optionsQ1 = ["A. Sydney",
//         "B. Melbourne",
//         "C. Canberra",
//         "D. Brisbane"
//     ];
//     console.log(optionsQ1.join("\n"));
    

//     let playerAnswer =(prompt.question("Please select one of the options A, B, C or D:"));
//     const correctAnswer = "C" && "c";
    
//     if (playerAnswer === correctAnswer ){
//         console.log("Correct answer! You have earned 3 points.");
//     }
//     else if (playerAnswer !== correctAnswer){
//         console.log("Incorrect answer!");
//         console.log(prompt.question("Would you like to use a hint? Select Y for YES or N for NO:"))
//     }


// // QUESTION 2
// console.log("Question 2:");
// console.log("What is the largest planet in our solar system?");
// console.log("A. Earth");
// console.log("B. Jupiter");
// console.log("C. Saturn");
// console.log("D. Mars");

// let playerAnswer2 = (prompt.question("Please select one of the options A, B, C or D:"));
// const correctAnswer2 = "B" && "b";

// if (playerAnswer2 === correctAnswer2){
//     console.log("Corect answer! You have earned 3 points.");}
//     else if (playerAnswer2 !== correctAnswer2){
//         console.log("Incorrect answer!");
//         console.log(prompt.question("Would you like to use a hint? Select Y for YES or N for NO:"))
//     }


//     // QUESTION 3

//     console.log("Question 3:");
//     console.log("How many sides does a hexagon have?");
//     console.log("A. 5");
//     console.log("B. 6");
//     console.log("C. 7");
//     console.log("D. 8");
//     let playerAnswer3 = (prompt.question("Please select one of the options A, B, C or D:"));
//     const correctAnswer3 = "B" && "b";

//     if (playerAnswer3 === correctAnswer3){
//         console.log("Correct answer! You have earned 3 points.");
//     }
//     else if (playerAnswer3 !== correctAnswer3){
//         console.log("Incorrect answer!");
//         console.log(prompt.question("Would you like to use a hint? Select Y for YES or N for NO:"))
//     }


//     // QUESTION 4
//     console.log("Question 4:");
//     console.log("Which ocean is the largest?");
//     console.log("A. Atlantic Ocean");
//     console.log("B. Indian Ocean");
//     console.log("C. Arctic Ocean");
//     console.log("D. Pacific Ocean");
//     let playerAnswer4 = (prompt.question("Please select one of the options A, B, C or D:"));
//     const correctAnswer4 = "D" && "d";

//     if (playerAnswer4 === correctAnswer4){
//         console.log("Correct answer! You have earned 3 points.");}
//  else if (playerAnswer4 !== correctAnswer4){
//         console.log("Incorrect answer!");
//         console.log(prompt.question("Would you like to use a hint? Select Y for YES or N for NO:"))
//     }
// }


















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
    process.exit();
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


// // GENERAL QUESTION QUIZ


// QUESTION 1
function generalKnowledgeQuestions(){
     console.log("You have selected General Knowledge category")
const generalKQ = [{
    questionNumber:1,
    questionText:"What is the capital city of Australia?",
    answerOptions: [
        "A. Sydney",
        "B. Melbourne",
        "C. Canberra",
        "D. Brisbane"
    ],
    correctAnswer: "C" && "c",
    questionHint: "The capital city is not Sydney or Melbourne.",
},

   { questionNumber: 2,
    questionText:"What is the largest planet in our solar system?",
    answerOptions: [
        "A. Earth",
        "B. Jupiter",
        "C. Saturn",
        "D. Mars"
    ],
    correctAnswer: "B" && "b",
    questionHint: "The largest planet is not Earth or Mars."},


{questionNumber: 3,
questionText: "How many sides does a hexagon have?",
answerOptions: [
    "A. 5",
    "B. 6",
    "C. 7",
    "D. 8"
],
correctAnswer: "B" && "b",
questionHint: "A hexagon has more than 5 sides."},


{questionNumber: 4,
questionText: "Which ocean is the largest?",
answerOptions: [
    "A. Atlantic Ocean",
    "B. Indian Ocean",
    "C. Arctic Ocean",
    "D. Pacific Ocean"
],
correctAnswer: "D" && "d",
questionHint: "The largest ocean is not the Atlantic or Indian Ocean."
}   
];
for (let question of generalKQ){
    console.log(question.questionText);
    console.log(question.answerOptions);
}
}}

