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
let hintSuggestion;

function currentQuestion(questionNumber) {
    console.log(questions[questionNumber].questionNumber + ". " + questions[questionNumber].questionText + "\n" + questions[questionNumber].answerOptions.join("\n"));
    hintSuggestion = true;
    while (hintSuggestion === true) {
        questionHint = prompt.question("Would you like a hint?");
        if (questionHint === "yes".toLowerCase()) {
            console.log(questions[questionNumber].questionHint);
        } else if (questionHint !== "yes".toLowerCase() && questionHint !== "no".toLowerCase()) {
            console.log("Please enter YES to see the hint, or NO if you want to try answering without a hint.");
        } else {
            hintSuggestion = false;
        }
    }
}