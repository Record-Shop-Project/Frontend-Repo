import React, { useEffect, useState, useContext } from "react";
import { myContext } from "../context/myContext"
import { getRecordData } from "../helpers/apiCall";
import { useParams } from "react-router-dom"
import { updateUserProfile } from "../helpers/apiCall"


export const RecordStore = () => {

    const context = useContext(myContext)
    const { loginUser, setloginUser } = context
    const [records, setRecords] = useState([])

    const fetchRecords = async () => {
        const myRecords = await getRecordData()
        setRecords(myRecords)
        console.log("records",);
    }

    useEffect(() => {
        fetchRecords()


    }, [])

    return (

        <div>

            <button onClick={() => console.log("loginuser", loginUser)}>profile</button>
            {records && records.map((record) => {
                return (

                    <div>
                        <img src={record.cover} />
                    </div>
                )
            })}
        </div>
    )
};


