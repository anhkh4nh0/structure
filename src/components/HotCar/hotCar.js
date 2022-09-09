import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './hotcar.sass'

const HotCar = () => {

    const [callAPI, setCallAPI] = useState([])

    useEffect(() => {
        const fetchAPI = async () => {
            const response = await axios.get('http://113.176.99.57:31608/api/cars/trending')
                .then(response => setCallAPI(response.data.data.data))
            // setCallAPI(response.data.data);
        };
        fetchAPI();
    }, []);
    console.log(callAPI);
    return (
        <>
            <div className="groundCarList">
                {/* có thể tối ưu bằng cách gọi API Render ra Ảnh và các sp bằng Map */}
                {callAPI.map((item) => (
                    <>
                        <div className="carRender">
                            <div className="img">
                                <img src="../img/Image.png" alt="" />
                            </div>
                            <div className="carName">
                                <p>{item.name}</p>
                                <div className="special">
                                    <p>SPECIAL DEAL</p>
                                </div>
                            </div>
                            <p className='namer'>{item.engine}</p>
                            <div className="buttonr">
                                <div className="textr">
                                    <p>${item.price}</p>
                                    <p>per day</p>
                                </div>
                                <button className='btn'>Reserve deal</button>
                            </div>
                        </div>
                    </>
                ))}
                <div className="hot">
                    <p>HOT</p>
                </div>
                {/* <div className="carRender">
                    <div className="img">
                        <img src="../img/Image.png" alt="" />
                    </div>
                    <div className="carName">
                        <p>BMW i10 - 2021</p>
                        <div className="special">
                            <p>SPECIAL DEAL</p>
                        </div>
                    </div>
                    <p className='namer'>Tesla Model S</p>
                    <div className="buttonr">
                        <div className="textr">
                            <p>$124.0</p>
                            <p>per day</p>
                        </div>
                        <button className='btn'>Reserve deal</button>
                    </div>
                </div>
                <div className="carRender">
                    <div className="img">
                        <img src="../img/Image.png" alt="" />
                    </div>
                    <div className="carName">
                        <p>BMW i10 - 2021</p>
                        <div className="special">
                            <p>SPECIAL DEAL</p>
                        </div>
                    </div>
                    <p className='namer'>Tesla Model S</p>
                    <div className="buttonr">
                        <div className="textr">
                            <p>$124.0</p>
                            <p>per day</p>
                        </div>
                        <button className='btn'>Reserve deal</button>
                    </div>
                </div>
                <div className="carRender">
                    <div className="img">
                        <img src="../img/Image.png" alt="" />
                    </div>
                    <div className="carName">
                        <p>BMW i10 - 2021</p>
                        <div className="special">
                            <p>SPECIAL DEAL</p>
                        </div>
                    </div>
                    <p className='namer'>Tesla Model S</p>
                    <div className="buttonr">
                        <div className="textr">
                            <p>$124.0</p>
                            <p>per day</p>
                        </div>
                        <button className='btn'>Reserve deal</button>
                    </div>
                </div>
                <div className="carRender">
                    <div className="img">
                        <img src="../img/Image.png" alt="" />
                    </div>
                    <div className="carName">
                        <p>BMW i10 - 2021</p>
                        <div className="special">
                            <p>SPECIAL DEAL</p>
                        </div>
                    </div>
                    <p className='namer'>Tesla Model S</p>
                    <div className="buttonr">
                        <div className="textr">
                            <p>$124.0</p>
                            <p>per day</p>
                        </div>
                        <button className='btn'>Reserve deal</button>
                    </div>
                </div>
                <div className="carRender">
                    <div className="img">
                        <img src="../img/Image.png" alt="" />
                    </div>
                    <div className="carName">
                        <p>BMW i10 - 2021</p>
                        <div className="special">
                            <p>SPECIAL DEAL</p>
                        </div>
                    </div>
                    <p className='namer'>Tesla Model S</p>
                    <div className="buttonr">
                        <div className="textr">
                            <p>$124.0</p>
                            <p>per day</p>
                        </div>
                        <button className='btn'>Reserve deal</button>
                    </div>
                </div> */}
            </div>
            <div className="Pagination">
                <nav aria-label="Page navigation example">
                    <ul class="pagination">
                        <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item"><a class="page-link" href="#">Next</a></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default HotCar