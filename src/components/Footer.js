import React from 'react'
import { Link} from 'react-router-dom'

export default function Footer() {
    return (
        <>
            <div>

                <footer id="footer" >
                    <div className="footer-top">
                        <div className="container">
                            <div className="row">

                                <div className="col-lg-3 col-md-6 footer-info">
                                    <img src={require("./Images/alokknight_logo_white.png")} alt="Our Client" />
                                    <p>Website for multipurpose use.</p>
                                </div>

                                <div className="col-lg-3 col-md-6 footer-links">
                                    <h4>Useful Links</h4>
                                    <ul>
                                        <li><i className="fa fa-angle-right"></i> <Link to="#">Home</Link></li>
                                        <li><i className="fa fa-angle-right"></i> <Link to="#">About us</Link></li>
                                        <li><i className="fa fa-angle-right"></i> <Link to="#">Services</Link></li>
                                        <li><i className="fa fa-angle-right"></i> <Link to="#">Terms of service</Link></li>
                                        <li><i className="fa fa-angle-right"></i> <Link to="#">Privacy policy</Link></li>
                                    </ul>
                                </div>

                                <div className="col-lg-3 col-md-6 footer-links">
                                    <h4>Useful Links</h4>
                                    <ul>
                                        <li><i className="fa fa-angle-right"></i> <Link to="/">Home</Link></li>
                                        <li><i className="fa fa-angle-right"></i> <Link to="/about">About us</Link></li>
                                        <li><i className="fa fa-angle-right"></i> <Link to="#">Services</Link></li>
                                        <li><i className="fa fa-angle-right"></i> <Link to="#">Terms of service</Link></li>
                                        <li><i className="fa fa-angle-right"></i> <Link to="#">Privacy policy</Link></li>
                                    </ul>
                                </div>

                                <div className="col-lg-3 col-md-6 footer-contact">
                                    <h4>Contact Us</h4>
                                    <p>
                                        MMMUT <br />
                                        Gorakhpur<br />
                                        India<br />
                                        <strong>Phone:</strong> +91 789 786 7722<br />
                                        <strong>Email:</strong> alokpatel885@gmail.com<br />
                                    </p>

                                    <div className="social-links">
                                        <a href="#" className="twitter rotate360"><i className="fa fa-twitter"></i></a>
                                        <a href="#" className="facebook rotate360"><i className="fa fa-facebook"></i></a>
                                        <a href="#" className="instagram rotate360"><i className="fa fa-instagram"></i></a>
                                        <a href="#" className="google-plus rotate360"><i className="fa fa-google-plus"></i></a>
                                        <a href="#" className="linkedin rotate360"><i className="fa fa-linkedin"></i></a>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="row">
                            <a href="#" className="back-to-top col-1">
                                <i className="fa fa-angle-up" style={{"font-size":"48px",color:'black'}} >
                                </i>
                            </a>
                            <div className="col-10">
                                <div className="copyright">
                                    &copy; Copyright <strong>CODERPAPA</strong>. All Rights Reserved
                                </div>
                                <div className="credits">
                                    Made with 💖
                                </div>
                            </div>


                        </div>
                    </div>

                </footer>


            </div>
        </>
    )
}
