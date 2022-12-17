import React from 'react'
import {Link} from 'react-router-dom'

const Collections = () => {
  return (
    <div className=" h-screen">
        <div>
            <h1 className="text-6xl text-pritext border-black border-b-2 w-2/3"> COLLECTIONS </h1>
        </div>
        <div className="flex justify-end mr-4">
        <Link to='/products'>
            <button className="bg-home p-2 text-white">See All &gt;&gt;&gt;</button>
            </Link>
        </div>

        <div className=" mt-10 px-24 flex justify-center gap-5 flex-wrap">
            <div className="container1 sm:w-full sm:h-56">
                    <img className="imagery" src="../../images/co3.jpg"/> 
                <div className="middle">
             <div className="textimg flex justify-center items-center flex-col gap-3"><h1 className='text-4xl text-white'>NATIVE WEARS</h1> <button className="text-white rounded-lg border-2 border-black">GO TO SHOP</button></div>
             </div>

            </div>

            <div className="container1 sm:w-full sm:h-56">
                    <img className="imagery" src="../../images/co2.jpg"/> 
                <div className="middle">
             <div className="textimg flex justify-center items-center flex-col gap-3"><h1 className='text-4xl text-white'> FOR WOMEN</h1> <button className="">GO TO SHOP</button></div>
             </div>

            </div>

            <div className="container1 sm:w-full sm:h-56">
                    <img className="imagery" src="../../images/co1.jpg"/> 
                <div className="middle">
             <div className="textimg flex justify-center items-center flex-col gap-3"><h1 className='text-4xl text-white'>MEN'S COLLECTION</h1> <button className="">GO TO SHOP</button></div>
             </div>

            </div>


        </div>
    </div>
  )
}

export default Collections