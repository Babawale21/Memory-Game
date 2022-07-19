document.addEventListener('DOMContentLoaded', () => {

 const cardArray = [
    {
        name: "fries",
        img: "ing/fries.jpg"
    },
    {
        name: "fries",
        img: "ing/fries.jpg"
    },
    {
        name: "hotdog",
        img: "ing/hotdog.jpg"
    },
    {
        name: "hotdog",
        img: "ing/hotdog.jpg"
    },
    {
        name: "pizza",
        img: "ing/pizza.jpg"
    },
    {
        name: "pizza",
        img: "ing/pizza.jpg"
    },
    {
        name: "milkshakes",
        img: "ing/milkshakes.jpg"
    },
    {
        name: "milkshakes",
        img: "ing/milkshakes.jpg"
    },
    {
        name: "ice-cream",
        img: "ing/ice-cream.jpg"
    },
    {
        name: "ice-cream",
        img: "ing/ice-cream.jpg"
    },
    {
        name: "cheeseburger",
        img: "ing/cheeseburger.jpg"
    },
    {
        name: "cheeseburger",
        img: "ing/cheeseburger.jpg"
    }
 ]


 cardArray.sort(() => 0.5 - Math.random())
const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenId = []
let cardsWon = []




function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        let card = document.createElement('img')
        card.setAttribute('src', 'ing/blank.jpg')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
    }
} 

// check for matches
function checkForMatch (){
    let cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    if (cardsChosen[0] === cardsChosen[1]){
        alert('You have found a match')
        cards[optionOneId].setAttribute('src', 'ing/white.png')
        cards[optionTwoId].setAttribute('src', 'ing/white.png')
        cardsWon.push(cardsChosen)
    }else {
        cards[optionOneId].setAttribute('src', 'ing/blank.jpg')
        cards[optionTwoId].setAttribute('src', 'ing/blank.jpg')
        alert ('Sorry, try again')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = 'Congratulations! You found them all'
    }
}


// flip your card
function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500)
    }
}

createBoard()


























})