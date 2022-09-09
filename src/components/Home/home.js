import React from 'react'
import Car from '../CarFuture/Car'
import ListCar from '../Filter/ListCar'
import Footer from '../footer/Footer'
import HotCar from '../HotCar/hotCar'
import SearchBar from '../SearchBar/searchBar'
import './home.sass'

const home = () => {
  return (
    <>
      <div className="container">
        <SearchBar />
        {/* <aside><ListCar /></aside> */}
        <ListCar />
        <Car />
        <HotCar />
        <Footer />
      </div>
    </>
  )
}

export default home