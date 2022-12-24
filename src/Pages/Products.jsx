import React, {useState, useEffect, useContext} from 'react'
import Navbar from '../components/Navbar'
import {BsArrowLeft} from 'react-icons/bs'
import { Badge } from '@mui/material'
import {BsCartFill} from 'react-icons/bs'
import Product from '../components/Product'
import Footer from '../components/Footer'
import {Link} from 'react-router-dom'
import { CartContext } from '../components/Context'

const allCategories = ["men", "Women", "all", "native"]

const Products = ({items}) => {
  const [text, setText] = useState('')
  const [selected, setSelected] = useState('all')
  const [filteredArray, setFilteredArray] = useState([])

  const handleTextChange = (e) => {
    console.log(e.target.value)
    setText(e.target.value)

  }

  const handleSelect = (e) => {
    console.log(e.target.value)
    setSelected(e.target.value)

  }
  const filtererFunction =  () => {
    const filterer = items.filter(item => {
      if(text.length < 1 && selected === "all"){
         return  allCategories.includes(item.category) 
     }
     else if(text.length > 1 ){
         return allCategories.includes(item.category) && 
         item.name.includes(text) 
      }
         return item.category === selected
     })

     setFilteredArray(filterer)
  }

  useEffect(()=> {
    filtererFunction()
}, [selected, text])

 const cartnumber = useContext(CartContext)


  return (
    <div className="h-fit bg-rest min-h-screen  pt-3">
        <div className="flex justify-between px-12 items-center w-full"> 
        <Link to='/'> 
            <button className="flex items-center gap-2 p-2 shadow-sm text-white bg-home"> <BsArrowLeft/> Back</button>
            </Link>
            <Link to= "/cart">
            <Badge badgeContent={cartnumber.cart.length} color="primary">
              <BsCartFill color="action" />
            </Badge>
            </Link>
        </div>
        <div className="flex mt-5 justify-between px-10 items-center">
          <input onChange={handleTextChange} placeholder="search for a product ..." className="bg-home text-white focus:border-none h-10 rounded-lg w-2/4"/>

          <select onChange={handleSelect} value={selected} className="bg-home shadow-lg h-9 text-white rounded-md text-sm">
            <option defaultValue={true} value = "all">All</option>
            <option value = "men">For Men</option>
            <option value = "Women">For Women</option>
            <option value = "native">Traditional Wears</option>
          </select>
        </div>
        
        <div className="flex flex-wrap items-center gap-7 justify-center mt-8">
        {filteredArray.map((item) => <Product item = {item}/>)}
    


        </div>
        <Footer/>
       
    
    
    </div>
  )
}

export default Products