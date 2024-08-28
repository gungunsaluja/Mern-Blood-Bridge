import React,{useState} from 'react'
import API from './../../../Services/API';

import { useSelector } from 'react-redux';
import InputType from './../form/InputType';

const Model = () => {
    const [inventoryType,setInventoryType] = useState("in");
    const [bloodGroup,setBloodGroup] = useState("");
    const [quantity,setQuantity] = useState(0);
    const [donarEmail,setdonarEmail] = useState("");
    const {user} = useSelector(state=>state.auth)

 
    // 5:34
    // handle model data
    const handleModalSubmit = async()=>{
        try{
            if(!bloodGroup || !quantity)
            {
              return alert("Please Provide all fields");
            }
            const {data} = await API.post('/inventory/create-inventory',{ 
              donarEmail,
              email:user?.email
              ,organisation:user?.id,
              inventoryType,
              bloodGroup,
              quantity
            });

            if(data?.success){
              alert("New Record Created");
              window.location.reload();
              console.log(error);
            }


        }
        catch(error)
        {

        }
    }
    
  return (
    <>
    <div>
  {'{'}/* {/*Modal*/} */{'}'}
  <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5" id="exampleModalLabel">Manage Blood Record</h1>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body">
            <div className="d-flex">
                Blood Type:&nbsp;
                <div className="form-check">
                    <input type="radio" name = "inRadio" defaultChecked value = {'in'} 
                    onChange = {(e)=>{setInventoryType(e.target.value)}}
                    className="form-check-input" />
                    <label htmlFor = "in" className='form-check-label'>In</label>
                </div>
                <div className="form-check ms-3">
                    <input type = "radio" name = "outradio" value = {"out"} onChange = {(e)=>setInventoryType(e.target.value)}/>
                    <label htmlFor = "out" className = "form-check-label">OUT</label>
                    </div>

                    </div>
                </div>
                
            </div>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" className="btn btn-primary" onClick = {handleModalSubmit}>Submit</button>
        </div>
        <select className="form-select" aria-label="Default select example" onChange={(e)=> setBloodGroup(e.target.value)}>
  <option selected>Open this select menu</option>
  <option value={'O+'}>O+</option>
  <option value={'O-'}>O-</option>
  <option value={'AB+'}>AB+</option>
  <option value={'AB-'}>AB-</option>
  <option value={'A+'}>A+</option>
  <option value={'A-'}>A-</option>
  <option value={'B+'}>B+</option>
  <option value={'B-'}>B-</option>
  

</select>
<InputType labelText = {'Donar Email'} labelFor = {'donarEmail'} InputType = {'email'} value = {donarEmail}
onChange = {(e)=>{setdonarEmail(e.target.value)}}/>


<InputType labelText = {'Quantity'} labelFor = {'quantity'} InputType = {'Number'} value = {quantity}
onChange = {(e)=>{setQuantity(e.target.value)}}/>

      </div>
    </div>
  </div>
</div>

      
    </>
  )
}

export default Model
