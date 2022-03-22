var username = document.getElementById("userInput");
var saveScore = document.getElementById("saveScore");
var userScore = document.getElementById("result")

var finalScore = localStorage.getItem("finalScore");

var board = JSON.parse(localStorage.getItem("board"))||[];
console.log(board);


userScore.innerText = finalScore;

username.addEventListener("keyup", () => {
    saveScore.disabled = !username.value;
});

saveHighScore = e =>{
    e.preventDefault();

    var userInfo = {
        initials:username.value,
        grade:finalScore
    };

    board.push(userInfo);
    board.sort((a,b)=>b.board - a.board);
    localStorage.setItem('board',JSON.stringify(board));
    console.log(board)
}