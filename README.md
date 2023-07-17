**Problem Statement**

_*A retailer offers a rewards program to its customers, awarding points based on each recorded purchase.*_

_*A customer receives 2 points for every dollar spent over $100 in each transaction, plus 1 point for every dollar spent between $50 and $100 in each transaction.*_

_*(e.g. a $120 purchase = 2x$20 + 1x$50 = 90 points).*_

_*Given a record of every transaction during a three month period, calculate the reward points earned for each customer per month and total.*_

- Use React JS (do not use TypeScript)
- Simulate an asynchronous API call to fetch data
- Make up a data set to best demonstrate your solution
- Upload to github and share me the link.

**Steps to solve the problem**

1. Created a function to generate random a list of transactions, where each transaction consists of a customer, date of the transaction and amount of the transaction. The `createData` function is exported from `data.js`
2. The api directory contains the `fetchTransactionsData` file which simulates behaviour of an async API call by returning a Promise which resolves with a slight delay to return the generated data
3. The transactionsData is made available throughout the application using transactionsContext.
4. Then the data is presented in 2 tables TransactionsTable and RewardsTable
5. The TransactionsTable component displays the transactions with date being formatted as **_Month Date, Year_**
6. Then the RewardsTable component displays a row for every unique customer, with a column for every month. (There should only be 3 month columns as per requirements)
7. Each row in the RewardsTable component is rendered using customer and month information, and by using the transactionsData available through context. The rewards calculation logic is in the form of a function in this component.
