/* exported Account */

function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  var amountValue = amount;

  if (Number.isInteger(amount) === true && amount > 0) {
    var deposit = new Transaction('deposit', amountValue);
    this.transactions.push(deposit);
    return true;
  } return false;
};

Account.prototype.withdraw = function (amount) {
  var amountValue = amount;

  if (Number.isInteger(amount) === true && amount > 0) {
    var withdrawal = new Transaction('withdrawal', amountValue);
    this.transactions.push(withdrawal);
    return true;
  } return false;
};

Account.prototype.getBalance = function () {
  var withdrawal = 0;
  var deposit = 0;

  for (var i = 0; i < this.transactions.length; i++) {

    if (this.transactions[i].type === 'withdrawal') {
      withdrawal += this.transactions[i].amount;
    } else if (this.transactions[i].type === 'deposit') {
      deposit += this.transactions[i].amount;
    }
  }

  var balance = deposit - withdrawal;

  if (balance < 0) {
    return balance;
  } else if (balance === 0 || this.transactions === []) {
    return 0;
  } return balance;
};
