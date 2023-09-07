import { useTransactions } from "../../context/transactionsContext";

export default function Search() {
  const { customerFilter, setCustomerFilter } = useTransactions();
  return (
    <div className='transactions__search-customer'>
      <input
        type='text'
        id='input'
        className='transactions__search-customer__input'
        value={customerFilter}
        placeholder='Filter with Customer Name'
        onChange={(e) => setCustomerFilter(e.target.value)}
      />
    </div>
  );
}
