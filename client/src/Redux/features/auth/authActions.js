import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../../Services/API";

import {ToastContainer,toast} from 'react-toastify';
export const userLogin = createAsyncThunk(
    'auth/login',
    async({role,email,password},{rejectWithValue})=>{
        try{
            const{data} = await API.post('/auth/login',{role,email,password})
            // store token
            if(data.success)
            {
                alert(data.message);
                localStorage.setItem('token',data.token)
               
                window.location.replace("/");

            }

        }
        catch(error)
        {
            if(error.response && error.response.data.message)
            {
                return rejectWithValue(error.response.data.message)  
            }
            else{
                return rejectWithValue(error.mesaa

                )
            }
        }

    }
)
export const userRegister = createAsyncThunk(
    'auth/register',
    async({
        name,
        role,
        email,
        password,
        phone,
        orgainsationName,
        address,
        hospitalName,
        website
    },{rejectWithValue})=>{
        try{
            const {data} = await API.post('auth/register',{
                name,
                role,
                email,
                password,
                phone,
                organisationName,
                address,
                hospitalName,
                website
            })
            if(data?.success)
            {
                alert("User Registered Successfully ")
                // toast.success("User Registered Successfully");

                window.location.replace('/login');
            }

        }
        catch(error)
        {
            console.log(error);
            if(error.response && error.response.data.message)
            {
                return rejectWithValue(error.response.data.message);
            }
            else{
                return rejectWithValue(error.message);

            }

        }

    },


)

// current user

export const getCurrentUser = createAsyncThunk(
    'auth/getCurrentUser',
    async({rejectWithValue})=>{
        try{
            const res = await API.get('/auth/current-user')
            if(res?.data)
            {
                return res && res?.data;
            }

        }
        catch(error)
        {
            console.log(error);
            if(error.response && error.response.data.message)
            {
                return rejectWithValue(error.response.data.message);
            }
            else{
                return rejectWithValue(error.message);
            }

        }


    }
)