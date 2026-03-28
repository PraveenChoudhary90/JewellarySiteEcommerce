import React from 'react'
import Navbar from '../../components/global/Navbar'
import Hero from '../../components/ecom/Hero'
import PromoAndFeatures from '../../components/ecom/PromoAndFeatures'
import ProductGrid from '../../components/ecom/ProductGrid'

const Home = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <PromoAndFeatures />
    <ProductGrid />
    </>
  )
}

export default Home
