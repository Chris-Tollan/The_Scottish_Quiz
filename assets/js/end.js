// update score on end page//
// make add to leadboard button diabled unless username typed //
// log top scores to local storage and store top5 //
let username = document.getElementById('clan');
let addToLeaderboardButton = document.getElementById("add_to_leaderboard_button");
let endScore = document.getElementById('endscore');
let newestScore = localStorage.getItem('newestScore');

let topScores = JSON.parse(localStorage.getItem('topScores')) || [];

endScore.innerText = newestScore;

username.addEventListener('keyup', () => {
    addToLeaderboardButton.disabled = !clan.value;
});

addToLeaderboard = e => {

    e.preventDefault();

    let score = {
        score: newestScore,
        name: username.value
    };
    topScores.push(score);
    topScores.sort((a, b) => {
        return b.score - a.score;
    });
    topScores.splice(5);

    localStorage.setItem('topScores', JSON.stringify(topScores));
};