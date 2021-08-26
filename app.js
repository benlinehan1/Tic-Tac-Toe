var player1Name = document.querySelector('.player-1-name')

var player1NameBtn = document.querySelector('.name-1-conf')

var player2NameBtn = document.querySelector('.name-2-conf')

var player2Name = document.querySelector('.player-2-name')


var player1Input = document.querySelector('.player-1-name-push')

var player2Input = document.querySelector('.player-2-name-push')

var ticTacToeClick = document.querySelectorAll('.board>div')

var winnerDeclaration = document.querySelector('.winner')

var roundCounter = document.querySelector('.round-counter')

var firstImage = "url(\"https://pbs.twimg.com/media/Dsojx8yUUAADWUm.jpg\")"

var secondImage = "url(\"https://64.media.tumblr.com/15b5c36e66c657c6cc58c12e69fddc88/ce07956bd752e8f3-0d/s640x960/0f3a5955c8aee87bf5d63cbbb9633544e4f9ffa4.jpg\")"

var playerWon = false

var playerTurnCounter = 0

var resetBtn = document.querySelector('.reset-btn')

resetBtn.addEventListener('click', resetGame)


for (let i = 0; i < ticTacToeClick.length; i++) {
    ticTacToeClick[i].addEventListener('click', crossesClick)
}



