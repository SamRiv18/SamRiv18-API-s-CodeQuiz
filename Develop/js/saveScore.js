var username = document.getElementById("userInput");
var saveScore = document.getElementById("saveScore");
var userScore = document.getElementById("result")

var finalScore = localStorage.getItem("finalScore");

// converts saved scores in local storage to an array so it can be manipulated
var board = JSON.parse(localStorage.getItem("board"))||[];

userScore.innerText = finalScore;// displays the score achieved in the last attempt

username.addEventListener("keyup", () => {
    saveScore.disabled = !username.value;
});

saveHighScore = e =>{
    e.preventDefault();

//object that holds the users information
    var userInfo = {
        initials:username.value,
        grade:finalScore
    };
    // sorts highscores from highest to lowest
    board.push(userInfo);
    board.sort( (a,b) => b.grade - a.grade);
    localStorage.setItem('board',JSON.stringify(board)); //converts array back into a string value so it can be stored in local storage
}