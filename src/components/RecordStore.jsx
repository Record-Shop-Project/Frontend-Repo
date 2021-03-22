import React, { useEffect, useState, useContext } from "react";
import { myContext } from "../context/myContext"
import { getRecordData } from "../helpers/apiCall";
import { useParams, useHistory } from "react-router-dom"
import { updateUserProfile } from "../helpers/apiCall"
import "../css/recordStore.css"

export const RecordStore = () => {
    const history = useHistory()
    let { id } = useParams();

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

    const fetchLoginData = () => {
        console.clear()
        console.log("loginUser=>", loginUser);

        history.push(`/profile/${loginUser._id}`)
        // loginUser.id
    }


    return (

        <div className="store-wrapper">
            <section>
                <h3>Dashboard</h3>
                <p>Here you can find all our records.</p>

                <button onClick={fetchLoginData} >profile</button>
                {records && records.map((record) => {
                    return (

                        <div className='record-continer'>
                            <img src={record.cover} />
                        </div>
                    )
                })}
            </section>
        </div>
    )
};


