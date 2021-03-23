import React, { useEffect, useState, useContext } from "react";
import { myContext } from "../context/myContext";
import { getRecordData } from "../helpers/apiCall";
import { useParams, useHistory } from "react-router-dom";
import { updateUserProfile } from "../helpers/apiCall";
import "../css/recordStore.css";

export const RecordStore = () => {
  const history = useHistory();
  let { id } = useParams();

  const context = useContext(myContext);
  const { loginUser, setloginUser } = context;
  const [records, setRecords] = useState([]);

  const fetchRecords = async () => {
    const myRecords = await getRecordData();
    setRecords(myRecords);
  };

  useEffect(() => {
    fetchRecords();
  }, []);

  return (
    <div className="store-wrapper">
      <section>
        <h3>Dashboard</h3>
        <p>Here you can find all our records.</p>

        {/* <button onClick={fetchLoginData}>profile</button> */}
        <div className="record-container">
          <div className="image-wrapper">
            {records &&
              records.map((record) => {
                return <img src={record.cover} />;
              })}
          </div>
        </div>
      </section>
    </div>
  );
};
