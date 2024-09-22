import React, {useEffect,useState} from 'react'
import Layout from '../../Component/shared/Layout/Layout'
import API from "../../Services/API";
import moment from "moment";


const HospitalList = () => {
    const [data,setData] = useState([]); 
    // find donar records
    const getDonars = async ()=>{
        try{
            const {data} = await API.get('/admin/hospital-list');
            console.log(data);
            if(data?.success)
            {
            setData(data?.hospitalData);
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

    // delete function
    const handeldelete = async(id)=>{
        try{
            let answer = window.prompt("Are you sure want to delete this hospital","sure")
            if(!answer) return;
            const {data} = await API.delete(`/admin/delete-donar${id}`);
            alert(data?.message);
            window.location.reload();
            if(data?.success)
            {

            }

        }
        catch(error)
        {
            console.log(error)
        }
    }

  return (
    <Layout>
        <table className="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
      <th scope="col">Date</th>
      <th scope="col">Action</th>

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
        {/* <td>{record.email}</td>   */   }
        <td>{record.phone}</td>
        <td>{moment(record.createdAt).format('DD/MM/YYYY hh:mm')}</td> 
        <td>
            <button className="btn btn-danger" onClick={()=>handeldelete(record._id)}>Delete</button>
        </td>
    </tr>
    ))}
  </tbody>
</table>
   
      
    </Layout>
  )
}

export default HospitalList
