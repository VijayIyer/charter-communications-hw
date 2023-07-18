import RewardsTable from "../components/Rewards/RewardsTable";
import { dataContext } from "../context/dataContext";
import { render, screen, fireEvent } from "@testing-library/react";
describe(`tests rewards component`, () => {
  test(`A button with text 'Show Rewards' is rendered initially`, () => {
    const { container } = render(
      <dataContext.Provider value={{ transactionsData: null }}>
        <RewardsTable />
      </dataContext.Provider>
    );
    expect(screen.getByText("Show Rewards")).toBeInTheDocument();
    expect(
      container.getElementsByClassName("rewards__show-btn").length
    ).toEqual(1);
  });
  test(`the button with text 'Show Rewards' is not present after it is clicked`, () => {
    const { container } = render(
      <dataContext.Provider value={{ transactionsData: null }}>
        <RewardsTable />
      </dataContext.Provider>
    );
    expect(
      container.getElementsByClassName("rewards__show-btn").length
    ).toEqual(1);
    const showBtn = container.getElementsByClassName("rewards__show-btn")[0];
    fireEvent.click(showBtn);
    expect(
      container.getElementsByClassName("rewards__show-btn").length
    ).toEqual(0);
  });
  test(`rewards table is shown after 'Show Rewards' button is clicked`, () => {
    const { container } = render(
      <dataContext.Provider value={{ transactionsData: null }}>
        <RewardsTable />
      </dataContext.Provider>
    );
    expect(container.getElementsByClassName("rewards__table").length).toEqual(
      0
    );
    const showBtn = container.getElementsByClassName("rewards__show-btn")[0];
    fireEvent.click(showBtn);
    expect(container.getElementsByClassName("rewards__table").length).toEqual(
      1
    );
  });

  test(`rewards table shows correct calculation of rewards amount given the transactions`, () => {
    const transactions = [
      {
        customer: "Andrew",
        date: new Date(2023, 1, 1).toUTCString(),
        amount: 120,
      },
      {
        customer: "Adam",
        date: new Date(2023, 2, 1).toUTCString(),
        amount: 70,
      },
    ];
    const { container } = render(
      <dataContext.Provider
        value={{
          transactionsData: transactions,
          loadingTransactions: false,
          error: false,
        }}
      >
        <RewardsTable />
      </dataContext.Provider>
    );
    expect(container.getElementsByClassName("rewards__table").length).toEqual(
      0
    );
    const showBtn = container.getElementsByClassName("rewards__show-btn")[0];
    fireEvent.click(showBtn);
    expect(container.getElementsByClassName("rewards__table").length).toEqual(
      1
    );
    expect(container.getElementsByTagName("th").length).toEqual(4);
    expect(container.getElementsByTagName("td").length).toEqual(8);
    expect(screen.getByText("Andrew")).toBeInTheDocument();
    expect(screen.getByText("Adam")).toBeInTheDocument();
    expect(screen.getByText("Total")).toBeInTheDocument();
    expect(screen.getByText("February")).toBeInTheDocument();
    expect(screen.getByText("March")).toBeInTheDocument();
    const allTds = container.querySelectorAll("td");

    const rewardCellWithValue40 = Array.from(allTds).find(
      (td) => td.textContent === "40"
    );
    expect(rewardCellWithValue40).toBeInTheDocument();
    const rewardCellWithValue20 = Array.from(allTds).find(
      (td) => td.textContent === "20"
    );
    expect(rewardCellWithValue20).toBeInTheDocument();
  });
});