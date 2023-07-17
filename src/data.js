const allowedAmountRange = {
  min: 0,
  max: 200,
};
const allowedTransactionDateRange = {
  min: new Date(2023, 7, 1),
  max: new Date(2023, 9, 30),
};
const numberOfTransactions = 20;
const customers = ["A", "B", "C", "D", "E", "F", "G"];

class Transaction {
  constructor(transactionId, customer, date, amount) {
    this.id = transactionId;
    this.customer = customer;
    this.date = date;
    this.amount = amount;
  }
}
function chooseRandomItemFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
function getRandomDate(from, to) {
  from = from.getTime();
  to = to.getTime();
  return new Date(from + Math.random() * (to - from));
}

const createData = () => {
  let transactions = [];
  for (let i = 0; i < numberOfTransactions; i++) {
    transactions.push(
      new Transaction(
        i,
        chooseRandomItemFromArray(customers),
        getRandomDate(
          allowedTransactionDateRange.min,
          allowedTransactionDateRange.max
        ),
        getRandomArbitrary(allowedAmountRange.min, allowedAmountRange.max)
      )
    );
  }
  //   console.log(JSON.stringify(transactions));
  return transactions;
};
export { createData };
