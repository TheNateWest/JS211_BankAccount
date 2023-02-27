'use strict';
// const assert = require('assert');

class BankAccount {
  constructor(accountNumber, owner) {
    this.accountNumber = accountNumber;
    this.owner = owner;
    this.transaction = [];
  }

  // 100,20,50,22.30,4
  // 100, -8, -25.36, 250, 
  balance(){

    let currentBalance = 0;

    for(let i=0; i < this.transactions.length; i++) {
        currentBalance += this.transaction[i].amount; 
    }

    console.log(currentBalance)
    return currentBalance;
  }

  deposit(amt) {

    if(amt >= 0){

        let newDeposit = new Transaction(amt, 'Deposit', this.date);

        this.transactions.push(newDeposit);
        console.log("Deposit successful");
    } else {
        console.log("A deposit must be at least a penny");

    }
  }

  charge(payee, amt) {

        let newCharge = new Transaction(amt, payee, this.date);

        if(newCharge > this.balance) {
            console.log("Insufficient funds");
        } else {
            this.transactions.push(newCharge);
        }


  } 
}

class Transaction {
    constructor (amount, payee) {
        this.date = new Date();
        this.amount = amount;
        this.payee = payee;
    }
}

const assert = require('assert');

if (typeof describe === 'function'){
  describe('BankAccount', function(){
    it("bank account should have an account number, owner's name, and a transaction list", function(){ 
      
      const BankAccount1 = new BankAccount('12345', 'Nate');
      assert.equal(BankAccount1.accountNumber, '12345');
      assert.equal( BankAccount1.owner, 'Nate');
      // assert.equal(BankAccount1.transactions.length, 0);
        
    });
  }); // end of testing Bank Account
      
  describe('Transaction', function(){
    it('should create a transaction correctly for a deposit', function(){
      const newDeposit = new Transaction(100, 'Deposit')
      assert.equal(newDeposit.amount, 100);
      assert.equal(newDeposit.payee, 'Deposit');
          
    }); // end of Test !

    it('should create a transaction correctly for a charge', function(){
      const newCharge1 = new Transaction(50, 'HEB')
      assert.equal(newCharge1.amount, 50);
      assert.equal(newCharge1.payee, 'HEB');
          
    }); // end of Test 2
  }); // end of testing Transactions 
} // end of Tests! <3