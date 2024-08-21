import React from 'react'
import Form from "../../Component/shared/form/Form"

const Register = () => {
  return (
    <div>
      
     <div className = "row g-0">
        <div className = "col-md-8 form-banner ">
            <img src = "./assets/images/banner2.jpg" alt = "registerImage"></img>
        </div>
        <div className = 'col-md-4 form-container'>
            <Form formTitle={'Register'} 
            submitButton = {'Register'} 
            formType={'register'}
            ></Form>
        </div>
     </div>
    </div>
  )
}

export default Register
