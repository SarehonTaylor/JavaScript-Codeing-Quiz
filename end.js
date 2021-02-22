const username = document.getElementsByID("username");
const saveScoreBtn = document.getElementsByID("saveScoreBtn");
const finalScore = document.getElementsByID("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");

const highScores = JSON.parse(localStorage.getItem("highScores"));
console.log(highScores)

finalScore.innerText = mostRecentScore;


username.addEventListner("keyup"), () --> {
saveScoreBtn.disabled = username.value;
}