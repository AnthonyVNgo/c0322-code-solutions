/* exported uniqueQuadratic, uniqueLinear */

function uniqueLinear(words) {
  const seen = {};                  // 1 * 1 = O(1) declaring / assigning a variable = 1 simple operation
  const unique = [];                // 1 * 1 = O(1) declaring / assigning a variable = 1 simple operation
  for (
    let i = 0;                      // 1 * 1 = O(1) declaring / assigning a variable = 1 simple operation
    i < words.length;               // 2 * n = O(n) single-step expression + object property access = 2 simple operations
    i++                             // 1 * n = O(n) single-step expression = 1 simple operation (why is this considered 2 simple operations in the example if i++ is equal to i + 1, which would be a single-step expression?)
  ) {
    const word = words[i];          // 2 * n = O(n) declaring / assigning a variable + array index access = 2 simple operations
    if (!seen[word]) {              // 3 * n = O(n) truth test + single-step expression (bang logical operator) + array index access = 3 simple operations
      seen[word] = true;
      unique[unique.length] = word; // 3 * n = O(n) array index access + object property access + assigning a variable = 3 simple operations
    }
  }
  return unique;
} // Big O Notation for uniqueLinear: O(n)

function uniqueQuadratic(words) {
  const unique = [];                // 1 * 1 = O(1) declaring / assigning a variable = 1 simple operation
  for (
    let i = 0;                      // 1 * 1 = O(1) declaring / assigning a variable = 1 simple operation
    i < words.length;               // 2 * n = O(n) single-step expression + object property access = 2 simple operations
    i++                             // 1 * n = O(n) single-step expression = 1 simple operation
  ) {
    const word = words[i];          // 2 * n = O(n) declaring / assigning a variable + array index access = 2 simple operations
    let isUnique = true;            // 1 * 1 = O(1) declaring / assigning a variable = 1 simple operation
    for (
      let c = 0;                    // 1 * n = O(n) declaring / assigning a variable = 1 simple operation
      c < i;                        // 1 * n^2 = O(n^2) single-step expression = 1 simple operation
      c++                           // 1 * n^2 = O(n^2) single-step expression = 1 simple operation
    ) {
      const comparing = words[c];   // 2 * n^2 = O(n^2) declaring / assigning a variable + array index acces = 2 simple operations
      if (comparing === word) {     // 2 * n^2 = O(n^2) truth test + single-step expression = 2 simple operations
        isUnique = false;           // 1 * n^2 = O(n^2) assigning a variable = 1 simple operation
      }
    }
    if (isUnique) {                 // 1 * n = O(n) truth test = 1 simple operation
      unique[unique.length] = word; // 3 * n = O(n) array index access + object property access + assigning a variable = 3 simple operations
    }
  }
  return unique;                    // 1 * 1 = O(1)
} // Big O Notation for uniqueQuadratic: O(n^2)
