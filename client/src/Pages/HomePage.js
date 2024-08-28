import React from 'react'
import React,{useEffect,useState} from "react";

import { useSelector,useEffect } from 'react-redux'
import Spinner from '../Component/shared/Spinner';
import Layout from '../Component/shared/Layout/Layout';
import Model from '../Component/shared/Model/Model';

const HomePage = () => {
  const {loading,error} = useSelector(state=>state.auth);
  const {data,setData} = useState([]);
  // get function
  const getBloodRecords = async()=>{
    try{

      const {data} = await API.get('/inventory/get-inventory')
      if(data?.success)
      {
        setData(data?.inventory);

      }
    } 
    catch(error)
    {
      console.log(error);
    }

    useEffect(()=>{
      getBloodRecords();
    },[]);
   
  }

  return (
    <Layout>
      {error && <span>{alert(error)}</span>}
      {loading?(<Spinner></Spinner>):(<>


      <h4 className = 'ms-4'
      data-bs-toggle = "model"
      data-bs-target = "#staticBackdrop"
      >
        <i className = 'fa-solid fa-plus text-success py-4'></i>
        

        Add Inventory</h4>
      <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colSpan={2}>Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>

        <Model></Model></>)}
      
      
    </Layout>
  )
}

export default HomePage
