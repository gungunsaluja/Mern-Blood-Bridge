import React from 'react'
import Layout from '../../Component/shared/Layout/Layout'
import moment from 'moment';
import { useSelector } from 'react-redux';
import OrganisationPage from './OrganisationPage';
const OrganisationPage = () => {
  const {user} = useSelector(state=>state.auth)
    const [data,setData] = useState([]);
    const getOrg = async()=>{
        try {
          if(user?.role==='donar')
          {
            const {data} = await API.get("/inventory/get-organisation");
    
            // find donar records
            if(data?.success)
            {
                setData(data?.organisation);
            }

          }
          if(user?.role==='hospital')
            {
              const {data} = await API.get("/inventory/get-organisation-for-hospital");
      
              // find donar records
              if(data?.success)
              {
                  setData(data?.organisation);
              }
  
            }

         
            
      
}
    catch(error)
    {
        console.log(error);
    }
};
useEffect(()=>{
    getOrg();
},[user]);

  return (
    <Layout>
        <table className="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
      <th scope="col">Address</th>
      <th scope="col">Date</th>
    </tr>
  </thead>
  <tbody>
    {/* 6:11 */}
    {data?.map((record)=>(
      <tr key = {record._id}>
        <td>{record.hospitalName}</td>
        <td>{record.email}</td>
        {/* <td>{record.quantity}(ML)</td> */}
        <td>{record.email}</td>  
        <td>{moment(record.createdAt).format('DD/MM/YYYY hh:mm')}</td> 
      <th scope="row">1</th>
      <td>Mark</td>
    </tr>
      
    ))}
    
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
      
    </Layout>
  )
}

export default OrganisationPage
