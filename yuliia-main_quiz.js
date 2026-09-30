const prompt = require("readline-sync");

// ==================== QUESTION BANK ====================

// Stores all quiz questions, answer options, hints and correct answers.
let questions = Array();

questions[1] = {
    questionNumber: 1,
    questionText: "What is the capital city of Scotland?",
    answerOptions: ["A. Glasgow", "B. Aberdeen", "C. Edinburgh", "D. Dundee"],
    questionHint: "It is home to the Scottish Parliament and a famous castle overlooking the city.",
    correctAnswer: "C",
};

questions[2] = {
    questionNumber: 2,
    questionText: "Which is the largest continent by land area?",
    answerOptions: ["A. Europe", "B. Africa", "C. North America", "D. Asia"],
    questionHint: "It contains countries such as China, India and Japan.",
    correctAnswer: "D",
};

questions[3] = {
    questionNumber: 3,
    questionText: "Which river flows through London?",
    answerOptions: ["A. River Thames", "B. River Clyde", "C. River Severn", "D. River Tyne"],
    questionHint: "Famous London landmarks such as Tower Bridge stand across this river.",
    correctAnswer: "A",
};

questions[4] = {
    questionNumber: 4,
    questionText: "Mount Everest is part of which mountain range?",
    answerOptions: ["A. Alps", "B. Andes", "C. Himalayas", "D. Rocky Mountains"],
    questionHint: "This range stretches across several Asian countries, including Nepal.",
    correctAnswer: "C",
};

questions[5] = {
    questionNumber: 5,
    questionText: "What is the capital city of Scotland?",
    answerOptions: ["A. Glasgow", "B. Aberdeen", "C. Edinburgh", "D. Dundee"],
    questionHint: "It is home to the Scottish Parliament and a famous castle overlooking the city.",
    correctAnswer: "C",
};

questions[6] = {
    questionNumber: 6,
    questionText: "Which is the largest continent by land area?",
    answerOptions: ["A. Europe", "B. Africa", "C. North America", "D. Asia"],
    questionHint: "It contains countries such as China, India and Japan.",
    correctAnswer: "D",
};

questions[7] = {
    questionNumber: 7,
    questionText: "Which river flows through London?",
    answerOptions: ["A. River Thames", "B. River Clyde", "C. River Severn", "D. River Tyne"],
    questionHint: "Famous London landmarks such as Tower Bridge stand across this river.",
    correctAnswer: "A",
};

questions[8] = {
    questionNumber: 8,
    questionText: "Mount Everest is part of which mountain range?",
    answerOptions: ["A. Alps", "B. Andes", "C. Himalayas", "D. Rocky Mountains"],
    questionHint: "This range stretches across several Asian countries, including Nepal.",
    correctAnswer: "C",
};

questions[9] = {
    questionNumber: 9,
    questionText: "What is the capital city of Scotland?",
    answerOptions: ["A. Glasgow", "B. Aberdeen", "C. Edinburgh", "D. Dundee"],
    questionHint: "It is home to the Scottish Parliament and a famous castle overlooking the city.",
    correctAnswer: "C",
};

questions[10] = {
    questionNumber: 10,
    questionText: "Which is the largest continent by land area?",
    answerOptions: ["A. Europe", "B. Africa", "C. North America", "D. Asia"],
    questionHint: "It contains countries such as China, India and Japan.",
    correctAnswer: "D",
};

questions[11] = {
    questionNumber: 11,
    questionText: "Which river flows through London?",
    answerOptions: ["A. River Thames", "B. River Clyde", "C. River Severn", "D. River Tyne"],
    questionHint: "Famous London landmarks such as Tower Bridge stand across this river.",
    correctAnswer: "A",
};

questions[12] = {
    questionNumber: 12,
    questionText: "Mount Everest is part of which mountain range?",
    answerOptions: ["A. Alps", "B. Andes", "C. Himalayas", "D. Rocky Mountains"],
    questionHint: "This range stretches across several Asian countries, including Nepal.",
    correctAnswer: "C",
};

questions[13] = {
    questionNumber: 13,
    questionText: "What is the capital city of Scotland?",
    answerOptions: ["A. Glasgow", "B. Aberdeen", "C. Edinburgh", "D. Dundee"],
    questionHint: "It is home to the Scottish Parliament and a famous castle overlooking the city.",
    correctAnswer: "C",
};

questions[14] = {
    questionNumber: 14,
    questionText: "Which is the largest continent by land area?",
    answerOptions: ["A. Europe", "B. Africa", "C. North America", "D. Asia"],
    questionHint: "It contains countries such as China, India and Japan.",
    correctAnswer: "D",
};

questions[15] = {
    questionNumber: 15,
    questionText: "Which river flows through London?",
    answerOptions: ["A. River Thames", "B. River Clyde", "C. River Severn", "D. River Tyne"],
    questionHint: "Famous London landmarks such as Tower Bridge stand across this river.",
    correctAnswer: "A",
};

questions[16] = {
    questionNumber: 16,
    questionText: "Mount Everest is part of which mountain range?",
    answerOptions: ["A. Alps", "B. Andes", "C. Himalayas", "D. Rocky Mountains"],
    questionHint: "This range stretches across several Asian countries, including Nepal.",
    correctAnswer: "C",
};

questions[17] = {
    questionNumber: 17,
    questionText: "What is the capital city of Scotland?",
    answerOptions: ["A. Glasgow", "B. Aberdeen", "C. Edinburgh", "D. Dundee"],
    questionHint: "It is home to the Scottish Parliament and a famous castle overlooking the city.",
    correctAnswer: "C",
};

