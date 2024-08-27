import React from 'react'
import { useSelector } from 'react-redux'
import Spinner from '../Component/shared/Spinner';
import Layout from '../Component/shared/Layout/Layout';
import Model from '../Component/shared/Model/Model';

const HomePage = () => {
  const {loading,error} = useSelector(state=>state.auth);

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
