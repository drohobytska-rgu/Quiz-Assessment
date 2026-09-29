const prompt = require("readline-sync");

let questions = Array();

questions[17] = {
    questionNumber: 17,
    questionText: "What is the capital city of Scotland?",
    answerOptions: ["A. Glasgow", "B. Aberdeen", "C. Edinburgh", "D. Dundee"],
    questionHint: "It is home to the Scottish Parliament and a famous castle overlooking the city.",
    correctAnswer: "C",
    categoryName: "Geography" 
};

questions[18] = {
    questionNumber: 18,
    questionText: "Which is the largest continent by land area?",
    answerOptions: ["A. Europe", "B. Africa", "C. North America", "D. Asia"],
    questionHint: "It contains countries such as China, India and Japan.",
    correctAnswer: "D",
    categoryName: "Geography" 
};

questions[19] = {
    questionNumber: 19,
    questionText: "Which river flows through London?",
    answerOptions: ["A. River Thames", "B. River Clyde", "C. River Severn", "D. River Tyne"],
    questionHint: "Famous London landmarks such as Tower Bridge stand across this river.",
    correctAnswer: "A",
    categoryName: "Geography" 
};

questions[20] = {
    questionNumber: 20,
    questionText: "Mount Everest is part of which mountain range?",
    answerOptions: ["A. Alps", "B. Andes", "C. Himalayas", "D. Rocky Mountains"],
    questionHint: "This range stretches across several Asian countries, including Nepal.",
    correctAnswer: "C",
    categoryName: "Geography" 
};

let questionHint = "";
let playerAnswer = "";
let answerTime = 0;
let correctAnswers = 0;
let wrongAnswers = 0;
let roundScore = 0;
let roundScores = Array();

function currentQuestion(questionNumber) {
    console.log(questions[questionNumber].questionNumber + ". " + questions[questionNumber].questionText + "\n" + questions[questionNumber].answerOptions.join("\n"));
    let hintSuggestion = true;
    while (hintSuggestion === true) {
        questionHint = prompt.question("Would you like a hint?");
        if (questionHint.toLowerCase() === "yes") {
            console.log(questions[questionNumber].questionHint);
            roundScore--;
            hintSuggestion = false;
        } else if (questionHint.toLowerCase() !== "yes" && questionHint.toLowerCase() !== "no") {
            console.log("Please enter YES to see the hint, or NO if you want to try answering without a hint.");
        } else {
            hintSuggestion = false;
        }
    }

    let tryAgain = true;
    while (tryAgain === true) {
        playerAnswer = prompt.question("Please enter your answer as A, B, C, or D.");
        if (playerAnswer.toUpperCase() === questions[questionNumber].correctAnswer) {
            console.log("Correct! Well done.");
            correctAnswers++;
            roundScore += 3;
            console.log(roundScore);
            tryAgain = false;
        } else if (playerAnswer.toUpperCase() !== "A" && playerAnswer.toUpperCase() !== "B" && playerAnswer.toUpperCase() !== "C" && playerAnswer.toUpperCase() !== "D") {
            console.log("Invalid input. Please enter A, B, C, or D.");
        } else {
            console.log("Incorrect answer.");
            wrongAnswers++;
            tryAgain = false;
        }
    }

    // How do we measure the answer time?
    if (answerTime > 20) {
        roundScore--;
    } 
}

for (let questionNumber = 17; questionNumber <= 20; questionNumber++) {
    currentQuestion(questionNumber);
    if (questionNumber % 4 == 0) {
        roundScores.push(roundScore);
        console.log(roundScores);

        roundScore = 0;
    }
}