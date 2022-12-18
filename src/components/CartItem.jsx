import React, {useContext, useState} from 'react'
import { FaTrashAlt } from 'react-icons/fa'
import { CartContext } from './Context'



const CartItem = ({item, total}) => {
const cartContext = useContext(CartContext)
const [count, setCount] = useState(item.quantity)
  return (
    <div className="shadow-lg gap-2 xsm:w-96 xsm:mt-12 w-3/5 my-6 flex items-center bg-rest rounded-xl">
        <img className="h-40 w-40 rounded-xl" src={item.image}/>
        <div className="flex flex-col gap-3 justify-center ml-6">
            <h1 className="text-2xl">{item.name}</h1>
            <h1>{item.price}</h1>
            <h1 className="font-bold">N{(item.price * item.quantity).toString()}</h1>
        </div>
        <div className="flex flex-col gap-2 justify-center items-center ml-auto mr-4">
            <button onClick={() => 
                { cartContext.increaseCart(item)
                    setCount(item.quantity)
                    total()

                    }} className="shadow-lg bg-rest w-9  hover:bg-home hover:text-white rounded-md ">+</button>
            <div className="shadow-lg bg-rest w-9 h-10 border border-black border-opacity-20 flex items-center justify-center rounded-lg">{item.quantity}</div>
            <button  onClick={() => {
                setCount(item.quantity)
                cartContext.reduceCart(item)
                total()
            }} className="shadow-lg bg-rest w-9  hover:bg-home hover:text-white rounded-md ">-</button>
            <button onClick = {() => cartContext.removeItem(item)} className='text-red-700'><FaTrashAlt/></button>


        </div>
    </div>
  )
}

export default CartItem