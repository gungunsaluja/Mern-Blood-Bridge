import React from 'react'
// import { Form } from 'react-router-dom'
import Form from "../../Component/shared/form/Form";

const Login = () => {
  return (
    <>
        <div className = "row">
            <div className="col-md-8 form-banner">
                <img src = "./assets/images/banner1.jpg" alt = "loginImage"></img>
                
                </div>
            <div className="col-md-4 form-container">
        
  
  <Form formTitle={'Login Page'}
   submitButton={'Login'} 
   formType = {'login'}></Form>
  

            

                </div>

        </div>
      
    </>
  )
}

export default Login

