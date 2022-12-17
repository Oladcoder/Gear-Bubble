import React, {useState} from 'react'
import { items } from './items'
import {BsHeart, BsHeartFill} from 'react-icons/bs'
import {Link} from "react-router-dom"


const Product = ({item}) => {
  const [isfavorite, setIsFavorite] = useState(false)
  const [data, setData] = useState(item)
  return (
   
    <div className="shadow-md relative w-56 h-82 bg-white rounded-xl">
       <Link to = {`/products/${item.id}`}>
        <img className="w-72 h-64 bg-purple-200 rounded-xl" src={item.image} alt={item.description} />
        </Link>
        <button onClick={() => setIsFavorite((prev) => !prev)} className="absolute top-4 left-2 w-16 hover:text-white font-black">{isfavorite ? <BsHeartFill/> :<BsHeart/>}</button>
        <div className ="flex w-full justify-between items-center mt-8 px-4">
          <h3 className="text-lg font-medium">{item.name} </h3>
          <h2 className="font-bold">{item.price}</h2>
        </div>

    </div>
   
  )
}

export default Product