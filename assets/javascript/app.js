//////////////////////////////////////////////
//
//  TRIVIA GAME CODE
//


    
/////////////////////////////////////////////
//  GLOBAL VARIABLES
//'
var gameState = ["start","question","answer"];

var currentGameState = gameState[0];



/////////////////////////////////////////////
//  OBJECTS 
//
function Question(){
    id=0;
    question:"";
    answers:[];
    answerIndex:-1;
    rewardSrc:"";
};

var q1 = new Question(), 
    id = 1,
    question = "Who won the gold medal for Snowboarding in the 2014 Olympics?",
    answers = ["Mary Lou Retton", "Shaun White", "", ""];
answerIndex = 1;
rewardSrc = "#";
var q2 = new Question(),
    id = 2,
    question = "What did little bo peep lose?",
    answers = ["goat", "kitten", "dog", "sheep"];
answerIndex = 3;
rewardSrc = "#";
var q3 = new Question(),
    id = 3,
    question = "What is the largest state in the US?",
    answers = ["Texas", "California", "Alaska", "Rhode Island"];
answerIndex = 2;
rewardSrc = "#";


var questionArray = [q1, q2, q3];

function Timer () {
    this.time=30,
    this.count = function () {
        time--;
        if (time === 0) this.stop();
    },
    this.start = function () {
        setInterval(this.count(), 1000);
    },
    this.stop= function () {
        clearInterval(this.time);
    },
    this.isDone= function () {
        return (time === 0);
    },
    this.set= function (setTime) {
        time = setTime;
    }
}

function Game() {
    this.questions=questionArray,
    this.answerTime=30,
    this.currentQuestion=-1,
    this.timer= new Timer(),
    this.numCorrect=0,
    this.setQuestion= function (index) {
        //if index is within questions array, set question to questions[index]
        if(index < this.questions.length) {
            this.currentQuestion = index;
            return true;
        }
        else return false; 
    },
    this.initGame= function () {
        this.answerTime = 30;
        this.timer = new Timer();
        this.timer.set(30);
        this.setQuestion(0);
    },
    this.displayCurrentQuestion= function () {
        var curQuestion = this.questions[currentQuestion];
        $(".question").text(curQuestion.question);
        $(".answer1").text(curQuestion.answers[0]);
        $(".answer2").text(curQuestion.answers[1]);
        $(".answer3").text(curQuestion.answers[2]);
        $(".answer4").text(curQuestion.answers[3]);
    },
    this.displayCurrentAnswer= function () {
        var curQuestion = this.questions[currentQuestion];
        $(".answer").text(curQuestion.answers[answerIndex]);
        //display reward giphy
        $(".reward").html(curQuestion.rewardSrc);
    },
    this.isAnswerCorrect= function (playerAnswer) {
        var curQuestion = this.questions[currentQuestion];
        if (playerAnswer == curQuestion.answerIndex)
            return true;
        else 
            return false;    
    }


}



/////////////////////////////////////////////
//  EVENT HANDLERS
//
$(document).ready(function () {

if (currentGameState === gameState[0])
{
    $(".start-screen").show();
    $(".question-screen").hide();
    $(".answer-screen").hide();
}

$("#start").on("click", function () {
    console.log("Starting Game");
    //start a new game
    currentGameState = gameState[1];
    
    //create a new game and initialize the first question and answer set
    var game = new Game;
    game.initGame();

    //hide start and show question
    $(".start-screen").hide();
    $(".question-screen").show();
});






}); //close document.ready()