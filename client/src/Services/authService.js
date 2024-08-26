import React from 'react'
import store from '../Redux/store'
import { userLogin, userRegister } from '../Redux/features/auth/authActions';


export const handleLogin = (e,email,password,role) =>{
    e.preventDefault();
    try{
        if(!role || !email || !password){
            return alert("Please Provide All Fields")
        }
        console.log('login',e,email,password,role);
    }
    store.dispatch(userLogin({email,password,role}))
    catch(error){
        console.log(error);
    }
};
export const handleRegister = (
              e,
              name,
              role,
              email,
              password,
              organisationName,
              hospitalName,
              website,
              address,
              phone
)=>{
    e.preventDefault();
    try{
        store.dispatch(userRegister(
           { name,
            role,
            email,
            password,
            phone,
            organisationName,
            address,
            hospitalName,
            website,
           }
        ));
        

    }catch(error)
    {
        console.log(error);
    }

}; 



const authService = () => {
  return (
    <div>

      
    </div>
  )
}

export default authService
