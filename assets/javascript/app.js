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
var winAudio = new Audio("./assets/audio/win.wav");
var loseAudio = new Audio("./assets/audio/whalemoan.wav");
var timeupAudio = new Audio("./assets/audio/sonar.wav");



/////////////////////////////////////////////
//  OBJECTS 
//

/////////////////////////////////////////
// QUESTION OBJECTS

function Question(id, question, answers, answerIndex, rewardSrc, rewardGif) {
    this.id = id;
    this.question = question;
    this.answers = answers;
    this.answerIndex = answerIndex;
    this.rewardSrc = rewardSrc;
    this.rewardGif = rewardGif;
};

var q1 = new Question(
    1,
    "What is the largest fish in the world?",
    ["Blue Whale", "Whale Shark", "Great White", "Basking Shark"],
    1,
    "The whale shark (Rhincodon typus) is a slow-moving, filter-feeding carpet shark and the largest known extant fish species. The largest confirmed individual had a length of 12.65 m (41.5 ft) and a weight of about 21.5 t (47,000 lb).",
    "<img width='320' height='180' src='./assets/images/q1-1.jpg' alt='whale shark'>"

);

var q2 = new Question(
    2,
    "What is the largest whale?",
    ["Blue Whale", "Beluga Whale", "Orca Whale", "Humpback Whale"],
    0,
    "The blue whale (Balaenoptera musculus) is a marine mammal belonging to the baleen whales (Mysticeti). At ~100 feet in length and with a maximum recorded weight of 173 tonnes, it is the largest animal known to have ever existed.",
    "<img  width='320' height='180' src='./assets/images/q2-1.jpg' alt='blue whale'>"
);

var q3 = new Question(
    3,
    "What is the smallest whale?",
    ["Blue Whale", "Harbor Porpoise", "Pygmy Sperm Whale", "Sei Whale"],
    1,
    "The Harbor Porpoise is one of the smallest at ~5 feet when grown up.",
    "<img  width='320' height='180' src='./assets/images/q3-1.jpg' alt='harbor porpoise'>"
);

var q4 = new Question(
    4,
    "What is the largest snail?",
    ["Giant African Land Snail", "Roman Snail", "Australian Trumpet", "Garden Snail"],
    2,
    "The Australian Trumpet grows to ~3 feet! That's one big snail.",
    "<img  width='320' height='180' src='./assets/images/q4-1.jpg' alt='australian trumpet'>"
);

var q5 = new Question(
    5,
    "The oceans cover ______ of the Earth's surface?",
    ["60 percent", "70 percent", "90 percent", "75 percent"],
    1,
    "The “seven seas” take up 70 percent of the Earth's surface and include 97 percent of the world's water.",
    "<img  width='320' height='180' src='./assets/images/q5-1.jpg' alt='ocean-pic'>"
);

var q6 = new Question(
    6,
    "Which ocean is the largest?",
    ["Pacific ocean", "Atlantic ocean", "Indian ocean", "Artic ocean"],
    0,
    "The Pacific ocean, which includes the North and South Pacific subdivisions, is the largest ocean. The Pacific ocean is 181 million square kilometers (70 million square miles).",
    "<img  width='320' height='180' src='./assets/images/q6-1.jpg' alt='pacific ocean'>"
);

var q7 = new Question(
    7,
    "Which ocean basin is the most geologically active?",
    ["Pacific ocean", "Atlantic ocean", "Indian ocean", "Artic ocean"],
    0,
    "The Pacific ocean contains many volcanic vents, seamounts and deep trenches.The Pacific basin is a rocky floor.",
    "<img  width='320' height='180' src='./assets/images/q7-1.jpg' alt='pacific ocean activity'>"
);

var q8 = new Question(
    8,
    "What force causes water to move around the world?",
    ["wind", "gravity", "solar", "both wind and gravity"],
    3,
    "Shallow water is driven by wind, whereas deep water is driven by gravity.",
    "<img  width='320' height='180' src='./assets/images/q8-1.jpg' alt='wind and gravity'>"
);

var q9 = new Question(
    9,
    "Ocean water moves:",
    ["from north to south", "from south to north", "in a circular pattern", "east to west"],
    2,
    "Ocean water moves in large circular patterns called gyres. The Gulf Stream, which moves from Florida to the North Atlantic Ocean, is an example of a gyre.",
    "<img  width='320' height='180' src='./assets/images/q9-1.jpg' alt='ocean circular movement'>"
);

