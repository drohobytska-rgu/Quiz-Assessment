const prompt = require("readline-sync")


let usedHint = false;
let timeTaken;
let questionAnswer;

const letterofAnswer = ["A", "B", "C", "D"];

function askTimedQuestion(questionText, answerOptions, isCorrect) {
    let questionPoints = 3;

while(true) {
    console.log(questionText);   
        for (let i = 0; i < answerOptions.length; i++) {
            console.log(letterofAnswer[i] + ": " + answerOptions[i]); //for loop shows the question and answerOptions
        }
    let startTime = Date.now();
    let userInput = prompt.question("Your answer: ")   
    let endTime = Date.now()

    questionAnswer = letterofAnswer.indexOf(userInput.trim().toUpperCase()); 

    timeTaken = ((endTime - startTime) / 1000); //(/ 1000) is to convert from milliseconds to seconds

//     if (questionAnswer === -1) {
//         console.log("Please enter A, B, C or D.");

//     if (timeTaken > 60) {
//     console.log("That took over 60 seconds, so that attempt doesn't count. Try again!"); //if they take over 60 seconds, they will be informed this once answer and asked to try again. I was going to make it cut off but it can't with const prompt = require("readline-sync") and was going to be too complex to change.

//     } else{
//         break;
//     }
// }
if (questionAnswer === -1) {
        console.log("Please enter A, B, C or D.");
    } else if (timeTaken > 60) {
        console.log("That took over 60 seconds, so that attempt doesn't count. Try again!"); 
    } else {
        break;
    }
} 

console.log("You took " + (Math.floor(timeTaken)) + " seconds to answer this question!");

if (timeTaken >= 20) {
    console.log("You took 20 seconds or more, so you lose a point.");
    questionPoints = questionPoints - 1;
}

if (usedHint) {
    questionPoints = questionPoints - 1; 
}
if (isCorrect[questionAnswer] === true) {    //isCorrect is what I have called an array for checking if answer is correct.
        console.log("Correct!");
    } else {
        console.log("Incorrect!");
        questionPoints = 0;
    }

    console.log("You got " + questionPoints + " points.");

    return questionPoints;
}

const questions = ["What does VPN stand for?" , "What is phishing?", "Which of these is an example of two-factor authentication?" ,"What is the main purpose of encryption?"]

const answerOptions = [
    ["Virtual Private Network", "Verified Public Network", "Virtual Personal Node", "Variable Private Network"],   // Q1
    ["A method of improving network speed", "An attempt to trick someone into revealing sensitive information", "A method of compressing files", "A type of computer hardware"],   // Q2
    ["Entering the same password twice", "Using two different usernames", "Using a password and a verification code sent to your phone", "Using two different passwords"],   // Q3
    ["To increase internet speed", "To make files smaller", "To protect information from unauthorised access", "To remove computer viruses"],   // Q4
];

const isCorrect = [
    [true, false, false, false],   // Q1: A
    [false, true, false, false],   // Q2: B
    [false, false, true, false],   // Q3: C
    [false, false, true, false],   // Q4: C
];

let totalPoints = 0;

for (let i = 0; i < questions.length; i++) {
    totalPoints = totalPoints + askTimedQuestion(questions[i], answerOptions[i], isCorrect[i]);
}

console.log("Total: " + totalPoints + " points.");
<<<<<<< HEAD
=======
}
>>>>>>> 2c97a479d0638c4101ea35aaa1692d94420c60b4
