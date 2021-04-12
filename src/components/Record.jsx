import { BsPlusSquareFill } from "react-icons/bs";
const Record = ({ data }) => {
  return (
    <div className="record">
      <img src={data.cover} alt={data.title} />
      <BsPlusSquareFill />
    </div>
  );
};

export default Record;
