import React from 'react'
import {useContext, useState} from 'react'
import { CartContext } from '../components/Context'
import {FaTrashAlt} from 'react-icons/fa'
import CartItem from '../components/CartItem'
import { AiOutlineShopping } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { BsArrowLeft } from 'react-icons/bs'


const Cart = () => {
    const cartContext = useContext(CartContext)
    const totalArray = cartContext.cart.map(item => {
      return item.total
    })
    const total = totalArray.reduce((tot, currentNumber) => {
      return tot + currentNumber
    })
    console.log(total)

    const [stateTotal, setStateTotal] = useState(total)

    const updateTotal = () => {
      setStateTotal(total)
      console.log('working')
    }

  return (
    cartContext.cart.length === 0 ?
    
    <div className='flex flex-col justify-center items-center h-screen bg-rest'>
      <AiOutlineShopping className='text-9xl p-2 rounded-full bg-white shadow-lg'/>
      <p className='text-2xl my-10'>You currently have no items in your cart, click the button below to start shopping</p>
      <Link to= "/products"><button className="bg-blue-600 text-white text-2xl p-4 rounded-xl">Start Shopping</button></Link>
      
    </div>

     :
        <div className="px-10 flex min-h-screen items-center bg-home flex-col">
          <Link to = "/products">
          <button className="bg-red-500 text-white absolute top-10 left-2 flex justify-center items-center w-8 h-7 text-xl"><BsArrowLeft/></button>
          </Link>
          <div className="justify-around items-center flex w-full px-10 text-white ">
            <h1 className="text-3xl">Cart</h1>
            <button onClick={() => cartContext.clearCart()} className='text-xl hover:text-red-700'><FaTrashAlt /></button>
          </div>
          <div className="w-full flex justify-center items-center flex-col">
            {cartContext.cart.map(item => {
              return <CartItem item={item} total ={updateTotal} />
            })}
          </div>

          <div className="flex justify-center items-center border-t-2 w-2/3 mt-20 mx-80"> 
            <h1 className="mr-auto text-white text-2xl">Total</h1>
            <h1 className="text-3xl text-white" >{stateTotal}</h1>
          </div>
          <button className="bg-black text-white w-60 rounded-sm">CheckOut</button>



        </div>
  )
}

export default Cart