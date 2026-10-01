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
   console.log("Please don't use symbols.");
}
else{ console.log("Hello " , playerName , "!\n \n",
        " Here are the rules you need to know before taking the quiz.\n\n",

    "==========Quiz Rules==========\n\n",
    "1. There are 4 questions in each category.\n\n",
    "2. Each question has 4 answer options.\n\n",
    "3. You have 20 seconds to answer each question.\n\n",
    "4. Each question has one available hint.\n\n",
    "5. 3 points - correct answer with no hint and within 20 seconds\n\n",
    "6. 2 points - correct answer with a hint OR after 20 seconds\n\n",
    "7. 1 point - correct answer with a hint AND after 20 seconds\n\n",
    "8. 0 points - incorrect answer. The attempt ends immediately, with no second guess, and you move on to the next question.\n")
     ;
    break;
}}

console.log(prompt.question ("Are you ready to start the quiz? If yes, press ENTER to start the quiz:"))

// ==================== QUESTION BANK ====================

// Stores all quiz questions, answer options, hints and correct answers.
let questions = Array();

questions[1] = {
    questionNumber: 1,
    questionText: "What is the capital city of Australia?",
    answerOptions: ["A. Sydney", "B. Melbourne", "C. Canberra", "D. Brisbane"],
    questionHint: "It is not Australia’s largest or most famous city. It is located inland between Sydney and Melbourne.",
    correctAnswer: "C",
};

questions[2] = {
    questionNumber: 2,
    questionText: "Which planet is the largest in our Solar System?",
    answerOptions: ["A. Earth", "B. Jupiter", "C. Saturn", "D. Mars"],
    questionHint: "This planet is a gas giant and is famous for the Great Red Spot.",
    correctAnswer: "B",
};

questions[3] = {
    questionNumber: 3,
    questionText: "How many sides does a hexagon have?",
    answerOptions: ["A. 5", "B. 6", "C. 7", "D. 8"],
    questionHint: "Think of the prefix “hex-”, which is connected with the number six.",
    correctAnswer: "B",
};

questions[4] = {
    questionNumber: 4,
    questionText: "Which ocean is the largest?",
    answerOptions: ["A. Atlantic Ocean", "B. Indian Ocean", "C. Arctic Ocean", "D. Pacific Ocean"],
    questionHint: "It lies between Asia and Australia on one side and the Americas on the other.",
    correctAnswer: "D",
};

questions[5] = {
    questionNumber: 5,
    questionText: "What does CPU stand for?",
    answerOptions: ["A. Central Processing Unit", "B. Computer Personal Unit", "C. Central Program Utility", "D. Computer Processing User"],
    questionHint: "It is often described as the “brain” of the computer because it processes instructions.",
    correctAnswer: "A",
};

questions[6] = {
    questionNumber: 6,
    questionText: "What is the main purpose of RAM in a computer?",
    answerOptions: ["A. To permanently store files", "B. To temporarily store data currently being used", "C. To connect the computer to the internet", "D. To display images on the screen"],
    questionHint: "The information stored here is temporary and is normally lost when the computer is switched off.",
    correctAnswer: "B",
};

questions[7] = {
    questionNumber: 7,
    questionText: "What is an algorithm?",
    answerOptions: ["A. A type of computer virus", "B. A physical computer component", "C. A sequence of steps used to solve a problem", "D. A type of internet connection"],
    questionHint: "Think of a set of ordered instructions for completing a task or solving a problem.",
    correctAnswer: "C",
};

questions[8] = {
    questionNumber: 8,
    questionText: "What is the main purpose of Git?",
    answerOptions: ["A. To design websites", "B. To track changes made to files during development", "C. To increase computer speed", "D. To protect a computer from viruses"],
    questionHint: "Developers use it to keep a history of changes to their code and work together.",
    correctAnswer: "B",
};

questions[9] = {
    questionNumber: 9,
    questionText: "What does VPN stand for?",
    answerOptions: ["A. Virtual Private Network", "B. Verified Public Network", "C. Virtual Personal Node", "D. Variable Private Network"],
    questionHint: "It creates a private connection between your device and another network over the internet.",
    correctAnswer: "A",
};

questions[10] = {
    questionNumber: 10,
    questionText: "What is phishing?",
    answerOptions: ["A. A method of improving network speed", "B. An attempt to trick someone into revealing sensitive information", "C. A method of compressing files", "D. A type of computer hardware"],
    questionHint: "It often involves fake emails or messages designed to make the victim give away confidential information.",
    correctAnswer: "B",
};

questions[11] = {
    questionNumber: 11,
    questionText: "Which of these is an example of two-factor authentication?",
    answerOptions: ["A. Entering the same password twice", "B. Using two different usernames", "C. Using a password and a verification code sent to your phone", "D. Using two different passwords"],
    questionHint: "It requires two different kinds of proof, such as something you know and something you receive or possess.",
    correctAnswer: "C",
};

questions[12] = {
    questionNumber: 12,
    questionText: "What is the main purpose of encryption?",
    answerOptions: ["A. To increase internet speed", "B. To make files smaller", "C. To protect information from unauthorised access", "D. To remove computer viruses"],
    questionHint: "It transforms readable information so that people without permission cannot easily understand it.",
    correctAnswer: "C",
};

questions[13] = {
    questionNumber: 13,
    questionText: "Which gas do humans need to breathe to survive?",
    answerOptions: ["A. Carbon dioxide", "B. Oxygen", "C. Helium", "D. Hydrogen"],
    questionHint: "Your lungs take this gas from the air and your blood carries it around your body.",
    correctAnswer: "B",
};

