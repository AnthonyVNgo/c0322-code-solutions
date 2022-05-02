/* exported student */
var student = {
  firstName: 'ant',
  lastName: 'n',
  subject: '???',
  getFullName: function () {
    return this.firstName + ' ' + this.lastName;
  },
  getIntroduction: function () {
    // return 'Hello, my name is ' + this.getFullName() + ' and I am studying ' + this.subject;
    return 'Hello, my name is ' + this.firstName + ' ' + this.lastName + ' and I am studying ' + this.subject + '.';
  }
};
