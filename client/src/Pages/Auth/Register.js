import React from 'react'
import Form from "../../Component/shared/form/Form"
import { useSelector } from 'react-redux'
import Spinner from '../../Component/shared/Spinner'

const Register = () => {
  const {loading,error}  = useSelector (state=>state.auth)
  return (
    <div>
      {
        loading?(<Spinner></Spinner>):(

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
        )
      }
      
     
    </div>
  )
}

export default Register
