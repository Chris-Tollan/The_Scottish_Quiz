// parts of the below javascript was completed and amended from the James Q Quick tutorial referenced in the readME for this project//
// function to update leaderboard with top scores //
let leaderboardList = document.getElementById('leaderboard_list');
let topScores = JSON.parse(localStorage.getItem('topScores')) || [];

leaderboardList.innerHTML =
    topScores.map(score => {
        return `<li>${score.name} - ${score.score}</li>`;
    }).join("");
