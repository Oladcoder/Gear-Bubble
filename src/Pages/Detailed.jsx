import React, {useContext} from 'react'
import { useParams } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
import { BsCartFill } from 'react-icons/bs'
import { Badge } from '@mui/material'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Product from '../components/Product'
import { CartContext } from '../components/Context'
import{Link} from 'react-router-dom'

const Detailed = ({ items }) => {
  const { productId } = useParams()
  const thisProduct = items.find(item => item.id === productId)
  const recommendedList = items.filter(item => item.category === thisProduct.category)

  const cartContext = useContext(CartContext)
  console.log(cartContext.cart)

  
  
  
  return (
    <div className="bg-home">
      <div className='h-screen'>
        <div className="flex justify-between items-center px-10 pt-3 text-white border-b-2 border-white">
        <Link to="/products">
        <button className="bg-red-600 text-white text-xl flex justify-center items-center w-8 h-6"><FaArrowLeft/></button>
        </Link>
        <h1 className='text-3xl'>Gear Bubble</h1>
        <Link to = "/cart">
            <Badge badgeContent={cartContext.cart.length} color="primary">
            <BsCartFill color="action" />
            </Badge>
            </Link>
            </div>
        {/* <Navbar /> */}

        <div className="flex flex-row h-full justify-center items-center sm:flex-col mx-10 sm:mx-0 pt-12 gap-4 ">
          <div className='w-1/2 h-8h sm:w-full sm:h-6h flex justify-center items-center bg-rest'>
            <img className="h-full w-auto" src={thisProduct.image} alt="" />


          </div>

          <div className='text flex flex-col justify-center items-start text-white xsm:w-fit'>
            <div className="flex flex-col sm:flex-row sm:gap-10 gap-7 justify-center items-start">
              <h1 className="text-3xl">{thisProduct.name}</h1>
              <h1 className='text-3xl font-bold'>N3,000</h1>
            </div>
            <p className="w-72 text-sm pt-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem commodi recusandae voluptate explicab</p>
            
            <div className="flex justify-center w-full"><button onClick={() => cartContext.addToCart(thisProduct)} className="bg-rest text-black w-64 h-10 flex my-14 justify-center items-center gap-10"> Add To Cart <BsCartFill /> </button>
            </div>


          </div>

        </div>




      </div>

<div className="bg-rest flex flex-col xsm:mt-12 ">
  <h1 className="text-6xl text-pritext border-pritext border-b-2 w-2/3"> RELATED PRODUCTS </h1>
  <div className="gap-8 flex justify-center items-center">
  {recommendedList.slice(0, 4).map(item => <Product item ={item}/>)}
  </div>
</div>

      <Footer />

    </div>
  )
}

export default Detailed