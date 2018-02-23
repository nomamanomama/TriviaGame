//////////////////////////////////////////////
//
//  TRIVIA GAME CODE
//


    
/////////////////////////////////////////////
//  GLOBAL VARIABLES
//'
var gameState = ["start","question","answer"];

var currentGameState = gameState[0];

var game;

var answerTimeout = 7000;



/////////////////////////////////////////////
//  OBJECTS 
//

/////////////////////////////////////////
// QUESTION OBJECTS
function Question(id,question,answers,answerIndex,rewardSrc){
    this.id=id;
    this.question=question;
    this.answers=answers;
    this.answerIndex=answerIndex;
    this.rewardSrc=rewardSrc;
};

var q1 = new Question(
    1,
    "Who won the gold medal for Snowboarding in the 2014 Olympics?",
    ["Mary Lou Retton", "Shaun White", "Bo Jangles", "Tom Skerrit"],
    1,
    "#"
);
var q2 = new Question(
    2,
    "What did little bo peep lose?",
    ["goat", "kitten", "dog", "sheep"],
    3,
    "#"
);    
var q3 = new Question(
    3,
    "What is the largest state in the US?",
    ["Texas", "California", "Alaska", "Rhode Island"],
    2,
    "#"
);

var questionArray = [q1, q2, q3];


/////////////////////////////////////////
// TIMER OBJECT

function Timer (divTag) {
    this.time=30,
    this.divTag = divTag;
    this.intervalID=0;
    this.count = function () {
        time--;
        $(this.divTag).text(time);
        if (time === 0) { //the time has run out with no answer
           this.stop(); 
           $(this.divTag).dispatchEvent("change");
        } 
    },
    this.start = function () {
        intervalID = setInterval(this.count(), 1000);
    },
    this.stop= function () {
        clearInterval(this.intervalID);
    },
    this.isDone= function () {
        return (time === 0);
    },
    this.set= function (setTime) {
        time = setTime;
    }
}

/////////////////////////////////////////
// GAME OBJECT 

var game = {
    isPlaying:false,
    questions:questionArray,
    answerTime:30,
    currentQuestion:-1,
    timer: new Timer("#gameTimer"),
    numCorrect:0,
    
    
    initGame: function () {
        this.answerTime = 30;
        this.timer = new Timer("#gameTimer");
        this.timer.set(30);
        this.isPlaying = true;
    },
    displayCurrentQuestion: function (display) {
        if(display)
        {  
            var curQuestion = this.questions[this.currentQuestion];
            $(".question").text(curQuestion.question);
            $("#answer1").text(curQuestion.answers[0]);
            $("#answer2").text(curQuestion.answers[1]);
            $("#answer3").text(curQuestion.answers[2]);
            $("#answer4").text(curQuestion.answers[3]);
            $(".question-screen").show();
        }
        else{
            $(".question-screen").hide();
        }
    },
    displayCurrentAnswer: function (display) {
        if(display){
            var curQuestion = this.questions[this.currentQuestion];
            $(".answer").text(curQuestion.answers[curQuestion.answerIndex]);
            //display reward giphy
            $(".reward").html(curQuestion.rewardSrc);
            $(".answer-screen").show();
            //set a timeout to start the next question
            var timeoutID = window.setTimeout(startNextQuestion, 3000);
        }
        else {
            $(".answer-screen").hide();
        }
    },
    questionEnded: function(answer){
        this.timer.stop();
        if (typeof answer == "undefined")//player didn't answer
        {
            //display no answer message
        } 
        else if (this.isAnswerCorrect(answer)) {
            //correctly answered
            this.numCorrect++;
        }
    },
    isAnswerCorrect: function (playerAnswer) {
        var curQuestion = this.questions[this.currentQuestion];
        if (playerAnswer == curQuestion.answerIndex)
            return true;
        else 
            return false;    
    },
    gameOver: function (){
        this.isPlaying = false;
        this.displayCurrentAnswer(false);
        $("#start").text("Play Again");
        $(".start-screen").show();
    }


}

function startNextQuestion ()
{
    var index = game.currentQuestion + 1;
    if (index < game.questions.length){
        game.currentQuestion = index;
        game.displayCurrentQuestion(true);
        game.displayCurrentAnswer(false);
        game.timer.set(30);
        game.timer.start();
    }
    else { //we reached the end of our question list
        game.gameOver; 
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
        //change to question state
        currentGameState = gameState[1];
        
        //create a new game and initialize the first question and answer set
        game.initGame();
        startNextQuestion();

        //hide start and show question
        $(".start-screen").hide();
        game.displayCurrentQuestion(true);
    }); //close start on click function


    $(".answer-option").on("click", function () {
        var userAnswer = $(this).attr("value");
        console.log("Answer clicked");
        //change to answer state
        currentGameState = gameState[2];
        
        //notify game that question ended - game checks answer and stops timer
        game.questionEnded(userAnswer);

        //hide question
        game.displayCurrentQuestion(false);
        //show answer and move to next question after timeout
        game.displayCurrentAnswer(true);

    }); //close answer-option on click function





}); //close document.ready()