function crossesClick(event) {

    if (playerTurnCounter === 0) {
        event.target.style.backgroundImage = "url(https://pbs.twimg.com/media/Dsojx8yUUAADWUm.jpg)"

        playerTurnCounter = playerTurnCounter + 1

        roundCounter.textContent = Number(roundCounter.textContent) + 1

        gameChecker2()
        gameDraw()
    }
    else if (playerTurnCounter === 1) {
        event.target.style.backgroundImage = "url(https://64.media.tumblr.com/15b5c36e66c657c6cc58c12e69fddc88/ce07956bd752e8f3-0d/s640x960/0f3a5955c8aee87bf5d63cbbb9633544e4f9ffa4.jpg)"

        playerTurnCounter = playerTurnCounter - 1

        roundCounter.textContent = Number(roundCounter.textContent) + 1

        gameChecker()
        gameDraw()
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


function gameChecker() {
    if (document.querySelectorAll('.board>div')[1].style.backgroundImage === secondImage && document.querySelectorAll('.board>div')[4].style.backgroundImage === secondImage && document.querySelectorAll('.board>div')[7].style.backgroundImage === secondImage) {

        winnerDeclaration.textContent = "Player 2 is the winner!"

        playerWon = true

    }
     else if(document.querySelectorAll('.board>div')[0].style.backgroundImage === secondImage && document.querySelectorAll('.board>div')[3].style.backgroundImage === secondImage && document.querySelectorAll('.board>div')[6].style.backgroundImage === secondImage) {

        winnerDeclaration.textContent = "Player 2 is the winner!"

        playerWon = true

    } else if(document.querySelectorAll('.board>div')[2].style.backgroundImage === secondImage && document.querySelectorAll('.board>div')[5].style.backgroundImage === secondImage && document.querySelectorAll('.board>div')[8].style.backgroundImage === secondImage) {

        winnerDeclaration.textContent = "Player 2 is the winner!"

        playerWon = true

    } else if(document.querySelectorAll('.board>div')[0].style.backgroundImage === secondImage && document.querySelectorAll('.board>div')[1].style.backgroundImage === secondImage && document.querySelectorAll('.board>div')[2].style.backgroundImage === secondImage) {
        
        winnerDeclaration.textContent = "Player 2 is the winner"

        playerWon = true

    } else if(document.querySelectorAll('.board>div')[2].style.backgroundImage === secondImage && document.querySelectorAll('.board>div')[3].style.backgroundImage === secondImage && document.querySelectorAll('.board>div')[4].style.backgroundImage === secondImage) {

        winnerDeclaration.textContent = "Player 2 is the winner"

        playerWon = true

    } else if(document.querySelectorAll('.board>div')[6].style.backgroundImage === secondImage && document.querySelectorAll('.board>div')[7].style.backgroundImage === secondImage && document.querySelectorAll('.board>div')[8].style.backgroundImage === secondImage) {

        winnerDeclaration.textContent = 'Player 2 is the winner'

        playerWon = true

    } else if(document.querySelectorAll('.board>div')[0].style.backgroundImage === secondImage && document.querySelectorAll('.board>div')[4].style.backgroundImage === secondImage && document.querySelectorAll('.board>div')[8].style.backgroundImage === secondImage) {

        winnerDeclaration.textContent = 'Player 2 is the winner'

        playerWon = true

    } else if(document.querySelectorAll('.board>div')[2].style.backgroundImage === secondImage && document.querySelectorAll('.board>div')[4].style.backgroundImage === secondImage && document.querySelectorAll('.board>div')[6].style.backgroundImage === secondImage) {

        winnerDeclaration.textContent = 'Player 2 is the winner'

        playerWon = true

    }
 
}

function gameChecker2() {
    if (document.querySelectorAll('.board>div')[1].style.backgroundImage === firstImage && document.querySelectorAll('.board>div')[4].style.backgroundImage === firstImage && document.querySelectorAll('.board>div')[7].style.backgroundImage === firstImage) {

        winnerDeclaration.textContent = 'Player 1 is the winner'

        playerWon = true

    } else if (document.querySelectorAll('.board>div')[0].style.backgroundImage === firstImage && document.querySelectorAll('.board>div')[3].style.backgroundImage === firstImage && document.querySelectorAll('.board>div')[6].style.backgroundImage === firstImage) {

        winnerDeclaration.textContent = 'Player 1 is the winner'

        playerWon = true

    } else if(document.querySelectorAll('.board>div')[2].style.backgroundImage === firstImage && document.querySelectorAll('.board>div')[5].style.backgroundImage === 
    firstImage && document.querySelectorAll('.board>div')[8].style.backgroundImage === 
    firstImage) {

        winnerDeclaration.textContent = 'Player 1 is the winner'

        playerWon = true

    } else if(document.querySelectorAll('.board>div')[0].style.backgroundImage === 
    firstImage && document.querySelectorAll('.board>div')[1].style.backgroundImage === 
    firstImage && document.querySelectorAll('.board>div')[2].style.backgroundImage === 
    firstImage) {

        winnerDeclaration.textContent = 'Player 1 is the winner'

        playerWon = true

    } else if(document.querySelectorAll('.board>div')[3].style.backgroundImage === 
    firstImage && document.querySelectorAll('.board>div')[4].style.backgroundImage === 
    firstImage && document.querySelectorAll('.board>div')[5].style.backgroundImage === 
    firstImage) {

        winnerDeclaration.textContent = "Player 1 is the winner"

        playerWon = true

    } else if(document.querySelectorAll('.board>div')[6].style.backgroundImage === 
    firstImage && document.querySelectorAll('.board>div')[7].style.backgroundImage === 
    firstImage && document.querySelectorAll('.board>div')[8].style.backgroundImage === 
    firstImage) {

        winnerDeclaration.textContent = 'Player 1 is the winner'

        playerWon = true

    } else if(document.querySelectorAll('.board>div')[0].style.backgroundImage === 
    firstImage && document.querySelectorAll('.board>div')[4].style.backgroundImage === 
    firstImage && document.querySelectorAll('.board>div')[8].style.backgroundImage === 
    firstImage) {

        winnerDeclaration.textContent = 'Player 1 is the winner'

        playerWon = true

    } else if(document.querySelectorAll('.board>div')[2].style.backgroundImage === 
    firstImage && document.querySelectorAll('.board>div')[4].style.backgroundImage === 
    firstImage && document.querySelectorAll('.board>div')[6].style.backgroundImage === 
    firstImage) {

        winnerDeclaration.textContent = 'Player 1 is the winner'

        playerWon = true

    }
}


function gameDraw() {

        if(roundCounter.textContent === '9' && playerWon == false) {
         winnerDeclaration.textContent = 'The outcome is a draw'
        }
    }


function resetGame() {
    for(i = 0; i < ticTacToeClick.length; i++) {
        ticTacToeClick[i].style.backgroundImage = ""
    }

    roundCounter.textContent = '0'

    player1Input.textContent = ""

    player2Input.textContent = ""

    winnerDeclaration.textContent = ""

    console.log('yuh');

    player1Name.value = ""

    player2Name.value = ""
}
