// Create a BankAccount class with the following:
// - Properties: accountNumber, balance
// - Methods: 
//   - deposit(amount): Adds the amount to the balance.
//   - withdraw(amount): Deducts the amount from the balance if there are sufficient funds.
// Add a static method compareAccounts(account1, account2) that compares two BankAccount objects and returns the account with the higher balance.

class BankAccount {
  // YOUR CODE HERE

  constructor(accountNumber, balance) {
    this.accountNumber = accountNumber
    this.balance = balance

  }

  deposit(addBalance){
    this.balance = addBalance + this.balance
  }

  
  withdraw(takeBalance){
    this.balance = this.balance - takeBalance 
  }

  static compareAccounts(a, b) {
    if (a.balance > b.balance) {
      return a
    } else {
      return b
    }
  }
}


// TEST CASE / DRIVER CODE
const account1 = new BankAccount(123456, 800);
const account2 = new BankAccount(654321, 1000);
account1.deposit(300); // account1 becomes 800
console.log('account 1:', account1.balance) // deposit is working
account2.withdraw(300); // account2 becomes 700
console.log('account 2:', account2.balance)
const richerAccount = BankAccount.compareAccounts(account1, account2);

console.log(`Account ${richerAccount.accountNumber} has the higher balance.`);
// Expected output: "Account 123456 has the higher balance."