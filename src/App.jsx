import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './Pages/Home'
import Products from './Pages/Products'
import {items} from './components/items'
import {Routes, Route} from 'react-router-dom'
import Detailed from './Pages/Detailed'
import Cart from './Pages/Cart'
import {CartContext} from './components/Context'
import SignUp from './Pages/SignUp'
import Login from './Pages/Login'
import ForgotPassword from './Pages/ForgotPasword'

function App() {
  const [data, setData] = useState(items)
  const [cart, setCart] = useState([])
  const [wishlist, setWishlist] = useState([])

  const addToCart = (item) => {
    const check = cart.every(cartItem => {
      return cartItem.id !==  item.id
    })
    
    if (check) {
      const newItem = data.find(productItem => {
        return productItem.id === item.id
      })
      newItem.total = newItem.price
      console.log(newItem)
      const newCart = [...cart, newItem]
      setCart(newCart)
      alert('item added to cart')
    }
    else{
      alert('This product is already in cart')
    }
  }

  const increaseCart =  (item) => {
    cart.forEach(cartItem => {
      if(item.id === cartItem.id){
        item.quantity +=1
      }
    })

    cart.forEach(cartItem => {
      if(item.id === cartItem.id){
        item.total = item.price * item.quantity
      }
    })
    console.log(cart)
  }

  const reduceCart = (item) => {
    if(item.quantity > 1){
      cart.forEach(cartItem => {
        if(item.id === cartItem.id){
          item.quantity -= 1
        }
      })
    }

    cart.forEach(cartItem => {
      if(item.id === cartItem.id){
        item.total = item.price * item.quantity
      }
    })
    console.log(cart)
  }

  const clearCart = () => {
    confirm('Are you sure you want to clear all the items in your cart')
    if(confirm){
      setCart([])
    }
  }

  const removeItem = (item) => {
   const removedItem =  cart.filter(cartItem => {
    return cartItem.id !== item.id 
   })
   setCart(removedItem)
  }

  // const addToWishList = (item) => {
  //   const item = data.find(dataItem => {
  //     item.id === dataItem.id
  //   })
  //   const newWishList =[...wishlist, item]
  //   setWishlist(newWishList)
    
  // }

  return (
    <CartContext.Provider value = {{cart, addToCart, increaseCart, reduceCart, clearCart, removeItem}}>
    <div className="App italic font-grotesk">
      <Routes>
        <Route path = "/" element = {<Home />}/>
        <Route path = "/products" element = {<Products items = {data}/>}/>
        <Route path = "/products/:productId" element = {<Detailed items = {data}/>}/>
        <Route path = "/cart" element= {<Cart/>}/>
        <Route path = "/signUp" element = {<SignUp/>}/>
        <Route path = "/login" element = {<Login/>}/>
        <Route path= "/resetpassword" element= {<ForgotPassword/>}/>
      </Routes> 
    </div>
    </CartContext.Provider>
  )
}

export default App
