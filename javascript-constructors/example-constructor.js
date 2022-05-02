function ExampleConstructor() {}
console.log(ExampleConstructor.prototype);
console.log(typeof exampleConstructor);

var aVariable = new ExampleConstructor();
console.log(aVariable);

console.log(aVariable instanceof ExampleConstructor);
