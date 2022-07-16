/* exported uniqueQuadratic, uniqueLinear */

function uniqueLinear(words) {
  const seen = {};                  // 1 * 1 = O(1) declaring / assigning a variable = 1 simple operation
  const unique = [];                // 1 * 1 = O(1) declaring / assigning a variable = 1 simple operation
  for (
    let i = 0;                      // 1 * 1 = O(?) declaring / assigning a variable = 1 simple operation
    i < words.length;               // 2 * n = O(?) single-step expression + object property access = 2 simple operations
    i++                             // 1 * n = O(?) single-step operation = 1 simple operation (why is this considered 2 simple operations in the example if i++ is equal to i + 1, which would be a single-step expression?)
  ) {
    const word = words[i];          // 2 * n = O(?) declaring / assigning a variable + array index access = 2 simple operations
    if (!seen[word]) {              // 3 * n = O(?) truth test + single-step operation (bang logical operator) + array index access = 3 simple operations
      seen[word] = true;
      unique[unique.length] = word; // 3 * _ = O(?) array index access + object property access + assigning a variable = 3 simple operations
    }
  }
  return unique;
} // Big O Notation for uniqueLinear: O(?)

function uniqueQuadratic(words) {
  const unique = [];                // _ * _ = O(?)
  for (
    let i = 0;                      // _ * _ = O(?)
    i < words.length;               // _ * _ = O(?)
    i++                             // _ * _ = O(?)
  ) {
    const word = words[i];          // _ * _ = O(?)
    let isUnique = true;            // _ * _ = O(?)
    for (
      let c = 0;                    // _ * _ = O(?)
      c < i;                        // _ * _ = O(?)
      c++                           // _ * _ = O(?)
    ) {
      const comparing = words[c];   // _ * _ = O(?)
      if (comparing === word) {     // _ * _ = O(?)
        isUnique = false;           // _ * _ = O(?)
      }
    }
    if (isUnique) {                 // _ * _ = O(?)
      unique[unique.length] = word; // _ * _ = O(?)
    }
  }
  return unique;                    // _ * _ = O(?)
} // Big O Notation for uniqueQuadratic: O(?)
