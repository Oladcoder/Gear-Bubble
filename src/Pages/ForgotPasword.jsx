import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { BsArrowLeft } from 'react-icons/bs'

const ForgotPassword = () => {
  const [email, setEmail] = useState('')
  const [correct, setCorrect] = useState(true)


  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  const handleSubmit = () => {
    if (email.length !== 0){
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
        <h1 className="text-4xl">Welcome Back</h1>
        <p>Login to your account</p>
        <form className='flex flex-col justify-center mt-6'>
          <label htmlFor='email'>Email Address</label>
          <input onChange={handleEmail} className=" h-6 rounded-sm w-72 bg-transparent border-t-0 active:border-none active:border-home focus:border-none   border-b-2 border-white" id='email' type="email"/>
          <div className='flex justify-center items-center w-full'>
          <input onClick={handleSubmit} className='bg-black text-white mt-4 rounded-md w-48 h-8' type="submit" value="Reset Password" />
          </div>
        </form>
        <p className='mt-8'>Dont have an account?</p> <Link to ="/signup"><button className='bg-black text-white hover:bg-white hover:text-black mt-4 rounded-md w-48 h-8'>SignUp</button></Link> 
       </div>
       :
<div className="w-1/2">
    <h2 className='text-2xl text-green-400'>Your Password has been succesfully reset </h2>
  <p className='text-lg'> We have sent a link to your change your password to supplied email address</p>
  <Link to= "/"> <button className='bg-black text-white hover:bg-white hover:text-black mt-4 rounded-md w-48 h-8'>Home</button>
</Link>  </div>
}
      </div>


 <div className="signupcover sm:hidden w-1/2 h-screen">
        
      </div>

    </div>
  )
}
export default ForgotPassword