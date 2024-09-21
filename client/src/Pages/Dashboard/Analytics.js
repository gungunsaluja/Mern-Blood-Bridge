import React from 'react'
import {useState,useEffect} from "react";
import Header from "../../Component/shared/Layout/Header";



const Analytics = () => {
    const [data,setData] = useState([])
    // get blood group data
    const getBloodGroupData = async()=>{
        try{

            const {data} = await API.get('/analytics/blodGroups-data')
            if(data?.success)
            {
                setData(data?.bloodGroupData)
                console.log(data)
            }
        }
        catch(error)
        {
            console.log(error);
        }
    };

    useEffect(()=>{

        getBloodGroupData();

    },[])
  return (
    <>
        <Header/>
        
        <div className="d-flex flex-row flex-wrap">
            {data?.map((record)=>(
                <div className = "card m-2 p-1" style ={{ width: "18rem" }}>
                    <div className = "card-body">
                        <h1 className = "card-title bg-light text-dark text-center mb-3">{record.bloodGroupData}</h1>

                        <p className = "card-text"> 
                            Total In: <b>{record.totalIn}</b>
                        </p>

                        <p className = "card-text"> 
                            Total Out: <b>{record.totalOut}</b>
                        </p>
                        </div>
                        <div className="card-footer text-light bg-dark text-center">
                            Total Available :<b>{record.availableBlood}</b>
                        </div>
                </div>
            ))}      
    </div>
    </>
  );
};

export default Analytics
