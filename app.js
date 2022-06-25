document.addEventListener('DOMContentLoaded', () => {
// Variable to set up an array of objects to make different cards
const cardArray = [
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    }
]

//sorts an array randomly
/* Sort compares two values and then sorts through it , 
------------------------------------------------------------------
this math random will return back a number anywhere from 0 to -1 ||
------------------------------------------------------------------
so here we are checking whether it's smaller than 0.5 or larger than 0.5 and shuffle it based on that.*/
cardArray.sort(() => 0.5 - Math.random())

console.log(cardArray)

// go into the document and search for the element with an id of grid
const gridDisplay = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')
// take the name of the card we clicked and put it into another array, USE letbecause we aregoing to be changing it later after we push items into it.
let cardsChosen = []
// holds the value of the card ID for camparison purposes
let chosenCardIds = []
// An array to collect the number of "matches" or "points"
const cardsMatched = []

console.log(gridDisplay)

function createBoard() {
    
    // the syntax for a "for loop"-----------------------------------------------------------
    
    /* start from 0 (let i = 0" as long as i is smaller then the array length then increment by one) */
    for (let i = 0; i < cardArray.length; i++) {
        
        // Set the value of the variable card to Create an image element 
        const card = document.createElement('img')
        // Set the attribute which will ultimately print the image to the card.
        card.setAttribute('src', 'images/blank.png')
        // adds a data id as well as a number based on i to keep track of the number
        card.setAttribute('data-id', i)
        // added an event listener on the card to listen for 'clicks' once clicked trigger the function flipcard()
        card.addEventListener('click', flipCard)
        //Appends the image to html so that it can finally display it.
        gridDisplay.appendChild(card)
        
    }
}
createBoard()

function checkMatch() {

    // Get all the cards or 'img' elements and assign them to a variable in order to compare for a match
    const cards = document.querySelectorAll('.grid img')

    // Assigning variable to get the ID of the card inside the array
    const optionOneId = chosenCardIds[0]
    const optionTwoId = chosenCardIds[1]

    console.log(cards)
    console.log('check for a match!')

    if (optionOneId == optionTwoId) {
    alert=("You have clicked the same image!")
    cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')

    }

    // Simple code that checks the values entered into the cardChosen array for a match  
    if (cardsChosen[0] == cardsChosen[1]) {
        alert("You've found a match!")

        // If the two cards chosen are a match re-assign them a background color of white the 0 and 1 value is based on the array of cardsChosen
        cards[optionOneId].setAttribute('src', 'images/white.png')
        cards[optionTwoId].setAttribute('src', 'images/white.png')

        // Also once the two cards match, remove the event listener from them so they can't be clicked.
        cards[optionOneId].removeEventListener('click', flipcard)
        cards[optionTwoId].removeEventListener('click', flipcard)
 
        // how many matches do we have?
        cardsMatched.push(cardsChosen)

    // If you don't find a match "flip" it back over
    } else {
    cards[optionOneId].setAttribute('src', 'images/blank.png')
    cards[optionTwoId].setAttribute('src', 'images/blank.png')
    alert("Sorry try again!")

    }
    resultDisplay.textContent = cardsMatched.length
    cardsChosen = []
    chosenCardIds = []

    // If you have matched all the cards (/2 because half of 12 is 6) 
    if (cardsMatched.length == cardArray.length/2) {
        // then change the #result inner html / textContent
    resultDisplay.textContent = "Congratulations you've found them all!"
    }
}

// Function to allow us to flip the card when we click it 
function flipCard() {
    console.log('cardArray')
    //this keyword use whatever element we clicked and will get it's data
    let cardId = this.getAttribute('data-id');
    // Console logging the name of the object/card based on the arroy 
    console.log(cardArray[cardId].name)
    //Push each chosen or "clicked" card into the array cardsChosen. 
    cardsChosen.push(cardArray[cardId].name)
    chosenCardIds.push(cardId)
    console.log(chosenCardIds)
    // need a way to tell which card was clicked. 
    console.log('clicked', cardId)
    console.log(cardsChosen)
    // Whenever I clicked the card I reset the src to the appropriate image and display it.
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {

    // set a timeout to let us see both of the cards first before revealing whether it's a match or not.
    setTimeout(checkMatch, 500)
    }
}
})