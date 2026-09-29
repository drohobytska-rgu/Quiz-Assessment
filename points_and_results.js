// const prompt = require("readline-sync");

const sienceQuestions = [
    {
        questionNumber: 1,
        questionText: "Which gas do humans need to breathe to survive?",
        answerOptions: [
            "A. Carbon dioxide",
            "B. Oxygen",
            "C. Helium",
            "D. Hydrogen"
        ],
        correctAnswer: "B",
        questionHint: "Your lungs take this gas from the air and your blood carries it around your body."
    }, 
    {
        questionNumber: 2,
        questionText: "What is the chemical symbol for gold?",
        answerOptions: [
            "A. Ag",
            "B. Fe",
            "C. Au",
            "D. Go"
        ],
        correctAnswer: "C",
        questionHint: "Its symbol comes from the Latin word “aurum”."
    },
    {
        questionNumber: 3,
        questionText: "Which organ pumps blood around the human body?",
        answerOptions: [
            "A. Liver",
            "B. Brain",
            "C. Lung",
            "D. Heart"
        ],
        correctAnswer: "D",
        questionHint: "It beats continuously and is part of the circulatory system."
    },
    {
        questionNumber: 4,
        questionText: "At approximately what temperature does water freeze under normal atmospheric conditions?",
        answerOptions: [
            "A. 0°C",
            "B. 10°C",
            "C. 50°C",
            "D. 100°C"
        ],
        correctAnswer: "A",
        questionHint:"On the Celsius scale, it is the point where positive temperatures meet negative temperatures."
    }
]


// ==========Checking answers, attempts and time============

function calculatingQuizPoints(userAnswers) {
    let totalScore = 0;
    for(const answer of userAnswers) {
        if(!answer.isCorrect) {
            totalScore += 0;
        } else if(!answer.hintsTaken && answer.timeTaken <=20) {
            totalScore += 3; 
        }else if(answer.hintsTaken && answer.timeTaken >20) {
            totalScore += 1;}
         else if(answer.hintsTaken || answer.timeTaken >20) {
            totalScore += 2;
        } 
    }
return(totalScore);
}


// =============Calculating results===============
function calculatingResults (userAnswers) {
    let correctAnswersCount = 0;
    const totalQuestions = userAnswers.length; 
    for(const answer of userAnswers) {
        if(answer.isCorrect) {
            correctAnswersCount++;
        }
    }
    let incorrectAnswersCount = totalQuestions - correctAnswersCount;
    // let presentage = totalQuestions > 0 ? Math.round(correctAnswersCount / totalQuestions *100);
    let percentage;
    if(totalQuestions > 0) {
        percentage = Math.round(correctAnswersCount / totalQuestions *100)
    } else {
        percentage = 0;
    }

    return{
        totalQuestions: totalQuestions,
        correctAnswers: correctAnswersCount,
        incorrectAnswers: incorrectAnswersCount,
        successResults: percentage
}
}

// =============Test=============

const testAnswers = [
  { isCorrect: true,  hintsTaken: false, timeTaken: 10 }, // Має бути 3 бали
  { isCorrect: true,  hintsTaken: true,  timeTaken: 15 }, // Має бути 2 бали
  { isCorrect: true,  hintsTaken: true,  timeTaken: 25 }, // Має бути 1 бал
  { isCorrect: false, hintsTaken: false, timeTaken: 5  }  // Має бути 0 балів
];

const testPoints = calculatingQuizPoints(testAnswers);
const testStats = calculatingResults(testAnswers);


console.log("--- Test ---");
console.log("Загальні бали:", testPoints);
console.log("Статистика:", testStats);




