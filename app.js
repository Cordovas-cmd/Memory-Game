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

// Function to allow us to flip the card when we click it 
function flipCard() {
    
    //this keyword use whatever element we clicked and will get it's data
    let cardId = this.getAttribute('data-id');
    // need a way to tell which card was clicked. 
    console.log('clicked', cardId)
}
})