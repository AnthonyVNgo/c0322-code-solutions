// console.log('Lodash is loaded:', typeof _ !== 'undefined');
const suit = ['spades', 'diamonds', 'clubs', 'hearts'];
const rank = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
const players = [{}, {}, {}, {}];
function createDeck() {
  const deck = [];
  for (let i = 0; i < suit.length; i++) {
    for (let j = 0; j < rank.length; j++) {
      const card = { suit: suit[i], rank: rank[j] };
      deck.push(card);
    }
  }
  return _.shuffle(deck);
}
function deal() {
  const deck = createDeck();
  let j = 1;
  players.forEach(currentElement => {
    currentElement.hand = deck.splice(0, 2);
    let value = 0;
    for (let i = 0; i < currentElement.hand.length; i++) {
      if (currentElement.hand[i].rank === 'A') {
        value += 11;
      } else if (currentElement.hand[i].rank === 'J' || currentElement.hand[i].rank === 'Q' || currentElement.hand[i].rank === 'K') {
        value += 10;
      } else if (currentElement.hand[i].rank !== 'A' || currentElement.hand[i].rank !== 'J' || currentElement.hand[i].rank !== 'Q' || currentElement.hand[i].rank !== 'K') {
        value += currentElement.hand[i].rank;
      }
    }
    currentElement.value = value;
    currentElement.name = `player${j}`;
    j++;
  });
  // const playerValues = players.map(player => player.value);
}
deal();

// function calculateValue(currentElement) {
// let value = 0;
// for (let i = 0; i < currentElement.hand.length; i++) {
//   if (currentElement.hand[i].rank === 'A') {
//     value += 11;
//   } else if (currentElement.hand[i].rank === 'J' || currentElement.hand[i].rank === 'Q' || currentElement.hand[i].rank === 'K') {
//     value += 10;
//   } else if (currentElement.hand[i].rank !== 'A' || currentElement.hand[i].rank !== 'J' || currentElement.hand[i].rank !== 'Q' || currentElement.hand[i].rank !== 'K') {
//     value += currentElement.hand[i].rank;
//   }
// }
// currentElement.value = value;
// }

// A = 11
// J,Q,K = 10

// if i === A, then value += 11
// if i === j,q,k then value += 10
// if i !== a,j,q,k, then value += i
// function dealToPlayers() {
//   const dealt = (_.sampleSize(createDeck(), 8));
//   dealt.splice(0, 2);
// }

// 05698

//  high to low spade hearts diamond clubs

// const dealt = (_.sampleSize(createDeck(), 8));

// _.sampleSize returns an array
// .splice returns an array as well
// currentElement.hand.push(_.sampleSize(deck, 8).splice(0, 2));
// currentElement.hand.push(_.shuffle(deck).splice(0, 2));
// console.log(currentElement.hand[0]);

// function calculateValue(currentElement) {
//   let value = 0;
//   for (let i = 0; i < currentElement.hand.length; i++) {
//     if (currentElement.hand[0][i].rank === 'A') {
//       value += 11;
//     } else if (currentElement.hand[0][i].rank === 'J' || currentElement.hand[0][i].rank === 'Q' || currentElement.hand[0][i].rank === 'K') {
//       value += 10;
//     } else if (currentElement.hand[0][i].rank !== 'A' || currentElement.hand[0][i].rank !== 'J' || currentElement.hand[0][i].rank !== 'Q' || currentElement.hand[0][i].rank !== 'K') {
//       value += i;
//     }
//   }
//   return value;
// }

// const Player = class {
//   constructor(name, hand, value) {
//     this.name = name;
//     this.hand = hand;
//     this.value = value;
//   }
// };
// const players = [new Player('p1', []), new Player('p2', []), new Player('p3', []), new Player('p4', [])];
