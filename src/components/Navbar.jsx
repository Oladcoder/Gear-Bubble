import React, { useState, useContext} from 'react'
import {AiFillShopping} from 'react-icons/ai'
import { Badge } from '@mui/material'
import {FaBars, FaTimes} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import { CartContext } from '../components/Context'

const Navbar = () => {
const [active, setActive] = useState(true)
const cartNumber = useContext(CartContext)

  return (
    <div className='flex justify-center items-center sm:w-screen text-white border-b-neutral-500 pb-3 border-b-2 sm:justify-between'>
         <div className='mr-auto ml-7 sm:hidden'>
          <Link to = "/cart">
            <Badge badgeContent={cartNumber.cart.length} color="primary">
              <AiFillShopping className='text-2xl' color="action" />
            </Badge>
            </Link>
            </div>
        <div>
            <h1 className="text-4xl sm:text-4xl ">GEAR BUBBLE</h1>
        </div>
        <button onClick = {() => setActive(prev => !prev)} className="hidden sm:block sm:fixed sm:right-6 w-10 h-10"><FaBars/></button>
        <ul className={`flex gap-4 items-center mr-7 ml-auto sm:flex-col sm:h-screen sm:w-full sm:gap-12  ${active ? 'sm:-translate-x-full' : 'translate-x-0'}  sm:items-center sm:top-0 sm:right-0 sm:text-white sm:bg-black  sm:fixed sm:justify-center `}>
            <button className='hidden sm:block' onClick = {() => setActive(prev => !prev)}> <FaTimes/></button>
            <Link to = "/products"> 
            <li>OUR SHOP </li>
            </Link>
            <Link to = "/signUp">
            <li className="hover:border-b-2  ">REGISTER</li>
            </Link>
            <Link to= "/login"> <li className=" list ">SIGN IN</li></Link>
        </ul>




    </div>
  )
}

export default Navbar