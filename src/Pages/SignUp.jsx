import React, { useState } from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import {Link} from 'react-router-dom'


const SignUp = () => {
  const [password, setPassword1] = useState('')
  const [email, setEmail] = useState('')
  const [password2, setPassword2] = useState('')
  const [correct, setCorrect] = useState(true)


  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  const handlePassword1 = (e) => {
    setPassword1(e.target.value)
  }
  const handlePassword2 = (e) => {
    setPassword2(e.target.value)
  }

  const handleSubmit = () => {
    if (email.length !== 0 && password === password2){
      setCorrect(prev => !prev)
    }
    else{
      alert('check that all fields are correctly field')
    }
  }
  return (
    
    <div className="bg-home sm:justify-center text-white h-screen w-screen flex items-center">
      <Link to= "/">
      <button className='bg-red-600 text-2xl flex justify-center items-center absolute top-7 left-7 w-7 text-white'><BsArrowLeft/></button>
      </Link>
      <div className="w-1/2 flex flex-col justify-center h-screen items-center">
        {correct ?
        <div>
        <h1 className="text-4xl">Create an account</h1>
        <p>To start shopping with us</p>
        <form className='flex flex-col justify-center mt-6'>
          <label htmlFor='email'>Email Address</label>
          <input onChange={handleEmail} className=" h-6 rounded-sm w-72 bg-transparent border-t-0 active:border-none active:border-home focus:border-none   border-b-2 border-white" id='email' type="email"/>
          <label htmlFor='pasword1'>Password</label>
          <input className=" w-72 h-6 bg-transparent border-t-0 text-white active:border-none active:border-home focus:border-none border-b-2 border-white    rounded-sm "onChange={handlePassword1}  id='password1' type= "password"/>
          <label htmlFor='pasword2'>Confirm Password</label>
          <input className=" h-6  bg-transparent border-t-0 text-white active:border-none active:border-home focus:border-none border-b-2 border-white   rounded-sm w-72"onChange={handlePassword2}  id='password1' type= "password"/>
          {password !== password2 ? <div className='flex justify-center items-center w-full'>
          <div className='bg-red-500 mt-5 h-20 w-60 flex justify-center items-center'>
           Passwords do not match
        </div></div> : <div></div>}
          <div className='flex justify-center items-center w-full'>
          <input onClick={handleSubmit} className='bg-black text-white mt-4 rounded-md w-48 h-8' type="submit" value="SignUp" />
          </div>
        </form>

        <p className='mt-8'>Have an account already?</p> <Link to= "/login"><button className='bg-black text-white hover:bg-white hover:text-black mt-4 rounded-md w-48 h-8'>Login</button>
       
        </Link></div>
       :
<div className="w-1/2">
    <h2 className='text-2xl text-green-400'>Your Account has successfully been created </h2>
  <p className='text-lg'> Click the button below to go to the login Page</p>
  <Link to = "/login"> <button className='bg-black text-white hover:bg-white hover:text-black mt-4 rounded-md w-48 h-8'>Login</button></Link>   
  </div>
}
      </div>


 <div className="signupcover sm:hidden w-1/2 h-screen">
        
      </div>

    </div>
  )
}

export default SignUp