import { Twitter } from '@material-ui/icons'
import React from 'react'
import {BsTwitter, BsLinkedin, BsFacebook, BsWhatsapp, BsInstagram} from 'react-icons/bs'

const Footer = () => {
  return (
    <div className="bg-home h-80 mt-10 flex justify-center items-center flex-col gap-4">
        <div className=" flex justify-center items-center sm:gap-12 gap-28">
        <ul className='text-white text-sm'>
            <li className="text-md mb-4 font-bold">Quick Links</li>
            <li className="py-1">Categories</li>
            <li className="py-1">Native Wears</li>
            <li className="py-1">For Men</li>
            <li className="py-1">For Women</li>
        </ul>

        <ul className='text-white text-sm'>
            <li className="text-md mb-4 font-bold">Social media</li>
            <li className='flex py-1 gap-2 items-center'>Instagram  <BsInstagram/> </li>
            <li className='flex py-1 gap-2 items-center'>Twitter <BsTwitter/> </li>
            <li className='flex py-1 gap-2 items-center'>Linkedin <BsLinkedin/></li>
            <li className='flex py-1 gap-2 items-center'>Facebook  <BsFacebook/></li>
        </ul>

        <ul className='text-white text-sm'>
            <li className="text-md mb-4 font-bold">Services</li>
            <li className="py-1">Men product </li>
            <li className="py-1">Twitter</li>
            <li className="py-1">For Men</li>
            <li className="py-1">For Women</li>
        </ul>
        </div>
        
        <h2 className="text-white text-3xl">AMAZEBALLS</h2>

        <h5 className="text-white mt-5">copyright &copy; 2022</h5>
    </div>
  )
}

export default Footer