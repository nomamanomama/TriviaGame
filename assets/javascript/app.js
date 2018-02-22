//////////////////////////////////////////////
//
//  TRIVIA GAME CODE
//

/////////////////////////////////////////////
//  GLOBAL VARIABLES
//
var questionArray = [];

/////////////////////////////////////////////
//  OBJECTS 
//
var Question = {
    id,
    question:"",
    answers:[],
    correctAnswer:"",
    rewardSrc:""
    
}

var Game = {
    questions:[],
    answerTime:30,
    currentQuestion,
    currentTime,
    numCorrect:0,
    initGame: function() {
        
    }

}

/////////////////////////////////////////////
//  EVENT HANDLERS
//