questions[18] = {
    questionNumber: 18,
    questionText: "Which is the largest continent by land area?",
    answerOptions: ["A. Europe", "B. Africa", "C. North America", "D. Asia"],
    questionHint: "It contains countries such as China, India and Japan.",
    correctAnswer: "D",
};

questions[19] = {
    questionNumber: 19,
    questionText: "Which river flows through London?",
    answerOptions: ["A. River Thames", "B. River Clyde", "C. River Severn", "D. River Tyne"],
    questionHint: "Famous London landmarks such as Tower Bridge stand across this river.",
    correctAnswer: "A",
};

questions[20] = {
    questionNumber: 20,
    questionText: "Mount Everest is part of which mountain range?",
    answerOptions: ["A. Alps", "B. Andes", "C. Himalayas", "D. Rocky Mountains"],
    questionHint: "This range stretches across several Asian countries, including Nepal.",
    correctAnswer: "C",
};

// ==================== QUIZ DATA ====================

// Stores the player's answers, scores and statistics during the quiz.
let questionHint = "";
let playerAnswer = "";
let answerTime = 0;
let correctAnswer = 0;
let correctAnswers = Array();
let wrongAnswer = 0;
let wrongAnswers = Array();
let roundScore = 0;
let roundScores = Array();
let totalScore = 0;

// ==================== QUESTION FUNCTION ====================

// Displays the current question and handles the hint and answer input.
function currentQuestion(questionNumber) {
    console.log(questions[questionNumber].questionNumber + ". " + questions[questionNumber].questionText + "\n" + questions[questionNumber].answerOptions.join("\n"));
    // Keep asking until the player enters a valid YES or NO response.
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
    // Validate the player's answer and allow another input if the entry is invalid.
    let tryAgain = true;
    while (tryAgain === true) {
        playerAnswer = prompt.question("Please enter your answer as A, B, C, or D.");
        // Check whether the player's answer matches the correct answer.
        if (playerAnswer.toUpperCase() === questions[questionNumber].correctAnswer) {
            console.log("Correct! Well done.");
            correctAnswer++;
            roundScore += 3;
            console.log(`Round score is ${roundScore}.`);
            tryAgain = false;
        } else if (playerAnswer.toUpperCase() !== "A" && playerAnswer.toUpperCase() !== "B" && playerAnswer.toUpperCase() !== "C" && playerAnswer.toUpperCase() !== "D") {
            console.log("Invalid input. Please enter A, B, C, or D.");
        } else { 
            console.log("Incorrect answer.");
            wrongAnswer++;
            tryAgain = false;
        }
    }
    // Deduct one point if the player takes more than 20 seconds to answer.
    if (answerTime > 20) {
        roundScore--;
    } 
}

let questionCategory = "";
let questionCategories = Array();

// ==================== QUIZ LOOP ====================

// Run each question in sequence and collect results for every round.
for (let questionNumber = 1; questionNumber <= 20; questionNumber++) { 
    currentQuestion(questionNumber);
    // Assign the current set of four questions to its quiz category.
    switch (true) {
        case questionNumber < 5:
            questionCategory = "General Knowledge";
            break;
        case questionNumber >= 5 && questionNumber < 9:
            questionCategory = "Technology";
            break;
        case questionNumber >= 9 && questionNumber < 13:
            questionCategory = "Cybersecurity";
            break;
        case questionNumber >= 13 && questionNumber < 17:
            questionCategory = "Science";
            break;
        case questionNumber >= 17 && questionNumber <= 20:
            questionCategory = "Geography";
            break;
    }
    // After every four questions, save the round statistics and reset the counters.
    if (questionNumber % 4 == 0) {
        roundScores.push(roundScore);
        console.log(`Round scores are ${roundScores}.`);
        console.log(`Question category is ${questionCategory}.`)
        questionCategories.push(questionCategory);
        console.log(`Question categories are ${questionCategories}.`);
        totalScore += roundScore;
        console.log(`Total score is ${totalScore}.`);
        correctAnswers.push(correctAnswer);
        console.log(`Correct answers: ${correctAnswer}`);
        console.log(`Array of correct answers: ${correctAnswers}`);
        wrongAnswers.push(wrongAnswer);
        console.log(`Wrong answers: ${wrongAnswer}`);
        console.log(`Array of wrong answers: ${wrongAnswers}`);
        correctAnswer = 0;
        wrongAnswer = 0;
        roundScore = 0;
    }
}

// ==================== FINAL RESULTS ====================

console.log("FINAL RESULTS:");
console.log("");

// Add row labels so each type of result is clearly identified in the final table.
questionCategories.unshift("Question Categories");
correctAnswers.unshift("Correct Answers");
wrongAnswers.unshift("Wrong Answers");
roundScores.unshift("Round Scores");

// Store the result arrays inside a 2D array for formatted table output.
let rounds = [
     questionCategories,
     correctAnswers,
     wrongAnswers,
     roundScores
];

// Use nested loops to read each row and column of the 2D results array.
for (let i = 0; i < rounds.length; i++) {
    let row = "";
    for (let j = 0; j < rounds[i].length; j++) {
        // Convert each value to a string and add spacing to keep the columns aligned.
        row += String(rounds[i][j]).padEnd(25);
    }
    console.log(row);
}

console.log("");
console.log("Total Score: " + totalScore);