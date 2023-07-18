import { useContext } from "react";
import { dataContext } from "../../context/dataContext";
export default function Regenerate() {
  const { fetchData } = useContext(dataContext);
  return (
    <button className='transactions__regenerate-btn' onClick={fetchData}>
      Regenerate Transactions Data
    </button>
  );
}