questions[14] = {
    questionNumber: 14,
    questionText: "What is the chemical symbol for gold?",
    answerOptions: ["A. Ag", "B. Fe", "C. Au", "D. Go"],
    questionHint: "Its symbol comes from the Latin word “aurum”.",
    correctAnswer: "C",
};

questions[15] = {
    questionNumber: 15,
    questionText: "Which organ pumps blood around the human body?",
    answerOptions: ["A. Liver", "B. Brain", "C. Lung", "D. Heart"],
    questionHint: "It beats continuously and is part of the circulatory system.",
    correctAnswer: "D",
};

questions[16] = {
    questionNumber: 16,
    questionText: "At approximately what temperature does water freeze under normal atmospheric conditions?",
    answerOptions: ["A. 0°C", "B. 10°C", "C. 50°C", "D. 100°C"],
    questionHint: "On the Celsius scale, it is the point where positive temperatures meet negative temperatures.",
    correctAnswer: "A",
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
let correctAnswer = 0;
let correctAnswers = Array();
let wrongAnswer = 0;
let wrongAnswers = Array();
let startTime;
let endTime;
let userAnswers = [];
let isCorrect = false;
let hintsTaken = false;
let roundScore;
let roundScores = Array();

// ==================== YOUR SCORING & RESULTS FUNCTIONS ====================

function calculatingQuizPoints(userAnswers) {
    let totalScore = 0;
    for (const answer of userAnswers) {
        if (!answer.isCorrect) {
            totalScore += 0;
        } else if (!answer.hintsTaken && answer.timeTaken <= 20) {
            totalScore += 3; 
        } else if (answer.hintsTaken && answer.timeTaken > 20) {
            totalScore += 1;
        } else if (answer.hintsTaken || answer.timeTaken > 20) {
            totalScore += 2;
        } 
    }
    return totalScore;
}

function calculatingResults(userAnswers) {
    let correctAnswersCount = 0;
    const totalQuestions = userAnswers.length; 
    for (const answer of userAnswers) {
        if (answer.isCorrect) {
            correctAnswersCount++;
        }
    }
    let incorrectAnswersCount = totalQuestions - correctAnswersCount;

    return {
        totalQuestions: totalQuestions,
        correctAnswers: correctAnswersCount,
        incorrectAnswers: incorrectAnswersCount,
    };
}

// ==================== QUESTION FUNCTION ====================

function hintCheck(questionNumber, questionHint) {  
    let hintSuggestion = true;
    let isHintUsed = false;
    while (hintSuggestion === true) {
        questionHint = prompt.question("Would you like a hint?");
        if (questionHint.toLowerCase() === "yes") {
            console.log("----------" + "\n" + questions[questionNumber].questionHint + "\n" + "----------");
        hintSuggestion = false;
        isHintUsed = true;
        } else if (questionHint.toLowerCase() !== "yes" && questionHint.toLowerCase() !== "no") {
            console.log("Please enter YES to see the hint, or NO if you want to try answering without a hint.");
        } else {
            hintSuggestion = false;
        }
    }
          
    return isHintUsed;
        
}   

// Displays the current question and handles the hint and answer input.
function currentQuestion(questionNumber) {
    console.log(questions[questionNumber].questionNumber + ". " + questions[questionNumber].questionText + "\n" + questions[questionNumber].answerOptions.join("\n"));
    startTime = Date.now();
    
    // Hint check function is called to ask the player if they want a hint for the current question.
    hintsTaken = hintCheck(roundScore, questionNumber, questionHint);

    // Validate the player's answer and allow another input if the entry is invalid.
    let tryAgain = true;
    while (tryAgain === true) {
        playerAnswer = prompt.question("Please enter your answer as A, B, C, or D.");
        // Check whether the player's answer matches the correct answer.
        if (playerAnswer.toUpperCase() === questions[questionNumber].correctAnswer) {
            console.log("Correct! Well done.");
            endTime = Date.now();
            correctAnswer++;
            tryAgain = false;
            isCorrect = true;
        } else if (playerAnswer.toUpperCase() !== "A" && playerAnswer.toUpperCase() !== "B" && playerAnswer.toUpperCase() !== "C" && playerAnswer.toUpperCase() !== "D") {
            console.log("Invalid input. Please enter A, B, C, or D.");
        } else { 
            console.log("Incorrect answer.");
            endTime = Date.now();
            wrongAnswer++;
            tryAgain = false;
            isCorrect = false;
        }
    }

    let timeTaken = ((endTime - startTime) / 1000); // Calculate how long the player took to answer and convert the time from milliseconds to seconds.

    userAnswers.push({
        isCorrect: isCorrect,
        hintsTaken: hintsTaken,
        timeTaken: timeTaken
    });
    // Deduct one point if the player takes more than 20 seconds to answer.
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
    if (questionNumber % 4 === 0) {
        roundScores.push(roundScore);
        questionCategories.push(questionCategory);
        correctAnswers.push(correctAnswer);
        wrongAnswers.push(wrongAnswer);
        correctAnswer = 0;
        wrongAnswer = 0;
        roundScore = 0;
    }
}

// ==================== FINAL RESULTS ====================

console.log("FINAL RESULTS:");
console.log("");

const totalPoints = calculatingQuizPoints(userAnswers);

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
console.log("Total Points: " + totalPoints);