/* exported Bank */
function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  var currentHolder = holder;
  var currentBalance = balance;

  if (Number.isInteger(balance) && balance > 0) {
    var newAccount = new Account(this.nextAccountNumber, currentHolder);
    newAccount.deposit(currentBalance);
    this.accounts.push(newAccount);
    this.nextAccountNumber++;
    return this.nextAccountNumber - 1;
  } return null;
};

Bank.prototype.getAccount = function (number) {
  for (var i = 0; i < this.accounts.length; i++) {
    if (this.accounts[i].number === number) {
      return this.accounts[i];
    }
  } return null;
};

Bank.prototype.getTotalAssets = function () {
  var grandTotal = 0;

  if (this.nextAccountNumber === 1) {
    return 0;
  } else if (this.nextAccountNumber !== 1) {
    for (var i = 0; i < this.accounts.length; i++) {
      grandTotal += this.accounts[i].getBalance();
    }
  } return grandTotal;
};
