
var question = document.getElementById('question');
var answers = Array.from(document.getElementsByClassName('ans-text'));
var remainingQuestions =document.getElementById("number");
var startTime=document.getElementById("startBtn");
var timeEl = document.querySelector(".timer_set");
var feedBack = document.querySelector(".feedBack");

var currentQuestion ={};
var acceptingAnswers = false;
var questionCounter= 0;
var avaliableQuestions= [];

// variable that starts the timer
var gameClock=50;

var timeleft;
var updateTime;

// countDown function taht displays the time
function countDown(time){
    timeleft= setInterval(timer, 1000); function timer(){
        timeEl.textContent = time;
        time--;
        
        // once timer hits zero, the game will direct them to the highscore page. 
        if(time<=0){
            return window.location.assign("saveScore.html")
        }
        else
        { 
            updateTime = time;
            return updateTime;
        }
    }
}

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
    avaliableQuestions = [... questions];
    getNewQuestion();
    countDown(gameClock);
}

getNewQuestion = () =>{
       
    if (avaliableQuestions.length==0 || questionCounter >= numberOfQuestions){
        if(updateTime >=0){
        localStorage.setItem('finalScore',updateTime);
    }
    else{
        localStorage.setItem('finalScore',0);
    }
        return window.location.assign("saveScore.html")
    }
    
    //incriments through the set of questions by 1 each time
    questionCounter ++;

    // displays counter for the question
    remainingQuestions.innerText = `${questionCounter}/${numberOfQuestions}`

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
};
    //listens for when one of the answers is clicked 
     var check;
     var punish = 0;

    answers.forEach(question => {
        question.addEventListener('click', e => {

            feedBack.style.display = "block";

            var userChoice =e.target;
            var rightAnswer= userChoice.dataset["number"];

            check = rightAnswer == currentQuestion.answers ? 'Correct' : 'Incorrect';

            userChoice.parentElement.classList.add(check);

            // interacts with the countDown fucntion, if the user answers the question incorrectly, the game will subtract 10 seconds off their time
            if ( check == "Incorrect"){
                punish = updateTime -= 9;
                clearInterval(timeleft);
                countDown(punish);   
                feedBack.style.backgroundColor = "red"; // manipulates CSS for the class feedBack. changes backround to red so the user can have visual feedback when wrong
            }
            feedBack.textContent = check;// writes the value of check as feedback for the user

            setInterval(()=>{
                feedBack.style.backgroundColor = "green"; // manipulates CSS for the class feedBack. changes backround to green so the user can have visual feedback when correct
                feedBack.style.display = "none";
            },2000)
            getNewQuestion();
        });
    });
startGame();
