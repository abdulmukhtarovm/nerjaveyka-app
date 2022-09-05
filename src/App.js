import React from 'react'
import AboutUs from './components/AboutUs'
import Benefits from './components/Benefits'
// import Footer from './components/Footer'
import Grades from './components/Grades'
import Header from './components/Header'
// import Navbar from './components/Navbar'
import Portfolio from './components/Portfolio'
import Products from './components/Products'

const App = () => {
  return (
    <>
        {/* <Navbar /> */}
        <Header />
      <div className='container'>
        <Products/>
        <AboutUs/>
        <Benefits/>
        <Grades/>
        <Portfolio/>
      </div>
        {/* <Footer/> */}

    </>
  )
}

export default App