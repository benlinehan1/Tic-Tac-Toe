var player1Name = document.querySelector('.player-1-name')

var player1NameBtn = document.querySelector('.name-1-conf')

var player2NameBtn = document.querySelector('.name-2-conf')

var player2Name = document.querySelector('.player-2-name')


var player1Input = document.querySelector('.player-1-name-push')

var player2Input = document.querySelector('.player-2-name-push')

var ticTacToeClick = document.querySelectorAll('.board>div')

for (let i = 0; i < ticTacToeClick.length; i++) {
    ticTacToeClick[i].addEventListener('click', crossesClick)
}

var playerTurnCounter = 0


function crossesClick(event) {

    if (playerTurnCounter === 0) {
    event.target.style.backgroundImage = "url(https://pbs.twimg.com/media/Dsojx8yUUAADWUm.jpg)"

    playerTurnCounter = playerTurnCounter + 1
    }
    else if (playerTurnCounter === 1) {
        event.target.style.backgroundImage = "url(https://64.media.tumblr.com/15b5c36e66c657c6cc58c12e69fddc88/ce07956bd752e8f3-0d/s640x960/0f3a5955c8aee87bf5d63cbbb9633544e4f9ffa4.jpg)"

        playerTurnCounter = playerTurnCounter - 1
    }
}

player1NameBtn.addEventListener('click', player1Insert)

player2NameBtn.addEventListener('click', player2Insert)




function player1Insert() {
   pushName1 = player1Name

   player1Input.textContent = pushName1.value
}

function player2Insert() {
    pushName2 = player2Name

    player2Input.textContent = pushName2.value
}