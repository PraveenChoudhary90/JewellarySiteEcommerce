import React from 'react'
import Navbar from '../../components/global/Navbar'
import Hero from '../../components/ecom/Hero'
import PromoAndFeatures from '../../components/ecom/PromoAndFeatures'
import ProductGrid from '../../components/ecom/ProductGrid'
import Footer from '../../components/global/Footer'
import FullEcommerceMarquee from '../../Pages/Marquescroll'
import ShapeDetailPage from '../../Pages/ShapeDetails'
import JewelryGallery from '../../Pages/GallaryPage'
import JewelryPage from '../../Pages/JwellaryPage'
import ShopHistory from '../../Pages/Shophistory'
import JewelryReviewPage from '../../Pages/Reviews'
import JewelryNewsPage from '../../Pages/LatestNews'

const Home = () => {
  return (
    <>
    {/* <Navbar /> */}
    <Hero />
    <PromoAndFeatures />
    <ProductGrid />
    <FullEcommerceMarquee/>
    <JewelryGallery/>
    {/* <ShapeDetailPage/> */}
    {/* <JewelryPage/> */}
    <ShopHistory/>
    <JewelryReviewPage/>
    <JewelryNewsPage/>
    {/* <Footer/> */}
    </>
  )
}

export default Home
