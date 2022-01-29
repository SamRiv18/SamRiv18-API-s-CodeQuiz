
var question = document.getElementById('question');
var answers = Array.from(document.getElementsByClassName('ans-text'));
var timerEl=document.getElementById("timer_set");
var startTime=document.getElementById("startBtn");

var currentQuestion ={};
var acceptingAnswers = false;
var score= 0;
var questionCounter= 0;
var avaliableQuestions= [];



// array taht holds the set of questions
var questions= [
    {
        question:"Commonly used data types DO NOT include:",
        option1:"strings",
        option2:"booleans",
        option3:"alerts",
        option4:"numbers",
        answers:3
    },

    {
        question:"The condition in an if / else statement is enclosed within ____. ",
        option1:"quotes",
        option2:"curly",
        option3:"brackets",
        option4:"parentheses",
        answers:4
    },

    {
        question:"Arrays in JavaScript can be used to store ____.",
        option1:"numbers and strings",
        option2:"other arrays",
        option3:"booleans ",
        option4:"all of the above ",
        answers:4
    },

    {
        question:"String values must be enclosed within ____ when being assigned to variables. ",
        option1:"commas",
        option2:"curly",
        option3:"brackets",
        option4:"quotes",
        answers:4
    },

    {
        question:"A very useful tool used during development and debugging for printing content to the debugger is:",
        option1:"JavaScript",
        option2:"terminal",
        option3:"for loops",
        option4:"console.log",
        answers:4
    },
]

// set of questions avaliable for the quiz
var numberOfQuestions = 5;

startGame = () => {
    questionCounter  = 0;
    score = 0;
    avaliableQuestions = [... questions];
    console.log(avaliableQuestions);
    getNewQuestion();
}

getNewQuestion = () =>{
    
    //incriments through the set of questions by 1 each time
    questionCounter ++;

    // chooses a random question from the set each time the function loads 
    var randQuestion = Math.floor(Math.random()*avaliableQuestions.length);
    currentQuestion=avaliableQuestions[randQuestion];
    question.innerText= currentQuestion.question;
    // ***********************************************************************
    
    // displays the answers for the corresponding questions
    answers.forEach(answers =>{
        var option = answers.dataset['number'];
        answers.innerText = currentQuestion['option' + option];
    });
    // **********************************************************************
    
    //gets rid of the displayed question from the array so it doesn't repeat
    avaliableQuestions.splice(randQuestion,1);

    acceptingAnswers= true

    //listens for when one of the answers is clicked 
    answers.forEach(question => {
        question.addEventListener('click', e => {
            console.log(e.target);
        })
    })
};

startGame();
