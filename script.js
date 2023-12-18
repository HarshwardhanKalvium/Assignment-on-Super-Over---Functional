let $team1Score = document.getElementById("score-team1");
let $team2Score = document.getElementById("score-team2");
let $team1Wickets = document.getElementById("wickets-team1");
let $team2Wickets = document.getElementById("wickets-team2");
let $team1Balls = document.querySelectorAll("#team1-superover > .ball");
let $team2Balls = document.querySelectorAll("#team2-superover > .ball");

let possibleOutcomesArr = [0, 1, 2, 3, 4, 6, "W"];
let turn = 1;
let team1Score = 0;
let team2Score = 0;
let team1Wickets = 0;
let team2Wickets = 0;
let ballFacedByTeam1 = 0;
let ballFacedByTeam2 = 0;

let strikeAudio = new Audio("http://bit.ly/so-ball-hit");
let gameoverAudio = new Audio("http://bit.ly/so-crowd-cheer");

function play() {
    strikeAudio.pause();
    strikeAudio.currentTime=0; 
    strikeAudio.play();

    let randomNo = Math.floor(Math.random() * possibleOutcomesArr.length);
    let outcome = possibleOutcomesArr[randomNo];
    if (turn == 1) {
        ballFacedByTeam1++;
        if (outcome == "W") {
            team1Wickets++;
            $team1Wickets.textContent = team1Wickets;
            $team1Balls[ballFacedByTeam1 - 1].textContent=outcome;

        } else {
            team1Score += outcome;
            $team1Score.textContent = team1Score;
            $team1Balls[ballFacedByTeam1 - 1].textContent=outcome;
        }
        if (ballFacedByTeam1 == 6 || team1Wickets == 2) {
            turn = 2;
        }
    } 
    else if (turn == 2) {
        ballFacedByTeam2++;
        if (outcome == "W") {
            team2Wickets++;
            $team2Wickets.textContent = team2Wickets;
            $team2Balls[ballFacedByTeam2 - 1].textContent=outcome;

        } else {
            team2Score += outcome;
            $team2Score.textContent = team2Score;
            $team2Balls[ballFacedByTeam2 - 1].textContent=outcome;
        }
        if (ballFacedByTeam2 == 6 || team2Wickets == 2 || team2Score > team1Score) {
            gameOver();
        }
    }
}

function gameOver() {
    gameoverAudio.play();
        if (team1Score > team2Score) {
            alert("India Wins..!!!");
        } else if (team1Score < team2Score) {
            alert("PAK Wins..!!!");
        } else {
            alert("DRAW! It is the next superover");
        }
}

function reset() {
    window.location.reload();
}

