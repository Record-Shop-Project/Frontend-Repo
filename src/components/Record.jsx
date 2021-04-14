import { BsPlusSquareFill } from "react-icons/bs";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";
import { addOrder } from "../helpers/apiCalls";

const Record = ({ data }) => {
  const { records, setRecords } = useContext(UserContext);

  const addRecordToCart = async (e, data) => {
    e.preventDefault();
    console.log("works");
    const res = await addOrder(records);
    setRecords(res.data);
    console.log("records", res);
  };

  return (
    <div className="record">
      <img src={data.cover} alt={data.title} />
      <BsPlusSquareFill onClick={addRecordToCart} />
    </div>
  );
};

export default Record;
