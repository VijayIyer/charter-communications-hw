import React from "react";
import renderer from "react-test-renderer";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";
import Regenerate from "../components/Transactions/Regenerate";
import Search from "../components/Transactions/Search";
import { transactionsContext } from "../context/transactionsContext";
import { dataContext } from "../context/dataContext";
import MonthFilter from "../components/Transactions/MonthFilter";
import TransactionsTable from "../components/Transactions/TransactionsTable";

it("renders App correctly", () => {
  const { container } = render(<App />);
  expect(screen.getByText("Transactions:")).toBeInTheDocument();
  expect(screen.getByText("Show Rewards")).toBeInTheDocument();
});
describe(`tests snapshot`, () => {
  it(`should match snapshot`, () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
describe(`tests Regenerate component`, () => {
  it(`should contain the text 'Regenerate Transactions Data'`, () => {
    const { container } = render(<Regenerate />);
    expect(
      screen.getByText("Regenerate Transactions Data")
    ).toBeInTheDocument();
  });
  it(`calls fetchData function when 'Regenerate Transactions Data' button is clicked`, () => {
    const fetchData = jest.fn();
    const { container } = render(
      <dataContext.Provider value={{ fetchData }}>
        <transactionsContext.Provider value={null}>
          <Regenerate />
        </transactionsContext.Provider>
      </dataContext.Provider>
    );
    const regenerateComponent = container.getElementsByClassName(
      "transactions__regenerate-btn"
    )[0];
    fireEvent.click(regenerateComponent);
    expect(fetchData).toBeCalledTimes(1);
  });
});
describe(`tests Search component`, () => {
  it(`should contain label element with the text 'Customer:'`, () => {
    const { container } = render(
      <transactionsContext.Provider
        value={{ customerFilter: null, setCustomerFilter: null }}
      >
        <Search />
      </transactionsContext.Provider>
    );
    expect(screen.getByText("Customer:")).toBeInTheDocument();
    expect(container.getElementsByTagName("label").length).toEqual(1);
  });
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
  it(`should contain label with text 'See Transactions in Month:' and a select element`, () => {
    const { container } = render(
      <transactionsContext.Provider
        value={{ monthFilter: null, setMonthFilter: null }}
      >
        <MonthFilter />
      </transactionsContext.Provider>
    );
    expect(screen.getByText("See Transactions in Month:")).toBeInTheDocument();
    expect(container.getElementsByTagName("label").length).toEqual(1);
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
  test(`should render a table element with className 'transactions__table'`, () => {
    const { container } = render(
      <dataContext.Provider
        value={{
          loadingTransactions: false,
          transactionsData: [],
          error: false,
        }}
      >
        <transactionsContext.Provider
          value={{ customerFilter: null, monthFilter: null }}
        >
          <TransactionsTable />
        </transactionsContext.Provider>
      </dataContext.Provider>
    );
    expect(
      container.getElementsByClassName("transactions__table").length
    ).toEqual(1);
    const transactionsTable = container.getElementsByClassName(
      "transactions__table"
    )[0];
    expect(screen.getByText("Customer Name")).toBeInTheDocument();
    expect(screen.getByText("Date")).toBeInTheDocument();
    expect(screen.getByText("Amount")).toBeInTheDocument();
    expect(screen.queryByText("Total")).not.toBeInTheDocument();
  });
  test(`should show transactions Data in transactions table component`, () => {
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
      <dataContext.Provider
        value={{
          loadingTransactions: false,
          transactionsData: transactions,
          error: false,
        }}
      >
        <transactionsContext.Provider
          value={{ customerFilter: "", monthFilter: "" }}
        >
          <Search />
          <MonthFilter />
          <TransactionsTable />
        </transactionsContext.Provider>
      </dataContext.Provider>
    );
    expect(container.getElementsByTagName("th").length).toEqual(4);
    expect(container.getElementsByTagName("td").length).toEqual(8);
    expect(screen.getByText("120")).toBeInTheDocument();
    expect(screen.getByText("Andrew")).toBeInTheDocument();
    expect(screen.getByText("Adam")).toBeInTheDocument();
    expect(screen.getByText("90")).toBeInTheDocument();
  });
});
