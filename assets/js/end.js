let username = document.getElementById('clan');
let addToLeaderboardButton = document.getElementById("add_to_leaderboard_button");
let endScore = document.getElementById('endscore');
let newestScore = localStorage.getItem('newestScore');
endScore.innerText = newestScore;

username.addEventListener('keyup', () => {
    addToLeaderboardButton.disabled = !clan.value;
});

addToLeaderboard = e => {
    console.log("added to leaderboard");
    e.preventDefault();
};