var q10 = new Question(
    10,
    "What are thermohaline currents?",
    ["cold water currents from the arctic", "warm water currents from Africa", "currents that move up and down in the ocean", "water that moves in circles"],
    2,
    "Thermohaline currents move from the surface of the water down to the ocean floor and back.",
    "<img  width='320' height='180' src='./assets/images/q10-1.jpg' alt='currents'>"
);

var q11 = new Question(
    11,
    "What type of water is more dense?",
    ["polar, cold water", "equator, hot water", "water close to the shore", "water at the ocean's deepest point"],
    0,
    "Polar water is more dense because molecules travel closer together and because of salt crystals in the water.",
    "<img  width='320' height='180' src='./assets/images/q11-1.jpg' alt='water'>"
);


var q12 = new Question(
    12,
    "Who was the first female Chief Scientist at the National Oceanic and Atmospheric Administration (NOAA)?",
    ["Rachel Carson", "Helen Battle", "Eugenie Clark", "Sylvia Earle"],
    3,
    "Sylvia Alice Earle is an American marine biologist, explorer, author, and lecturer. In 1990, she accepted an appointment as Chief Scientist of NOAA becoming the first woman to hold that position.",
    "<img  width='320' height='180' src='./assets/images/q12-1.jpg' alt='Sylvia Earle'>"
);

var q13 = new Question(
    13,
    "What are the abyssal plains?",
    ["mountainous areas of the ocean floor", "flat areas of the ocean floor",  "rocky and gagged areas of the ocean floor", "shallow areas near the coastline"],
    1,
    "A large part of the ocean floor is flat and made up of sediment. These areas are known as the abyssal plains.",
    "<img  width='320' height='180' src='./assets/images/q13-1.jpg' alt='abyssal plains'>"
);

var q14 = new Question(
    14,
    "What is the deepest point in the ocean?",
    ["South Sandwich Trench", "Tonga Trench", "Kuril-Kamchatka Trench", "Mariana Trench"],
    3,
    "35,802 ft(10, 912 m) At the deepest point of the trench(and the deepest point on earth) the pressure is over 8 tons per square inch, or the equivalent of an average - sized woman holding up 48 jumbo jets.",
    "<img  width='320' height='180' src='./assets/images/q14-1.jpg' alt='Mariana Trench'>"
);

var q15 = new Question(
    15,
    "What are the main categories of sea life?",
    ["swimmers and non-swimmers", "swimmers, floaters and creatures on the sea floor", "fish, mammals and microscopic creatures", "microscopic and non-microscopic"],
    1,
    "Sea life consists of plankton (floaters), nekton (swimmers) and benthos (creatures on the sea floor).",
    "<img  width='320' height='180' src='./assets/images/q15-1.jpg' alt='sea life'>"
);

var q16 = new Question(
    16,
    "What are phytoplankton?",
    ["a larger version of plankton", "organisms that eat plankton", "microscopic algae", "barnacles"],
    2,
    "Phytoplankton are microscopic algae that engage in photosynthesis.",
    "<img  width='320' height='180' src='./assets/images/q16-1.jpg' alt='phytoplankton'>"
);

var q17 = new Question(
    17,
    "What year was the Titanic found?",
    ["1955", "1970", "1980", "1985"],
    3,
    "On September 1, 1985 Dr.Robert Ballard, with the help of a tiny robotic submarine named Jason, discovered the wreck of the Titanic. The wreck was found in 12,500 feet (two and a half miles) of water about 375 miles off the coast of Newfoundland in Canada.",
    "<img  width='320' height='180' src='./assets/images/q17-1.jpg' alt='titanic wreckage'>"
);

var q18 = new Question(
    18,
    "What is the average temperature in the ocean?",
    ["-39 degrees Farenheit", "-12 degrees Farenheit", "32 degrees Farenheit", "39 degrees Farenheit"],
    3,
    "The temperature of almost all of the deep ocean is only a few degrees above freezing, 39F (4C)",
    "<img  width='320' height='180' src='./assets/images/q18-1.jpg' alt='temp ocean'>"
);

