import React from 'react'
// import { Form } from 'react-router-dom'
import Form from "../../Component/shared/form/Form";
import {useSelector} from 'react-redux'
import Spinner from './../../Component/shared/Spinner';
import { toast } from 'react-toastify';


const Login = () => {

  const {loading,error} = useSelector(state=>state.auth)
  return(
    
      <>
      { error && <span>{toast.error(error)}</span>}
      loading?(<Spinner/>):(
    
      <div className = "row g-0">
          <div className="col-md-8 form-banner">
              <img src = "./assets/images/banner1.jpg" alt = "loginImage"></img>
              
              </div>
          <div className="col-md-4 form-container">
      

<Form formTitle={'Login Page'}
 submitButton={'Login'} 
 formType = {'login'}></Form>


          

              </div>

      </div>
    
  )
    }
    </>
    )
  

  
}

export default Login

