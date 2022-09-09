import React, { useEffect, useState } from 'react'
import './List.sass'
import axios from 'axios'

const ListCar = () => {
    // const [callAPI, setCallAPI] = useState([])
    // const callApi = () => {
    //     var axios = require('axios');
    //     var config = {
    //         method: 'post',
    //         url: 'http://113.176.99.57:31608/api/cars/list',
    //         headers: {}
    //     };
    //     axios(config)
    //         .then(function (response) {
    //             console.log(response);
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });
    // }
    // useEffect(() => {
    //     callApi()
    // }, [])
    return (
        <>
            <aside>
                <div className="filterGroup">
                    <div className="filter">
                        <h3>Filter By</h3>
                        <p>Best Brands</p>
                        <input type="checkbox" name="Audi" id="Audi" />
                        <label htmlFor="">Audi</label>
                        <br></br>
                        <input type="checkbox" name="BMW" id="BMW" />
                        <label htmlFor="">BMW</label>
                        <br></br>
                        <input type="checkbox" name="Acura" id="Acura" />
                        <label htmlFor="">Acura</label>
                        <br></br>

                        <input type="checkbox" name="Honda" id="Honda" />
                        <label htmlFor="">Honda</label>
                        <br></br>

                        <input type="checkbox" name="Jeep" id="Jeep" />
                        <label htmlFor="">Jeep</label>
                        <br></br>

                        <input type="checkbox" name="Mercury" id="Mercury" />
                        <label htmlFor="">Mercury</label>
                        <br></br>

                        <input type="checkbox" name="Other" id="Other" />
                        <label htmlFor="">Other</label>
                    </div>
                    <div className="capacity">
                        <p>Capacity</p>
                        <input type="checkbox" name="Audi" id="Audi" />
                        <label htmlFor="">2-5 passengers</label>
                        <br></br>
                        <input type="checkbox" name="Audi" id="Audi" />
                        <label htmlFor="">6 or more passengers 12</label>
                    </div>
                    <div className="priceRanger">
                        <p>Price Rang</p>
                        <form action="">
                            <input type="range" id="vol" name="vol" min="0" max="100" />
                        </form>
                        <p>max.$180.00</p>
                    </div>
                    <div className="carSpeces">
                        <p>Car Specs</p>
                        <input type="checkbox" name="Audi" id="Audi" />
                        <label htmlFor="">Air Conditioning</label>
                        <br></br><input type="checkbox" name="Audi" id="Audi" />
                        <label htmlFor="">4+ doors</label>

                    </div>
                    <div className="mileage">
                        <p>Mileage/Kilometres</p>
                        <input type="checkbox" name="Audi" id="Audi" />
                        <label htmlFor="">Limited</label>
                        <br></br>
                        <input type="checkbox" name="Audi" id="Audi" />
                        <label htmlFor="">Unlimited</label>
                    </div>
                </div>
            </aside>
        </>
    )
}

export default ListCar