import React,{useEffect,useState} from 'react'
import Layout from '../../Component/shared/Layout/Layout'

const Donar = () => {
    const [data,setData] = useState([]); 
    // find donar records
    const getDonars = async ()=>{
        try{
            const {data} = await API.get('/inventory/get-donars');
            // console.log(data);
            if(data?.success)
            {
            setData(data?.donars);
            }
        }
        catch(error)
        {
            console.log(error);


        }


    };
    useEffect(()=>{

        getDonars();

    },[])

  return (
    <Layout>
        <table className="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
      <th scope="col">Date</th>
      {/* <th scope="col">Time & Date</th> */}
    </tr>
  </thead>
  <tbody>
    {/* 6:11 */}
    {data?.map((record)=>(
      <tr key = {record._id}>
        <td>{record.name || record.orgainsation + " (ORG)"}</td>
        <td>{record.email}</td>
        {/* <td>{record.quantity}(ML)</td> */}
        {/* <td>{record.email}</td>   */}
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

export default Donar
