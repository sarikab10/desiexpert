// home.js

import React, { useState } from 'react';
import './style.css';
import './css/animate.css';
import 'animate.css';
import { Helmet } from 'react-helmet';
import logoIcon from './images/logo-icon.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faBars, faSignInAlt, faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faGooglePlus, faPinterest } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
//import serverImage from './dummy/agreement-after-business-meeting.jpg';
import aImage from './dummy/1.jpg';
import bImage from './dummy/2.jpg';
import cImage from './dummy/3.jpg';
import CarouselTag from './CarouselTag';
import { Fade, Slide } from 'react-reveal';

const Home2 = () => {

    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    


    return (
        <>
            <Helmet>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1" />
                <title>Desixperts</title>
                {/* Loading third party fonts */}
                <link href="http://fonts.googleapis.com/css?family=Roboto+Slab:300,400,700" rel="stylesheet" type="text/css" />
                <link href="fonts/font-awesome.min.css" rel="stylesheet" type="text/css" />
                {/* Loading main css file */}
                <link rel="stylesheet" href="css/animate.css" />
                <link rel="stylesheet" href="style.css" />
            </Helmet>
            {/* Conditional IE support */}
            {typeof window !== 'undefined' && window.document.documentMode && window.document.documentMode < 9 ? (
                <div>
                    <script src="js/ie-support/html5.js"></script>
                    <script src="js/ie-support/respond.js"></script>
                </div>
            ) : null}
            <Fade top>
                <div id="site-content">
                    <header className="site-header">
                        <div className="top-header">
                            <div className="container" style={{marginRight:'10px'}}>
                                <a href="tel:80049123441">Call Us: (800) 49123441</a>
                                <nav className="member-navigation pull-right" style={{ display: 'inline' }}>
                                    <a href="/">
                                        <FontAwesomeIcon icon={faUser} /> Register
                                    </a>
                                    <a href="/">
                                        <FontAwesomeIcon icon={faLock} /> Login
                                    </a>
                                </nav>
                            </div>
                        </div>

                        <div className="bottom-header">
                            <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between',marginRight:'10px' }}>
                                <Link to="/" className="branding pull-left">
                                    <img src={logoIcon} height={40} alt="Site title" className="logo-icon" />
                                    <h1 className="site-title">Desi<span style={{ color: 'black' }}>X</span><span>perts</span></h1>
                                    <h2 className="site-description" style={{fontSize:'8px'}}>By the experts for the experts</h2>
                                </Link>
                                <nav className="main-navigation pull-right">
                                    <button type="button" className="menu-toggle" onClick={toggleMenu}>
                                        <FontAwesomeIcon icon={faBars} />
                                    </button>
                                    <ul className={`menu ${isMenuOpen ? 'open' : ''}`}>
                                        <li className="menu-item"><Link to="/news">News</Link></li>
                                        <li className="menu-item"><Link to="/about-us">About Us</Link></li>
                                        <li className="menu-item"><Link to="/services">Services</Link></li>
                                        <li className="menu-item"><Link to="/contact">Contact</Link></li>
                                        <li className="menu-item" style={{marginLeft:'200px'}}>
                                            <div className="login-button-container">
                                                <div className="login-button-bg"></div>
                                                <button className="login-button"><FontAwesomeIcon icon={faSignInAlt} style={{ marginRight: '5px' }} />Login</button>
                                            </div>
                                        </li>
                                        <li className="menu-item">
                                            <div className="login-button-container" style={{marginLeft:'-10px'}}>
                                                <div className="login-button-bg"></div>
                                                <button className="login-button" href='/demoform'><FontAwesomeIcon icon={faCartArrowDown} style={{ marginRight: '5px' }} />Book a Demo</button>
                                            </div>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </header>
                </div>
            </Fade>
            <CarouselTag></CarouselTag>
            <div id="site-content">
                <main className="content">


                    <div className="fullwidth-block feature-section">
                        <div className="container">
                            <div className="row">
                                <Fade left>
                                    <div className="col-md-4">
                                        <div className="feature wow fadeInUp">
                                            <div className="feature-title">
                                                <i className="icon-customer-service"></i>
                                                <h2 className="title">Customer Services</h2>
                                                <small className="subtitle">Nulla eros odio dolor</small>
                                            </div>
                                            <div className="feature-summary">
                                                <p>Chocolate caramels unerdwear.com lemon drops. Powder chupa chups pastry macaroon wafer chocolate cake sweet roll croissant jelly</p>
                                            </div>
                                            <a href="/" className="button">More info</a>
                                        </div>
                                    </div>
                                </Fade>
                                <div className="col-md-4">
                                    <div className="feature wow fadeInUp" data-wow-delay=".2s">
                                        <div className="feature-title">
                                            <i className="icon-server-lock"></i>
                                            <h2 className="title">Customer Services</h2>
                                            <small className="subtitle">Nulla eros odio dolor</small>
                                        </div>
                                        <div className="feature-summary">
                                            <p>Chocolate caramels unerdwear.com lemon drops. Powder chupa chups pastry macaroon wafer chocolate cake sweet roll croissant jelly</p>
                                        </div>
                                        <a href="/" className="button">More info</a>
                                    </div>
                                </div>
                                <Fade right>
                                    <div className="col-md-4">
                                        <div className="feature wow fadeInUp" data-wow-delay=".4s">
                                            <div className="feature-title">
                                                <i className="icon-bar-chart-up"></i>
                                                <h2 className="title">Customer Services</h2>
                                                <small className="subtitle">Nulla eros odio dolor</small>
                                            </div>
                                            <div className="feature-summary">
                                                <p>Chocolate caramels unerdwear.com lemon drops. Powder chupa chups pastry macaroon wafer chocolate cake sweet roll croissant jelly</p>
                                            </div>
                                            <a href="/" className="button">More info</a>
                                        </div>
                                    </div>
                                </Fade>
                            </div>
                        </div>
                    </div>

                    <div className="fullwidth-block pricing-section">
                        <div className="container">
                            <div className="row">
                                <Slide left duration={2000}>
                                    <div className="col-md-3 col-xs-6 col-us">
                                        <div className="pricing-table wow fadeInLeft" data-wow-delay=".2s">
                                            <div className="pricing-title">
                                                <h2 className="pricing-type">Basic</h2>
                                                <small>For small bussiness</small>
                                            </div>
                                            <div className="price-tag">
                                                <strong>$9.99</strong>
                                                <small>/Per month</small>
                                            </div>
                                            <p className="pricing-desc">Curabitur facilisis consectetur leo in venenatis mauris nisl</p>
                                            <ul className="list-fa">
                                                <li><i className="fa fa-check"></i> Quad core</li>
                                                <li><i className="fa fa-check"></i> 50 GB ram</li>
                                                <li><i className="fa fa-check"></i> 50 GB disc space</li>
                                                <li><i className="fa fa-check"></i> 10 email accounts</li>
                                                <li><i className="fa fa-check"></i> Support 24/h</li>
                                                <li><i className="fa fa-check"></i> Admin panel</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-xs-6 col-us">
                                        <div className="pricing-table wow fadeInLeft">
                                            <div className="pricing-title">
                                                <h2 className="pricing-type">Standard</h2>
                                                <small>For medium bussiness</small>
                                            </div>
                                            <div className="price-tag">
                                                <strong>$59.99</strong>
                                                <small>/Per month</small>
                                            </div>
                                            <p className="pricing-desc">Etiam interdum nulla eros odio scelerisque magna</p>
                                            <ul className="list-fa">
                                                <li><i className="fa fa-check"></i> Quad core</li>
                                                <li><i className="fa fa-check"></i> 50 GB ram</li>
                                                <li><i className="fa fa-check"></i> 100 GB disc space</li>
                                                <li><i className="fa fa-check"></i> 50 email accounts</li>
                                                <li><i className="fa fa-check"></i> Support 24/h</li>
                                                <li><i className="fa fa-check"></i> Admin panel</li>
                                            </ul>
                                        </div>
                                    </div>
                                </Slide>
                                <Slide right duration={2000}>
                                    <div className="col-md-3 col-xs-6 col-us">
                                        <div className="pricing-table wow fadeInRight">
                                            <div className="pricing-title">
                                                <h2 className="pricing-type">Advanced</h2>
                                                <small>For large bussiness</small>
                                            </div>
                                            <div className="price-tag">
                                                <strong>$99.99</strong>
                                                <small>/Per month</small>
                                            </div>
                                            <p className="pricing-desc">Curabitur facilisis consectetur leo in venenatis mauris nisl</p>
                                            <ul className="list-fa">
                                                <li><i className="fa fa-check"></i> Quad core</li>
                                                <li><i className="fa fa-check"></i> 50 GB ram</li>
                                                <li><i className="fa fa-check"></i> 250 GB disc space</li>
                                                <li><i className="fa fa-check"></i> 100 email accounts</li>
                                                <li><i className="fa fa-check"></i> Support 24/h</li>
                                                <li><i className="fa fa-check"></i> Admin panel</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-xs-6 col-us">
                                        <div className="pricing-table wow fadeInRight" data-wow-delay=".2s">
                                            <div className="pricing-title">
                                                <h2 className="pricing-type">Professional</h2>
                                                <small>For corporate bussiness</small>
                                            </div>
                                            <div className="price-tag">
                                                <strong>$299.99</strong>
                                                <small>/Per month</small>
                                            </div>
                                            <p className="pricing-desc">Curabitur facilisis consectetur leo in venenatis mauris nisl</p>
                                            <ul className="list-fa">
                                                <li><i className="fa fa-check"></i> Quad core</li>
                                                <li><i className="fa fa-check"></i> 50 GB ram</li>
                                                <li><i className="fa fa-check"></i> 500 GB disc space</li>
                                                <li><i className="fa fa-check"></i> 100 email accounts</li>
                                                <li><i className="fa fa-check"></i> Support 24/h</li>
                                                <li><i className="fa fa-check"></i> Admin panel</li>
                                            </ul>
                                        </div>
                                    </div>
                                </Slide>
                            </div>
                        </div>
                    </div>

                    <Slide left>
                        <div className="fullwidth-block about-section">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6 wow fadeInUp">
                                        <h2>Mock Inteviwes By Experts</h2>
                                        <p className="leading">Pallentesque nibh pharetra urna elementum viverra elit duis faucibus augue tempor eleifend</p>
                                        <p>Tiramisu cotton candy caramels cake biscuit jelly-o chupa chups chocolate. Tootsie roll lollipop topping. Macaroon ice cream cookie powder dessert gingerbread oat cake. Pudding cake powder icing tart sugar plum sesame snaps.</p>
                                        <p>Fruitcake tootsie roll candy. Sweet roll toffee donut. Chocolate cake gummi bears fruitcake cookie biscuit cotton candy marshmallow.</p>
                                        <p>Liquorice macaroon marshmallow macaroon cheesecake sweet soufflé. Cheesecake cookie dessert jelly-o. Fruitcake tart topping.</p>
                                    </div>
                                    <div className="col-md-6">
                                        <img src={aImage} alt="Site title" className="logo-icon" style={{ maxWidth: '100%', height: 'auto' }} />                                </div>
                                </div>
                            </div>
                        </div>
                    </Slide>
                    <Slide right>
                        <div className="fullwidth-block about-section">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6">
                                        <img src={bImage} alt="Site title" className="logo-icon" style={{ maxWidth: '100%', height: 'auto' }} />                                </div>
                                    <div className="col-md-6">
                                        <h2 className="wow fadeInRight">Career Direction By Experts</h2>
                                        <hr className="separator" />
                                        <ul className="feature-list">
                                            <li className="wow fadeInRight">
                                                <i className="icon-money-globe"></i>
                                                <h3>Aliquam nibh quam iaculis tempis</h3>
                                                <p>Candy powder. Carrot cake ice cream toffee bonbon. Donut marzipan chupa chups cookie tart dessert fruitcake brownie. </p>
                                            </li>
                                            <li className="wow fadeInRight">
                                                <i className="icon-server-lock"></i>
                                                <h3>Aliquam nibh quam iaculis tempis</h3>
                                                <p>Candy powder. Carrot cake ice cream toffee bonbon. Donut marzipan chupa chups cookie tart dessert fruitcake brownie. </p>
                                            </li>
                                            <li className="wow fadeInRight">
                                                <i className="icon-person-time"></i>
                                                <h3>Aliquam nibh quam iaculis tempis</h3>
                                                <p>Candy powder. Carrot cake ice cream toffee bonbon. Donut marzipan chupa chups cookie tart dessert fruitcake brownie. </p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slide>
                    <Slide left>
                        <div className="fullwidth-block about-section">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6 wow fadeInUp">
                                        <h2>Salary Negotiation and HR Round Guidance</h2>
                                        <p className="leading">Pallentesque nibh pharetra urna elementum viverra elit duis faucibus augue tempor eleifend</p>
                                        <p>Tiramisu cotton candy caramels cake biscuit jelly-o chupa chups chocolate. Tootsie roll lollipop topping. Macaroon ice cream cookie powder dessert gingerbread oat cake. Pudding cake powder icing tart sugar plum sesame snaps.</p>
                                        <p>Fruitcake tootsie roll candy. Sweet roll toffee donut. Chocolate cake gummi bears fruitcake cookie biscuit cotton candy marshmallow.</p>
                                        <p>Liquorice macaroon marshmallow macaroon cheesecake sweet soufflé. Cheesecake cookie dessert jelly-o. Fruitcake tart topping.</p>
                                    </div>
                                    <div className="col-md-6">
                                        <img src={cImage} alt="Site title" className="logo-icon" style={{ maxWidth: '100%', height: 'auto' }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slide>
                </main>

                <Fade bottom>
                    <footer className="site-footer wow fadeInUp">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className=" branding">
                                        <img src={logoIcon} height={50} alt="Site title" className="logo-icon" />
                                        <h1 className="site-title"><a href="/">DESIXPERTS</a></h1>
                                        <h2 className="site-description"> BY THE EXPERTS FOR THE EXPERTS</h2>
                                    </div>
                                    <p className="copy">Copyright 2024 DESIXPERTS. All rights reserved</p>
                                </div>
                                <div className="col-md-6 align-right">
                                    <nav className="footer-navigation">
                                        <a href="/">News</a>
                                        <a href="/">About us</a>
                                        <a href="/">Services</a>
                                        <a href="/">Contact</a>
                                    </nav>
                                    <div className="social-links">
                                        <a href="/" className="facebook">
                                            <FontAwesomeIcon icon={faFacebook} className="social-icon zoom" />
                                        </a>
                                        <a href="/" className="twitter">
                                            <FontAwesomeIcon icon={faTwitter} className="social-icon zoom" />
                                        </a>
                                        <a href="/" className="google-plus">
                                            <FontAwesomeIcon icon={faGooglePlus} className="social-icon zoom" />
                                        </a>
                                        <a href="/" className="pinterest">
                                            <FontAwesomeIcon icon={faPinterest} className="social-icon zoom" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>
                </Fade>
            </div>
        </>
    );
};

export default Home2;
