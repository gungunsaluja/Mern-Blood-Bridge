import moment from "moment";
import React from "react";
import { useState, useEffect } from "react";
import Header from "../../Component/shared/Layout/Header";

const Analytics = () => {
  const [data, setData] = useState([]);
  const [inventoryData,setInventoryData] = useState([]);
   
  const colors = [
    "#884A39",
    "#C38154",
    "#FFC26F",
    "#4F709C",
    "#4942E4",
    "#0079FF",
    "#FF0060",
    "#22A699",
  ];
  // get blood group data
  const getBloodGroupData = async () => {
    try {
      const { data } = await API.get("/analytics/blodGroups-data");
      if (data?.success) {
        setData(data?.bloodGroupData);
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
// lifecycle method

  useEffect(() => {
    getBloodGroupData();
  }, []);
 // get function
 const getBloodRecords = async()=>{
  try{

    const {data} = await API.get('/inventory/get-recent-inventory')
    if(data?.success)
    {
      setInventoryData(data?.inventory);
      console.log(data);

    }
  } 
  catch(error)
  {
    console.log(error);
  }
};

  useEffect(()=>{
    getBloodRecords();
  },[]);


  return (
    <>
      <Header />

      <div className="d-flex flex-row flex-wrap">
        {data?.map((record) => (
          <div className="card m-2 p-1" style={{ width: "18rem",backgroundColor:`${colors[i]}` }}>
            <div className="card-body">
              <h1 className="card-title bg-light text-dark text-center mb-3">
                {record.bloodGroupData}
              </h1>

              <p className="card-text">
                Total In: <b>{record.totalIn}</b>(ML)
              </p>

              <p className="card-text">
                Total Out: <b>{record.totalOut}</b>(ML)
              </p>
            </div>
            <div className="card-footer text-light bg-dark text-center">
              Total Available :<b>{record.availableBlood}</b>(ML)
            </div>
          </div>
        ))}
      </div>
      
      <div className = "container">
        <table className="table">
          <thead>
            <tr>
            <th scope = "col">Blood Group</th>
            <th scope = "col">Inventory Type</th>
            <th scope = "col">Quantity</th>
            <th scope = "col">Donar Email</th>
            <th scope = "col">Time and Date</th>

            </tr>
            
          </thead>
          <tbody>
            {inventoryData?.map((record)=>(
              <tr key = {record._id}>
                <td>{record.bloodGroup}</td>
                <td>{record.inventporyType}</td>
                <td>{record.quantity}</td>
                <td>{record.email}</td>
                <td>
                  {moment(record.createdAt).format("DD/MM/YYYY hh:mm A")
                  }
                </td>
              </tr>

              
            ))}

          </tbody>
        </table>

      </div>
    </>
  );
};

export default Analytics;
