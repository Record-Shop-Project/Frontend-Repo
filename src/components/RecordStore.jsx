import React,{useEffect, useState} from "react";
import { getRecordData } from "../helpers/apiCall";

export const RecordStore = () => {
    const [records, setRecords] = useState([])

    const fetchRecords = async ()=>{
        const myRecords =  await getRecordData()
        setRecords(myRecords)
        console.log("records", records);
    }

    useEffect(() => {
      fetchRecords()
      //console.log("myRecords",myRecords);
      
   }, [])

  return <div>{records && records.map((record) => {
      return <div>
          <img src={record.cover} />
      </div>
  })}</div>;
};


