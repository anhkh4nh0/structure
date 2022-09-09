import React, { useEffect } from 'react'
import './searchBar.sass'



const searchBar = () => {

  // const callAPI=()=>{
  //   var requestOptions = {
  //     method: 'GET',
  //     redirect: 'follow'
  //   };
  //   fetch("http://113.176.99.57:31608/docs/api-docs.json", requestOptions)
  //     .then(response => response.json())
  //     .then(result => console.log(result))
  //     .catch(error => console.log('error', error));
  // }

  // useEffect(() => {
  //   callAPI()

  //   return () => {

  //   }
  // }, [])


  return (
    <>
      <div className="carps">
        <span>Home</span>
        <img src="../img/Vector1.svg" alt="" />
        <span>Cars</span>
      </div>
      <div className="search">
        <div className="searchBar1">
            <input type="text"  placeholder='Search'/>
        </div>
      </div>
      {/* <div className="searchBar">
        <div className="content">
          <div className="line"><p></p></div>
          <div className="roundTip">
            <span>Round Tip</span>
            <span>
              <img src="../img/Rectangle.svg" alt="" />
            </span>
          </div>
          <div className="location">
            <div className="Rectangle">
              <p>Pick Up From</p>
              <p>Please Enter</p>
            </div>
            <div className="arrow2">
              <img src="../img/Vector2.png" alt="" />
            </div>
          </div>

          <div className="Rectangle1">
            <p>Pick Up To</p>
            <p className='lastP'>Please Choose</p>
          </div>
          <div className="Rectangle2">
            <p>Check In</p>
            <p className='lastP'>Please Enter</p>
            <div className="arrow3">
              <img src="../img/Vector2.png" alt="" />
            </div>
          </div>
          <div className="Rectangle3">
            <p>Check Out</p>
            <p className='lastP'>Please Enter</p>
            <div className="arrow3">
              <img src="../img/Vector2.png" alt="" />
            </div>
          </div>
          <div className="button">
            <button className='bnt'>Search</button>
          </div>

        </div>
      </div> */}
    </>
  )
}

export default searchBar