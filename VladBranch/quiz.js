const prompt = require("readline-sync");
let resultArr = [];

class Question {
    static allQuestions = [];
    constructor(name, question, answers,correctAnswers, questionHint ) {
        this.name = name;
        this.question = question;
        this.answers = answers;
        this.correctAnswers = correctAnswers;
        this.questionHint = questionHint; 
        Question.allQuestions.push(this); 
    }
    
    
}

const question1 = new Question("Question 1", 
                            "What is the capital city of Australia? ", 
                            ["A. Sydney", "B. Melbourne", "C. Canberra", "D. Brisbane"], 
                            "C", 
                            "It is not Australia’s largest or most famous city. It is located inland between Sydney and Melbourne.");

const question2 = new Question("Question 2",
                               "Which planet is the largest in our Solar System?",
                               ["A. Earth", "B. Jupiter", "C. Saturn", "D. Mars" ],
                               "B",
                               "This planet is a gas giant and is famous for the Great Red Spot.");




function HintCheck(hint, roundScore, currentQuestion) {  
    if( hint == 1){
        console.log("----------" + "\n" + currentQuestion.questionHint + "\n" + "----------");
        hint -= 1;
        roundScore -=1;
          
    } else if(hint != 1) {
        console.log("============" + "\n" + "You have no hint left!" + "\n" + "============");
        
    }
    return [hint, roundScore];
        
}   

function QuestionsLoop() {
    let i = 0;
    let roundScore = 0;
    while( i < Question.allQuestions.length) {
        let hint = 1;
        let currentQuestion = Question.allQuestions[i];
        console.log(currentQuestion.name);
        roundScore = AnswerCheck(currentQuestion, hint, roundScore);
        i++;
    }
    return roundScore;
}   



function AnswerCheck(currentQuestion, hint, roundScore) {
    let answer = prompt.question(currentQuestion.question + "\n" + currentQuestion.answers.join("\n") + "\n" + "Your answer is: ").toUpperCase();
    let d = 1;
    while( answer !== currentQuestion.correctAnswers && d <= 2 ) { 
        if(isNaN(answer) && answer == "HINT") { 
                let result = HintCheck(hint, roundScore, currentQuestion);
                hint = result[0];
                roundScore = result[1];
                d++; 
                answer = prompt.question(currentQuestion.question + "\n" + currentQuestion.answers.join("\n") + "\n" + "Your answer is: ").toUpperCase();
        }else if(isNaN(answer) && answer != "HINT") {
                console.log("============" + "\n" + "Wrong!" + "\n" + "============");
                d++;
                break;
        }else if(!isNaN(answer)) {
                console.log("============" + "\n" + "Must be a LETTER!" + "\n" + "============" );
                answer = prompt.question(currentQuestion.question + "\n" + currentQuestion.answers.join("\n") + "\n" + "Your answer is: ").toUpperCase();
        }   
    }
    if(answer == currentQuestion.correctAnswers) {
        console.log("Correct!");
        roundScore += 3;  
    }
    return roundScore;
}



function ResultBoard(finalScore) {
    resultArr.push(finalScore);
    console.log("----------------RESULT----------------" + "\n" + "1. " + resultArr.toString());

}

ResultBoard(QuestionsLoop());