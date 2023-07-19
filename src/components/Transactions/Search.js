import { useContext } from "react";
import { transactionsContext } from "../../context/transactionsContext";

export default function Search() {
  const { customerFilter, setCustomerFilter } = useContext(transactionsContext);
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
