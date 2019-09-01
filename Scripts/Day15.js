
//DOM variables
let newGameButton = document.getElementById("newgame"),
    addCard = document.getElementById("addcard"),
    stay = document.getElementById("stay"),
    exitGame = document.getElementById("exit"),
    message = document.getElementById("message"),
    pcards = document.getElementById("pcards"),
    dcards = document.getElementById("dcards")

//starting points
let gameStarted = false,
    gameOver = false,
    playerScore = 0,
    dealerScore = 0,
    playerCards = [],
    dealerCards = [],
    playerWon = false,
    dealerWon = false
addCard.style.visibility = "hidden"
stay.style.visibility = "hidden"
exitGame.style.visibility = "hidden"

//deck declaration
let types = ["Heats", "Clubs", "Diamonds", "Spades"]
let number = ["Two", "Tree", "Four", "Five", "Six", "Seven", "Eigth", "Nine", "Ten", "Jack", "Queen", "King", "Ace"]



function newDeck() {
    let deck = []
    for (var typesId = 0; typesId < types.length; typesId++) {
        for (var numberId = 0; numberId < number.length; numberId++) {
            let card = {
                number: number[numberId],
                types: types[typesId]
            }
            deck.push(card)
        }
    }
    return deck
}



let deck = newDeck()

function shuffleDeck(deck) {
    for (let i = 0; i < deck.length; i++) {
        let swapId = Math.trunc(Math.random() * deck.length)
        let temporary = deck[swapId]
        deck[swapId] = deck[i]
        deck[i] = temporary
    }
}

function getNextCard() {
    return deck.shift()
}

function getCardName(card) {
    return card.number + " of " + card.types
}

function getCardRealvalue(card) {
    switch (card.types) {
        case "Two":
            return 2;
        case "Tree":
            return 3;
        case "Four":
            return 4;
        case "Five":
            return 5;
        case "Six":
            return 6;
        case "Seven":
            return 7;
        case "Eight":
            return 8;
        case "Nine":
            return 9
        default:
            return 10;
    }
}

function getScore(cardArray) {
    let score = 0 
    let hasAce = false
    for (let i = 0; i < cardArray.length; i++) {
        let card = cardArray[i]
        score += getCardRealvalue(card)
        if (card.number === "Ace") {
            hasAce = true
        }
    }
    if (hasAce && score + 10 <=21) {
        return score + 10
    }
    return score
}

function updateScores() {
    playerScore = getScore(playerCards)
    dealerScore = getScore(dealerCards)
}

function showStatus() {
   // !gameStarted ? message.innerHTML = 'Press the "New Game" button to start the game!' : message.innerHTML = "Good luck!"

    let playerCardName = ""
    let dealerCardName = ""
    //console.log(playerCardName)

    for (let i = 0; i < playerCards.length; i++) {
        playerCardName += getCardName(playerCards[i]) + "\n" 
    }
        
    for (let i = 0; i < dealerCards.length; i++) {
        dealerCardName += getCardName(dealerCards[i]) + "\n" 
    }

    updateScores();

    pcards.innerText = "Your cards:" + "\n" + playerCardName + "\n" + "Your Score:" + playerScore
    dcards.innerText = "Dealer cards:" + "\n" + dealerCardName + "\n" + "Dealer Score:" + dealerScore

    if (gameOver) {
        if (playerWon) {
            message.innerText = "CONGRATULATION, YOU WON!"
        }
        else {
            message.innerText = "SORRY, DEALER WON! BETTER LUCK NEXT TIME"
        }
        newGameButton.style.visibility = "visible"
        addCard.style.visibility = "hidden"
        stay.style.visibility = "hidden"
        exitGame.style.visibility = "hidden"
    }

}
showStatus()

//button handlers
function newGame() {
    gameStarted = true,
    gameOver = false,
    newGameButton.style.visibility = "hidden"
    addCard.style.visibility = "visible"
    stay.style.visibility = "visible"
    exitGame.style.visibility = "visible"
    
    deck = newDeck()
    shuffleDeck(deck) 
    
    playerCards = [getNextCard(), getNextCard()] //ezzel kapcsolatos a hiba
    dealerCards = [getNextCard(), getNextCard()]
    console.log(playerCards) //lekérdezni le lehet, a tartalmának a feldolgozásával van a hiba*/
    
    showStatus()

}
function exit() {

}
