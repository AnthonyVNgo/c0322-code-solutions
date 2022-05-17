/* exported Student */

// function Student(firstName, lastName, subject) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.subject = subject;
// }

// Student.prototype.getFullName = function () {
//   const { firstName, lastName } = this;
//   return `${firstName} ${lastName}`;
// };

// Student.prototype.getIntroduction = function () {
//   const { subject } = this;
//   const fullName = this.getFullName();
//   return `Hello, my name is ${fullName} and I am studying ${subject}.`;
// };

class Student {
// constructor() is used to initialize object PROPERTIES

  constructor(firstName, lastName, subject) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.subject = subject;
  }

  // Class METHODS are created with the same syntax as object methods.
  getFullName() {
    const { firstName, lastName } = this;
    return `${firstName} ${lastName}`;
  }

  getIntroduction() {
    const { subject } = this;
    const fullName = this.getFullName();
    return `Hello, my name is ${fullName} and I am studying ${subject}.`;
  }
}
