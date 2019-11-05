export class Main extends Component {

  render() {
    // List of 52 cards in the Deck
    let deck = [
      { face: '2', value: 2, suit: 'spades' },
      { face: '3', value: 3, suit: 'spades' },
      { face: '4', value: 4, suit: 'spades' },
      { face: '5', value: 5, suit: 'spades' },
      { face: '6', value: 6, suit: 'spades' },
      { face: '7', value: 7, suit: 'spades' },
      { face: '8', value: 8, suit: 'spades' },
      { face: '9', value: 9, suit: 'spades' },
      { face: '10', value: 10, suit: 'spades' },
      { face: 'jack', value: 10, suit: 'spades' },
      { face: 'queen', value: 10, suit: 'spades' },
      { face: 'king', value: 10, suit: 'spades' },
      { face: 'ace', value: 11, suit: 'spades' },
      { face: '2', value: 2, suit: 'hearts' },
      { face: '3', value: 3, suit: 'hearts' },
      { face: '4', value: 4, suit: 'hearts' },
      { face: '5', value: 5, suit: 'hearts' },
      { face: '6', value: 6, suit: 'hearts' },
      { face: '7', value: 7, suit: 'hearts' },
      { face: '8', value: 8, suit: 'hearts' },
      { face: '9', value: 9, suit: 'hearts' },
      { face: '10', value: 10, suit: 'hearts' },
      { face: 'jack', value: 10, suit: 'hearts' },
      { face: 'queen', value: 10, suit: 'hearts' },
      { face: 'king', value: 10, suit: 'hearts' },
      { face: 'ace', value: 11, suit: 'hearts' },
      { face: '2', value: 2, suit: 'clubs' },
      { face: '3', value: 3, suit: 'clubs' },
      { face: '4', value: 4, suit: 'clubs' },
      { face: '5', value: 5, suit: 'clubs' },
      { face: '6', value: 6, suit: 'clubs' },
      { face: '7', value: 7, suit: 'clubs' },
      { face: '8', value: 8, suit: 'clubs' },
      { face: '9', value: 9, suit: 'clubs' },
      { face: '10', value: 10, suit: 'clubs' },
      { face: 'jack', value: 10, suit: 'clubs' },
      { face: 'queen', value: 10, suit: 'clubs' },
      { face: 'king', value: 10, suit: 'clubs' },
      { face: 'ace', value: 11, suit: 'clubs' },
      { face: '2', value: 2, suit: 'diamonds' },
      { face: '3', value: 3, suit: 'diamonds' },
      { face: '4', value: 4, suit: 'diamonds' },
      { face: '5', value: 5, suit: 'diamonds' },
      { face: '6', value: 6, suit: 'diamonds' },
      { face: '7', value: 7, suit: 'diamonds' },
      { face: '8', value: 8, suit: 'diamonds' },
      { face: '9', value: 9, suit: 'diamonds' },
      { face: '10', value: 10, suit: 'diamonds' },
      { face: 'jack', value: 10, suit: 'diamonds' },
      { face: 'queen', value: 10, suit: 'diamonds' },
      { face: 'king', value: 10, suit: 'diamonds' },
      { face: 'ace', value: 11, suit: 'diamonds' }
    ]

    // Player's Hand Array
    let playerHand = []

    // Dealer's Hand Array
    let dealerHand = []

    const dealPlayers = () => {
      // Create Shuffled Deck by randomizing the Deck
      let newDeck = Math.random(deck);

      // Next Step, Pop off 2 cards each for playerHand && dealerHand from the newDeck

      // let playerHand = newDeck.pop(2);
      // let dealHand = newDeck.pop(2);
    }

    const main = () => {
      // Shuffle the deck into a random order
      //
      // Uses [Fisher–Yates shuffle](https://en.wikipedia.org/wiki/Fisher–Yates_shuffle)
      for (let index = 52 - 1; index > 1; index -= 1) {
        let otherIndex = Math.floor(Math.random() * index)

        let firstCard = deck[index]
        let secondCard = deck[otherIndex]

        deck[index] = secondCard
        deck[otherIndex] = firstCard
      }

      console.log(deck)
    }

    return (
      <div>
        <header className="">

        </header>
        <div>
          <h1>Black Jack</h1>
          <button className='hit'>hit</button>
          <button className='stay'>stay</button>
          <ul className='player-hand'>

          </ul>

          <ul className='dealer-hand'>

          </ul>

        </div>
      </div>
    );
  }
}

export default Main;
