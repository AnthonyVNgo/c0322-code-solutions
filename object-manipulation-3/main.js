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
  const playerValues = players.map(player => player.value);
  const highestValue = Math.max(...playerValues);
  return `player ${playerValues.indexOf(highestValue) + 1} wins, with a value of: ${players[playerValues.indexOf(highestValue)].value}`;
}
deal();

// define a variable named suit and assign it an array containing 4 string elements corresponding to each suit
// define a variable named rank and assign it an array containing 5 string elements corresponding to each face rank + ace, and 9 number elements corresponding to each number rank
// the combination of values from both of these arrays will be used to construct 52 individual card objects.
// the individual card objects will be used to form a deck

// define a variable named players and assign it an array containing 4 empty objects
// the assignment of properties can be done later

// define a function createDeck
// within the createDeck function's code block:
// define a variable named deck and assign it an empty array, this will be used to store the value of the cards that will be created in the next few lines
// use a for loop to iterate through the length of the suit array (4 iterations)
// within the for loop's code block, use another for loop to iterate through the length of the rank array (13 iterations)
// within the nest for loop's code block, define a variable named card and assign it an object containing the property suit with the value of suit[i] and rank with the value of rank[j]
// push the variable card / card object into the deck array
// the for loop's operation starts and creates each set of suits first,
// meaning that i does not increment until the nested for loop completes its operation,
// meaning that the deck pushes in card objecs with the suit property value of suit[0] and rank property values of rank[0-13],
// because the nested for loop's operation runs while the condition has not been met (j < rank.length)
// once the nested for loop's condition is met,
// THEN the parent for loop's code block/statement is completed
// THEN the final expression runs and i increments
// use lodash _.shuffle(deck) to return an array of shuffled elements
// return the value of _.shuffled(deck)
