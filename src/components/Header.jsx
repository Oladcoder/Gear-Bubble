import React from 'react'
import {FaArrowRight}  from 'react-icons/fa'
import ImageSwiper from './ImageSwiper'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div className="flex sm:flex-col h-9p">
      <div className="w-1/2 mt-28 sm:mt-2 h-7h flex flex-col pl-6 items-start">
        <h1 className="text-6xl sm:text-5xl text-white">
          STYLISH CLOTHES FOR EVERYONE, WHATEVER FITS YOUR STYLE
        </h1>
        <p className='w-96 sm:w-48 text-left mt-5 font-semibold'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus molestiae harum ipsam adipisci voluptatibus facere necessitatibus porro repellat dolor aperiam cumque, voluptatem nostrum quasi praesentium unde laborum tenetur. Itaque, ad.</p>
        <Link to='/products'><button className='flex items-center gap-3 text-white border-black mt-10 border-2 border-solid border-spacing-5 shopButton p-3 rounded-3xl bg-transparent hover:bg-rest'>Start Shopping <FaArrowRight/> </button></Link>

      </div>

      <div className="flex sm:hidden  w-1/2 items-end">
        <div className="w-3/4 h-9p">
          <ImageSwiper/>
        </div>

      </div>


    </div>
  )
}

export default Header