import { BsPlusSquareFill } from "react-icons/bs";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";
import { addOrder } from "../helpers/apiCalls";

const Record = (props) => {
  const data = props.data;
  const { records, setRecords, user } = useContext(UserContext);
  // console.log("oursidedata", data);

  const addRecordToCart = async (e) => {
    e.preventDefault();
    const userId = user._id;
    const recordId = data._id;
    const orderData = {
      user: userId,
      records: [{ record: recordId, quantity: 1 }],
    };

    //console.log("props", props);
    console.log("data", orderData);
    //console.log("user", user._id);
    const res = await addOrder(orderData);
    console.log("res", res);
  };

  //setRecords(res.data);
  return (
    <div className="record">
      <img src={data.cover} alt={data.title} />
      <BsPlusSquareFill onClick={addRecordToCart} />
    </div>
  );
};

export default Record;
