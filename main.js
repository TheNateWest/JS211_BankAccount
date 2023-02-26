'use strict';
const assert = require('assert');

class BankAccount {
  constructor(accountNumber, owner) {
    this.accountNumber = accountNumber;
    this.owner = owner;
    this.transaction = [100, -8, -25.36, 250, ];
  }

  balance (){

    let currentBalance = 0;

    for(let i=0; i < this.transaction.length; i++) {
        currentBalance += this.transaction[i].amount; 
    }

    console.log()
    return currentBalance;
  }

  deposit(amt){

    if(amt >= 0){

        let newDeposit = new transaction(amt, 'Deposit', this.date);

        this.transaction.push(newDeposit);
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
            this.transaction.push(newCharge);
        }


  } 
}

class transaction {
    constructor (amount, payee) {
        this.date = newDate();
        this.amount = amount;
        this.payee = payee;
    }
}

const assert = require('assert');

if (typeof describe === 'function'){
    describe('BankAccount', function(){
      it('bank account should have an account number, owner\'s name, and a transaction list', function(){
        
        const BankAccount1 = new BankAccount('12345', 'Nate');
        assert.equal(BankAccount.accountNumber, '12345');
        assert.equal(BankAccount.owner, 'Nate');
        assert.equal(BankAccount.transactions.length, 0);
        
      }); // end of Test #1
  
    //   it('can enter a ship', function(){
    //     // this creates a new Ship. Can you build a class that can be called so that this Ship can be built?
    //     let mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
    //     const crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
    //     crewMember1.enterShip(mav);
    //     assert.equal(crewMember1.ship, mav);
    //     assert.equal(mav.crew.length, 1);
    //     assert.equal(mav.crew[0], crewMember1);
    //   }); // end of Test #2
    // }); 

} // end of Tests! <3