import React from 'react'
import './footer.sass'

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="footer-1">
                    <div className="content-1">
                        <div className="logo-1">
                            <ul>
                                <li>
                                    <span>
                                        <img src="../img/subtract.png" alt="" />
                                    </span>
                                    <span>
                                        TripGuide
                                    </span>
                                </li>
                                <li>
                                    <p>This is the team that specializes in<br></br>
                                        making sure in the find it a<br></br>
                                        your interior looks cool</p>
                                </li>
                                <li></li>
                            </ul>
                        </div>
                        <div className="bussiness">
                        <p className="p-text">Services</p>
                            <ul>
                                <li>Travel Booking</li>
                                <li>Flight Booking</li>
                                <li>Car Booking</li>
                                <li>Fivestar Hotel</li>
                                <li>Traveling</li>
                            </ul>
                        </div>
                        <div className="support">
                        <p className="p-text">Support</p>
                            <ul>
                                <li>Account
                                </li>
                                <li>Legal</li>
                                <li>Contact</li>
                                <li>Terms & Condition</li>
                                <li>Privacy Policy</li>
                            </ul>
                        </div>
                        <div className="services">
                        <p className="p-text">Business</p>
                            <ul>
                                <li>Success</li>
                                <li>About Locato</li>
                                <li>Blog</li>
                                <li>Information</li>
                                <li>Travel Guide</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer