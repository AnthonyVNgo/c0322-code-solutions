export default function toDollars(value) {
  return '$' + (value / 100).toFixed(2);
}

// the toDollars function is defined with one paramater value
// the toFixed() method is called with one argument, the number 2
// the toFixed() method converts a number into a string
// toFixed(2) is called on the return of value / 100
// the string '$' is concatenated to the return of the toFixed method called on the value / 100
