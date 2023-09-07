const allowedAmountRange = {
  min: 0,
  max: 200,
};
const allowedTransactionMonthRange = {
  min: new Date(2023, 1, 1),
  max: new Date(2023, 3, 30),
};
const numberOfTransactions = 100;
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
  return new Date(from + Math.random() * (to - from)).toUTCString();
}

const createMockTransactionData = () => {
  let transactions = [];
  for (let i = 0; i < numberOfTransactions; i++) {
    transactions.push(
      new Transaction(
        i,
        chooseRandomItemFromArray(customers),
        getRandomDate(
          allowedTransactionMonthRange.min,
          allowedTransactionMonthRange.max
        ),
        getRandomArbitrary(allowedAmountRange.min, allowedAmountRange.max)
      )
    );
  }
  return transactions;
};
export { createMockTransactionData };
