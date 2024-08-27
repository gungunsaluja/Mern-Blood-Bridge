import React from 'react'
import { useSelector } from 'react-redux'
import Spinner from '../Component/shared/Spinner';
import Layout from '../Component/shared/Layout/Layout';

const HomePage = () => {
  const {loading,error} = useSelector(state=>state.auth);

  return (
    <Layout>
      {error && <span>{alert(error)}</span>}
      {loading?(<Spinner></Spinner>):(<>
      <h1>Home page</h1></>)}
      
      
    </Layout>
  )
}

export default HomePage
