import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Car.sass'

const Car = () => {

  const [callAPI, setCallAPI] = useState([])

  // const [loading, setLoading] = useState(true);
  // const [data, setData] = useState([])

  // useEffect(() => {
  //   const fetchData = async () =>{
  //     setLoading(true);
  //     try {
  //       const {data: response} = await axios.post('http://113.176.99.57:31608/api/cars/list');
  //       setCallAPI(response.data);
  //       console.log(callAPI.data);
  //     } catch (error) {
  //       console.error(error.message);
  //     }
  //     setLoading(false);
  //   }

  //   fetchData();
  // }, []);

  //   const callApi = () => {
  //     var axios = require('axios');
  //     var config = {
  //         method: 'post',
  //         url: 'http://113.176.99.57:31608/api/cars/list',
  //         headers: {}
  //     };
  //     axios(config)
  //         .then(function (response) {
  //           setCallAPI(response.data.data)
  //             console.log(callAPI);
  //         })
  //         .catch(function (error) {
  //             console.log(error);
  //         });
  // }

  useEffect(() => {
    const fetchAPI = async () => {
      const response = await axios.post(`http://113.176.99.57:31608/api/cars/list`)
        .then(response => setCallAPI(response.data.data.data))
      // setCallAPI(response);
    };
    fetchAPI();
  }, []);

  console.log(callAPI);
  // callAPI.map(e=>console.log(e.image_url))
  // useEffect(() => {
  //   callApi()
  // }, [])

  return (
    <div className="showCar">
      {/* {!callAPI && callAPI.map((item, index) => 
      <div className="picture">
      {item.data.name}
      <div className="text">
        <p>{item.size_name}</p>
      </div>
    </div>
    )} */}

      {callAPI.slice(0, 5).map((item) => (
        <div className="picture">
          <div className="logo-img">
            <img src="../img/Image.png" alt="" />
            <div className="text">
              <p>{item.size_name}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Car