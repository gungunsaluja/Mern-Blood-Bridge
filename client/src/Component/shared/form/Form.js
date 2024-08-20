import React from 'react'
import {useState} from 'react'
import InputType from './InputType'


const Form = ({submitButton,formTitle,formType}) => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [role,setRole] = useState('donar');
  const [name,setName] = useState('');
  const [organisationName,setOrganisationName] = useState('');
  const [ hospitalName,setHospitalName] = useState('');
  const [ website,setWebsite] = useState('');
  const [ address,setAddress] = useState('');
  const [ phone,setPhone] = useState('');
   

  return (
    <div>
      
     <form>
      <h1 className = "text-center">{formTitle}

      </h1>
      <hr></hr>
      <InputType labeltext = {'email'} labelfor = {'forEmail'} inputtype = {'email'} name = {'email'} value = {email} onChange = {(e)=>setEmail(e.target.value)}></InputType>

      <InputType labeltext = {"Password"}
      labelfor={'forPassword'}
      inputtype={'Password'}
      name = {'password'}
      value = {password} onChange={(e)=>setPassword(e.target.value)}
      ></InputType>
      <InputType labeltext = {"Name"}
      labelfor={'forName'}
      inputtype={'text'}
      name = {'name'}
      value = {name} onChange={(e)=>setName(e.target.value)}
      ></InputType>
      <InputType labeltext = {"organisationName"}
      labelfor={'fororganisationName'}
      inputtype={'text'}
      name = {'organisationName'}
      value = {organisationName} onChange={(e)=>setOrganisationName(e.target.value)}
      ></InputType>

      <InputType labeltext = {"Hospital Name"}
      labelfor={'forhospitalName'}
      inputtype={'text'}
      name = {'hospitalName'}
      value = {hospitalName} onChange={(e)=>setHospitalName(e.target.value)}
      ></InputType>

    <InputType labeltext = {"website"}
      labelfor={'forWebsite'}
      inputtype={'text'}
      name = {'website'}
      value = {website} onChange={(e)=>setWebsite(e.target.value)}
      ></InputType>

<InputType labeltext = {"Address"}
      labelfor={'foraddress'}
      inputtype={'text'}
      name = {'address'}
      value = {address} onChange={(e)=>setAddress(e.target.value)}
      ></InputType>

<InputType labeltext = {"Phone"}
      labelfor={'forPhone'}
      inputtype={'text'}
      name = {'phone'}
      value = {phone} onChange={(e)=>setPhone(e.target.value)}
      ></InputType>

      

      <div className="d-flex">
        <button className = "btn btn-primary" type = "submit">
          {submitButton}
        </button>
      </div>
     </form>
       
    </div>
  )
}

export default Form
