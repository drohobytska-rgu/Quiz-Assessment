const prompt = require("readline-sync");

// Stores results for the final result board
let resultArr = [];


// Class used to create quiz questions
class Question {

    // Stores all created Question objects
    static allQuestions = [];

    constructor(name, question, answers,correctAnswers, questionHint ) {

        // Store question data inside the object
        this.name = name;
        this.question = question;
        this.answers = answers;
        this.correctAnswers = correctAnswers;
        this.questionHint = questionHint; 

        // Automatically add every new question to the list
        Question.allQuestions.push(this); 
    }
}


// Create Question 1
const question1 = new Question("Question 1", 
                            "What is the capital city of Australia? ", 
                            ["A. Sydney", "B. Melbourne", "C. Canberra", "D. Brisbane"], 
                            "C", 
                            "It is not Australia’s largest or most famous city. It is located inland between Sydney and Melbourne.");


// Create Question 2
const question2 = new Question("Question 2",
                               "Which planet is the largest in our Solar System?",
                               ["A. Earth", "B. Jupiter", "C. Saturn", "D. Mars" ],
                               "B",
                               "This planet is a gas giant and is famous for the Great Red Spot.");




// Checks if a hint is available for the current question
// Also updates the score and counts used hints
function HintCheck(hint, roundScore, currentQuestion, numberOfHintsUsed) {  

    // Hint can only be used once for each question
    if( hint == 1){

        // Display the hint for the current question
        console.log("----------" + "\n" + currentQuestion.questionHint + "\n" + "----------");

        // Mark the hint as used
        hint -= 1;

        // Deduct one point for using a hint
        roundScore -=1;

        // Increase the total number of hints used
        numberOfHintsUsed += 1;
          
    } else if(hint != 1) {

        // Message shown if the hint has already been used
        console.log("============" + "\n" + "You have no hint left!" + "\n" + "============");
        
    }

    // Return updated hint, score and hint counter
    return [hint, roundScore, numberOfHintsUsed];
        
}   


// Loops through all Question objects
// Keeps track of the total score and number of hints used
function QuestionsLoop() {

    // Index used to move through the question list
    let i = 0;

    // Total score for the quiz
    let roundScore = 0;

    // Counter for all hints used during the quiz
    numberOfHintsUsed = 0;

    // Continue until all questions have been completed
    while( i < Question.allQuestions.length) {

        // Each new question starts with one available hint
        let hint = 1;

        // Get the current question from the Question class
        let currentQuestion = Question.allQuestions[i];

        // Display the question number/name
        console.log(currentQuestion.name);

        // Run answer checking and receive updated score and hint count
        let result = AnswerCheck(currentQuestion, hint, roundScore, numberOfHintsUsed);

        // Save returned values
        roundScore = result[0];
        numberOfHintsUsed = result[1];

        // Move to the next question
        i++;

        // Save question name and current score for the result board
        resultArr.push(currentQuestion.name);
        resultArr.push(roundScore);
        
    }  

    // Return final score and total number of hints used
    return [roundScore, numberOfHintsUsed];
}   


// Handles player input and checks the answer for the current question
function AnswerCheck(currentQuestion, hint, roundScore, numberOfHintsUsed) {

    // Ask the player the current question and convert input to uppercase
    let answer = prompt.question(currentQuestion.question + "\n" + currentQuestion.answers.join("\n") + "\n" +  "If you want to use a hint, type 'HINT' or 'hint' in the answer field." + "\n" + "Your answer is: ").toUpperCase();

    // Controls answer attempts
    let d = 1;

    // Continue while the answer is incorrect and attempts are available
    while( answer !== currentQuestion.correctAnswers && d <= 2 ) { 

        // Check if the player requested a hint
        if(isNaN(answer) && answer == "HINT") { 

                // Run hint logic and receive updated values
                let result = HintCheck(hint, roundScore, currentQuestion, numberOfHintsUsed);

                // Update hint state, score and total hint count
                hint = result[0];
                roundScore = result[1];
                numberOfHintsUsed = result[2];

                d++; 

                // Ask the question again after showing the hint
                answer = prompt.question(currentQuestion.question + "\n" + currentQuestion.answers.join("\n") + "\n" + "Your answer is: ").toUpperCase();

        // If the player entered a wrong letter answer
        }else if(isNaN(answer) && answer != "HINT") {

                console.log("============" + "\n" + "Wrong!" + "\n" + "============");

                d++;
                break;

        // Numbers are not accepted as answers
        }else if(!isNaN(answer)) {

                console.log("============" + "\n" + "Must be a LETTER!" + "\n" + "============" );

                // Numbers do not end the question, so ask again
                answer = prompt.question(currentQuestion.question + "\n" + currentQuestion.answers.join("\n") + "\n" + "Your answer is: ").toUpperCase();
        }   
    }

    // Add points if the final answer is correct
    if(answer == currentQuestion.correctAnswers) {

        console.log("Correct!");

        roundScore += 3;  
    }

    // Return updated score and total number of hints used
    return [roundScore, numberOfHintsUsed];
}


// Displays the final results after all questions are completed
function ResultBoard(score, numberOfHintsUsed) {

    // Run the quiz and receive the final score and hint count
    let finalResult = QuestionsLoop();

    score = finalResult[0];
    numberOfHintsUsed = finalResult[1];

    console.log("------------------------Result Board------------------------");

    // Display saved question results
    for(let i = 0; i < resultArr.length; i++) {

        if(i % 2 == 0) {

            console.log(resultArr[i] + " - " + resultArr[i+1] + " points");
        }
    }

    // Display the final total score
    console.log("Total Score: " + Math.trunc(score));

    // Display total number of hints used
    console.log("Number of hints used: " + numberOfHintsUsed);
}   


// Start the quiz
ResultBoard();