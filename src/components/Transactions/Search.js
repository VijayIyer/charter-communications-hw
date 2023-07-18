import { useContext } from "react";
import { transactionsContext } from "../../context/transactionsContext";

export default function Search() {
  const { customerFilter, setCustomerFilter } = useContext(transactionsContext);
  return (
    <div className='transactions__search-customer'>
      <label className='transactions__search-customer__label'>Customer</label>
      <input
        type='text'
        className='transactions__search-customer__input'
        value={customerFilter}
        placeholder=' '
        onChange={(e) => setCustomerFilter(e.target.value)}
      />
    </div>
  );
}
