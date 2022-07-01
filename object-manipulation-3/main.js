console.log('Lodash is loaded:', typeof _ !== 'undefined');
const suit = ['spades', 'diamonds', 'clubs', 'hearts'];
const rank = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

// const Player = class {
//   constructor(name, hand) {
//     this.name = name;
//     this.hand = hand;
//   }
// };

// const player1 = new Player('p1', []);
// const player2 = new Player('p2', []);
// const player3 = new Player('p3', []);
// const player4 = new Player('p4', []);

const Card = class {
  constructor(rank, suit) {
    this.rank = rank;
    this.suit = suit;
  }
};

function createDeck() {
  const deck = [];
  for (let i = 0; i < suit.length; i++) {
    for (let j = 0; j < rank.length; j++) {
      deck.push(new Card(suit[i], rank[j]));
    }
  }
  return deck;
}

createDeck();
