import React, { useEffect } from 'react'
import API from '../Services/API';
import Layout from '../Component/shared/Layout/Layout';

const Donation = () => {
    const {user } = useSelector(state=>state.auth)
    const [data,setData] = useState([]);
    // find donar records
    const getDonars = async()=>{
        try{
            const {data} = await API.post("/inventory/get-inventory-hospital",{
                filters:{
                    inventoryType:'out',
                    donar:user?.id,
                },
            });
            // console.log(data)
            if(data?.success)
            {
                setData(data?.inventory);
            }
        }
            catch(error)
            {
                console.log(error);
            }
        
    }
    ;
    useEffect(()=>{
        getDonars();
    },[]);
  return (
    <div>
      <Layout>

      <table className="table">
  <thead>
    <tr>
      <th scope="col">Blood Group</th>
      <th scope="col">Inventory Type</th>
      <th scope="col">Quantity</th>
      <th scope="col">Email</th>
      <th scope="col">Date</th>
      {/* <th scope="col">Time & Date</th> */}
    </tr>
  </thead>
  <tbody>
    {/* 6:11 */}
    {data?.map((record)=>(
      <tr key = {record._id}>
        <td>{record.bloodGroup}</td>
        <td>{record.inventoryType}</td>
        <td>{record.quantity}</td>
        <td>{record.email}</td>
        <td>{record.phone}</td>
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
      </div>
      );

}

export default Donation;
