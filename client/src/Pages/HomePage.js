import React from 'react'
import React,{useEffect,useState} from "react";

import { useSelector } from 'react-redux'
import Spinner from '../Component/shared/Spinner';
import Layout from '../Component/shared/Layout/Layout';
import Model from '../Component/shared/Model/Model';

const HomePage = () => {
  const {loading,error} = useSelector(state=>state.auth);
  const {data,setData} = useState()
  // get function
  const getBloodRecords = async()=>{
    try{

      const {data} = await API.get('/inventory/get-inventory')
      if(data?.success)
      {
        setData(data?.inventory)

      }
    }

    catch(error)
    {
      console.log(error);
    }
  }

  return (
    <Layout>
      {error && <span>{alert(error)}</span>}
      {loading?(<Spinner></Spinner>):(<>


      <h4 className = 'ms-4'
      data-bs-toggle = "model"
      data-bs-target = "#staticBackdrop"
      >
        <i className = 'fa-solid fa-plus text-success py-4'></i>Add Inventory</h4>
        <Model></Model></>)}
      
      
    </Layout>
  )
}

export default HomePage
