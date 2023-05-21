import React from 'react'
import { useState } from 'react'
import Form from '../components/Register/Form'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useDispatch } from 'react-redux' // this is needed to send storage to redux store
import { useNavigate } from "react-router-dom";






export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch =useDispatch()
  const navigate = useNavigate();
  
  const submitHandler =async (e) => {
    e.preventDefault()
    const response=await axios.post('http://localhost:9000/check/login', {email:email, password:password})
    const responseInTable=response.data
    console.table({responseInTable})
    const Token=responseInTable.token
    const User=responseInTable.user
    const Username= User.name
    console.log('Username: ', Username);
    const Useremail=User.email
    console.log('Useremail: ', Useremail);
    // save user and token in local storage
    window.localStorage.setItem('auth', JSON.stringify({ token:Token, user:Username, email:Useremail }))
    
    // save user and token in redux storage
    dispatch({
      type:'LOGIN',
      payload:{
        user:User,
        token:Token
      }
    })
    if(responseInTable.login){

      toast.success('Login Successful')
      navigate('/dashboard')
    }
    if(responseInTable.login===false){
     toast.error('Login Failed')
   }
   if(responseInTable.error==='User does not exist'){
     toast.error('User does not exist')
   }
   if(responseInTable.error==='Password is required'){
     toast.error('Password is required')
   }
    if(responseInTable.error==='Email is required'){
      toast.error('Email is required')
    }
    
  }
  return (
    <>
    <ToastContainer/>
    <div className='container flex items-center justify-center h-screen bg-stone-900'>
      <div className='w-1/3 bg-white registerBox h-2/3'>
        <div className='content'>
          <h1 className='p-5 text-3xl font-bold text-center'>Login</h1>
          <Form 
           formTypes={['email', 'password' , "loginButton"]}

           formData={{
            email,
            password,
            setEmail,
            setPassword,
          }}
          onSubmit={submitHandler}
          >
    
          </Form>
         {/* {
          email && <>
          buttons
          </>
         } */}
        </div>
      </div>
</div>
</>
  )
}
