var list = document.getElementById("scoreList");
var remove = document.getElementById("delete")

var board = JSON.parse(localStorage.getItem("board"))||[];// gets all the highscores and creates an array from them.

// iterates through the highscore array created earlier and then displays them in li elements on highScoreBoard.html
board.forEach(function(userInfo){
    var li = document.createElement("li");
    li.setAttribute('class','highscore');
    document.body.appendChild(li);
    li.textContent=userInfo.initials + " - " + userInfo.grade;
    list.appendChild(li);
});

//function that removes the high score board from local storage
var clearBoard = () => {
    localStorage.removeItem("board");
    location.reload();
};

remove.onclick= clearBoard;