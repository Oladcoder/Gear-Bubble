import React from 'react'
import Product from './Product'

const populardata = [
  {
    'id': "1",
    "name": "balck Shirt",
    "category": "men",
    "image": "../../images/items/black shirt.png",
    "price": "N3,000",
    "description": "A stylish piece of clothing you wont regret buying"
},
{
    'id': "2",
    "name": "Addidas Shoes",
    "category": "men",
    "image": "../../images/items/Adidas Shoes.png",
    "price": "N3,000",
    "description": "A stylish piece of clothing you wont regret buying"
},

{
    'id': "3",
    "name": "Fine Ankara dress",
    "category": "native",
    "image": "../../images/items/Ankara dress 1.png",
    "price": "N3,000",
    "description": "A stylish piece of clothing you wont regret buying"
}
]
const Popular = () => {
  return (
    <div className="mt-8 bg-home">
        <div className="mb-5">
        <h1 className="text-6xl text-white border-white border-b-2 w-2/3"> MOST POPULAR</h1>
        </div>
        <div className='px-10 py-4 h-5h flex gap-7 flex-wrap items-center justify-center'>
        {populardata.map(item => <Product item = {item}/>)}
        </div>



    </div>
  )
}

export default Popular