import { useContext } from "react";
import { transactionsContext } from "../../context/transactionsContext";

export default function Search() {
  const { customerFilter, setCustomerFilter } = useContext(transactionsContext);
  return (
    <div>
      <label>Customer:</label>
      <input
        type='text'
        className='transactions__search-customer'
        value={customerFilter}
        onChange={(e) => setCustomerFilter(e.target.value)}
      />
    </div>
  );
}
