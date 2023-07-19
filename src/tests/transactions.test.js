import React from "react";
import renderer from "react-test-renderer";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "../App";
import Regenerate from "../components/Transactions/Regenerate";
import Search from "../components/Transactions/Search";
import { transactionsContext } from "../context/transactionsContext";
import MonthFilter from "../components/Transactions/MonthFilter";
import TransactionsTable from "../components/Transactions/TransactionsTable";

jest.mock("../api/fetchTransactionsData", () => ({
  fetchTransactionsData: () => new Promise((res, rej) => res([])),
}));

it("renders App correctly", () => {
  const { container } = render(<App />);
  expect(screen.getByText("Transactions")).toBeInTheDocument();
  expect(screen.getByText("Show Rewards")).toBeInTheDocument();
});
describe(`tests snapshot`, () => {
  it(`should match snapshot`, () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe(`tests Search component`, () => {
  it(`should contain an element with class name 'transactions__search-customer'`, () => {
    const { container } = render(
      <transactionsContext.Provider
        value={{ customerFilter: null, setCustomerFilter: null }}
      >
        <Search />
      </transactionsContext.Provider>
    );
    expect(
      container.getElementsByClassName("transactions__search-customer").length
    ).toEqual(1);
  });
});
describe(`tests MonthFilter component`, () => {
  it(`should contain a select element with default text 'Filter by Month'`, () => {
    const { container } = render(
      <transactionsContext.Provider
        value={{ monthFilter: null, setMonthFilter: null }}
      >
        <MonthFilter />
      </transactionsContext.Provider>
    );
    expect(screen.getByText("Filter by Month")).toBeInTheDocument();

    expect(container.getElementsByTagName("select").length).toEqual(1);
  });
  it(`should call setMonthFilter context variable when selection is changed in monthFilter`, () => {
    const setMonthFilter = jest.fn();
    const { container } = render(
      <transactionsContext.Provider
        value={{
          setMonthFilter,
        }}
      >
        <MonthFilter />
      </transactionsContext.Provider>
    );
    const monthSelectionElement = container.getElementsByTagName("select")[0];
    fireEvent.change(monthSelectionElement);
    expect(setMonthFilter).toBeCalledTimes(1);
  });
});
describe(`tests Transactions table`, () => {
  it(`should render a table with className 'transactions__table'`, async () => {
    const { container } = render(
      <transactionsContext.Provider
        value={{
          transactionsData: [],
          customerFilter: "",
          monthFilter: "",
        }}
      >
        <TransactionsTable />
      </transactionsContext.Provider>
    );
    await waitFor(() =>
      expect(
        container.getElementsByClassName("transactions__table").length
      ).toEqual(1)
    );
    const transactionsTable = container.getElementsByClassName(
      "transactions__table"
    )[0];
    await waitFor(() =>
      expect(screen.getByText("Customer Name")).toBeInTheDocument()
    );
    await waitFor(() => expect(screen.getByText("Date")).toBeInTheDocument());
    await waitFor(() => expect(screen.getByText("Amount")).toBeInTheDocument());
  });
  it(`should show transactions Data in transactions table component`, async () => {
    /** mocking transactionsData */
    const transactions = [
      {
        customer: "Andrew",
        date: new Date(2023, 1, 1).toUTCString(),
        amount: 120,
      },
      {
        customer: "Adam",
        date: new Date(2023, 2, 1).toUTCString(),
        amount: 90,
      },
    ];
    const { container } = render(
      <transactionsContext.Provider
        value={{
          customerFilter: "",
          monthFilter: "",
          transactionsData: transactions,
        }}
      >
        <Search />
        <MonthFilter />
        <TransactionsTable />
      </transactionsContext.Provider>
    );
    await waitFor(() =>
      expect(container.getElementsByTagName("th").length).toEqual(4)
    );
    await waitFor(() =>
      expect(container.getElementsByTagName("td").length).toEqual(8)
    );
    await waitFor(() => expect(screen.getByText("120")).toBeInTheDocument());
    await waitFor(() => expect(screen.getByText("Andrew")).toBeInTheDocument());
    await waitFor(() => expect(screen.getByText("Adam")).toBeInTheDocument());
    await waitFor(() => expect(screen.getByText("90")).toBeInTheDocument());
  });
});
