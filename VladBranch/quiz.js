const prompt = require("readline-sync");


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