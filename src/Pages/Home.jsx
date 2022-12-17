import React from 'react'
import Navbar from '../components/Navbar'
import '../App.css'
import Header from '../components/Header'
import Collections from '../components/Collections'
import Popular from '../components/Popular'
import Testimonials from '../components/Testimonials'
import About from '../components/About'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='home h-screen'>
        <Navbar/>
        <Header/>
        <div className="bg-rest h-fit">
        <Collections/>
        <Popular/>
        <About/>
        <Testimonials/>
        <Footer/>
        </div>






    </div>
  )
}

export default Home