var q19 = new Question(
    19,
    "What sea life is at the very bottom of the food chain?",
    ["phytoplankton", "microscopic fish", "zooplankton", "plankton"],
    0,
    "Phytoplankton, which produces carbohydrates, is at the very bottom of the food chain. Phytoplankton is consumed by plankton.",
    "<img  width='320' height='180' src='./assets/images/q19-1.jpg' alt='phytoplankton'>"
);

var q20 = new Question(
    20,
    "What year did the Titanic sink?",
    ["1908", "1915", "1912", "1918"],
    2,
    "Titanic sank on April 15, 1912. The White Star Liner Titanic sank after striking an iceberg in the North Atlantic Ocean. Over 1500 passengers lost their lives during one of the worst peacetime maritime disasters in history. This tragedy lead to a concerted effort to devise an acoustic means of discovering objects in the water ahead of a moving vessel.",
    "<img  width='320' height='180' src='./assets/images/q20-1.jpg' alt='titanic sailing'>"
);

var q21 = new Question(
    21,
    "What sea creature may have cancer-fighting properties?",
    ["sponge", "sharks", "whales", "phytoplankton"],
    0,
    "Researchers are investigating the cancer fighting properties of the ocean sponge and the sea - squirt.",
    "<img  width='320' height='180' src='./assets/images/q21-1.jpg' alt='sponge'>"
);


var q22 = new Question(
    22,
    "Seaweed compounds are added: ",
    ["beer", "ice cream", "salad dressing", "all of the above"],
    3,
    "The Japanese eat more than 20 different varieties of seaweed.American use seaweed in abundance as well.Seaweed compounds are added to beer, ice cream and salad dressing.",
    "<img  width='320' height='180' src='./assets/images/q22-1.jpg' alt='seaweed beer, ice cream, salad dressing'>"
);


var questionArray = [q1,q2,q3,q4,q5,q6,q7,q8,q9,q10,q11,q12,q13,q14,q15,q16,q17,q18,q19,q20,q21,q22];


/////////////////////////////////////////
// TIMER OBJECT
var counter;
var timer = {
    time:0,
    count: function () {
        $("#gameTimer").text(timer.time);
        timer.time--;
        console.log(timer.time);       
        if (timer.time < 0) { //the time has run out with no answer
           timer.stop(); 
           game.questionEnded();
        } 
    },
    start: function () {
        counter = setInterval(timer.count, 1000);
    },
    stop: function () {
        clearInterval(counter);
    },
    set: function (setTime) {
        timer.time = setTime;
    }
}

/////////////////////////////////////////
// GAME OBJECT 

var game = {
    isPlaying:false,
    questions:questionArray,
    answerTime:30,
    currentQuestion:-1,
    numCorrect:0,
    
    
    initGame: function () {
        timer.set(this.answerTime);
        this.isPlaying = true;
        this.currentQuestion=-1;
        this.numCorrect = 0;
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
            //display reward description and pic/gif
            $(".reward").html(curQuestion.rewardSrc);
            $(".reward-pic").html(curQuestion.rewardGif);
            $(".answer-screen").show();
            //set a timeout to start the next question
            var timeoutID = window.setTimeout(startNextQuestion, 7000);
        }
        else {
            $(".answer-screen").hide();
        }
    },
    questionEnded: function(answer){
        timer.stop();
        if (typeof answer == "undefined")//player didn't answer
        {
            $("#answer-message").text("TIME'S UP!");
            //display no answer message
            this.displayCurrentQuestion(false);
            this.displayCurrentAnswer(true);
            timeupAudio.play();
            
        } 
        else if (this.isAnswerCorrect(answer)) {
            //correctly answered
            this.numCorrect++;
            $("#wins").text(this.numCorrect);
            $("#answer-message").text("CORRECT! Good Job!");
            winAudio.play();
        }
        else{
            $("#answer-message").text("INCORRECT");
            loseAudio.play();
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
        //reset the timer to the defined answer time
        timer.set(game.answerTime);
        $("#gameTimer").text(timer.time);
        game.currentQuestion = index;
        game.displayCurrentQuestion(true);
        game.displayCurrentAnswer(false);
        timer.start();
    }
    else { //we reached the end of our question list
        game.gameOver(); 
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