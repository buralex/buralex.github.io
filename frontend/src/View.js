import React, { Component } from 'react';


export default class View extends Component {
    render() {
        return (
            <div className="View">

                <div className="navbar-wrap">
                    <nav className="navbar navbar-default ">
                        <div className="main">
                            <div className="navbar-header ">
                                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                                <a id ="sss" className="logo-container" href="/"> </a>
                            </div>
                            <div className="row">
                                <div className="collapse navbar-collapse" id="myNavbar">
                                    <ul id="main-nav" className="nav navbar-nav navbar-right ">
                                        <li><a href="#about">ABOUT</a></li>
                                        <li><a href="#projects">PROJECTS</a></li>
                                        <li><a href="#contact">CONTACT</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>


                <div className="container-fluid bg-1 text-center ">
                    <div className="row ">
                        <div className="bg-photo-wrap ">
                            <div className="mask"></div>
                            <div className="row parent">

                                <div className="wave ">
                                    <div className="main ">
                                        <div className="upper col-xs-5 text-right">
                                            <span>A</span><span>L</span><span>E</span><span>X</span><span>A</span><span>N</span><span>D</span><span>R</span>
                                        </div>
                                        <div className="under col-xs-7 ">
                                            <span>B</span><span>U</span><span>R</span><span>L</span><span>A</span><span>C</span><span>H</span><span>E</span><span>N</span><span>K</span><span>O</span>
                                        </div>
                                        <div className="fly1 col-xs-12">web developer</div>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>


                <div className="container-fluid stage">
                    <div className="row">
                        <div className="box-wrap">
                            <div className="box">
                                <div className="side side1">
                                    React
                                </div>
                                <div className="side side2">HTML</div>
                                <div className="side side3">PHP</div>
                                <div className="side side4">SCSS</div>
                                <div className="side side5">JS</div>
                                <div className="side side6">MySQL</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="line-bot"></div>



                <div className="about-wrap">
                    <div className="mask-dark"></div>
                    <div id="about" className="container-fluid bg-2 text-center ">
                        <div className="row">

                            <div className="main cont-view">

                                <div className="col-xs-12 about-content">
                                    <h3 className="margin">About</h3>
                                    <div className="face"></div>
                                    <div className="quote">
                                        <h2 className=" ">&quot;Ever since I wrote first 'tag', my life has made a complete <span>180&#176;</span> turn.&quot;</h2>
                                    </div>
                                    <h3>I'm a web developer who works with all the usual web technologies (HTML, SCSS, Javascript, PHP, MySQL, REST...).</h3>
                                    <h3>I like working in team and writing  maintainable and efficient code for solving interesting tasks.</h3>
                                    <a href="Burlachenko_cv.doc" download><i className="fa fa-download"></i>&nbsp;download a CV</a>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>




                <div id="projects" className="container-fluid bg-3 text-center">
                    <div className="projects-content">
                        <div className="main ">
                            <h3 className="margin">Projects</h3><br />

                            <div className="gallery-box container-fluid slideanim">
                                <ul className="">
                                    <li className="frame col-xs-6 col-sm-3 blue1">
                                        <a href="http://bluemasters.x6312930.beget.tech" target="_blank" rel="noopener noreferrer" >
                                            <div className="info">
                                                <h3>BlueMasters</h3>
                                                <p>Creation of Beaches.</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="frame col-xs-6 col-sm-3 shop">
                                        <a href="http://shop.x6312930.beget.tech/" target="_blank" rel="noopener noreferrer" className="wrap-pad">
                                            <div className="info">
                                                <h3>Shop</h3>
                                                <p>Electronics online store</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="frame col-xs-6 col-sm-3 company">
                                        <a href="http://company.x6312930.beget.tech/" target="_blank" rel="noopener noreferrer" className="wrap-pad">
                                            <div className="info">
                                                <h3>Company</h3>
                                                <p>Web development company</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="frame col-xs-6 col-sm-3 game">
                                        <a href="https://buralex.github.io/no-smoking/" target="_blank" rel="noopener noreferrer" className="wrap-pad">
                                            <div className="info">
                                                <h3>No Smoking</h3>
                                                <p>HTML game</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="frame col-xs-6 col-sm-3">
                                        <a href="" target="_blank" rel="noopener noreferrer" className="wrap-pad">
                                            <div className="info">
                                                <h3>There will be some text</h3>
                                                <p>There will be some description</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="frame col-xs-6 col-sm-3">
                                        <a href="" target="_blank" rel="noopener noreferrer" className="wrap-pad">
                                            <div className="info">
                                                <h3>There will be some text</h3>
                                                <p>There will be some description</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="frame col-xs-6 col-sm-3">
                                        <a href="" target="_blank" rel="noopener noreferrer" className="wrap-pad">
                                            <div className="info">
                                                <h3>There will be some text</h3>
                                                <p>There will be some description</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="frame col-xs-6 col-sm-3">
                                        <a href="" target="_blank" rel="noopener noreferrer" className="wrap-pad">
                                            <div className="info">
                                                <h3>There will be some text</h3>
                                                <p>There will be some description</p>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="contact-wrap">
                    <div className="mask-dark"></div>

                    <div id="contact" className="container-fluid bg-4 text-center">
                        <div className="contact-content">
                            <h3 className="margin">Contact</h3><br />


                            <div className="card-wrap text-center">
                                <div className="card ">
                                    <div className="card__front ">

                                    </div>
                                    <div className="card__back ">

                                    </div>
                                </div>
                            </div>


                            <div className="main">
                                <div className="visit-container">
                                    <div className="visit__padding">
                                        <div className="visit" >
                                            <div className="visit__content">
                                                <h2>Nikolaev city, Ukraine</h2>
                                                <div className="container-fluid">
                                                    <ul className="contact-list">
                                                        <li className="col-xs-12 col-sm-6 col-md-3"><a className="phone" href="tel:0669220905"><span className="fa fa-mobile"></span><br /> +38 (066) 922-09-05 </a></li>
                                                        <li className="col-xs-12 col-sm-6 col-md-3"><a className="email"  href="mailto:buralex89@gmail.com"><span className="fa fa-envelope"></span><br />buralex89@gmail.com</a></li>
                                                        <li className="col-xs-12 col-sm-6 col-md-3"><a className="skype" href="skype:alexandr_bur?chat"><span className="fa fa-skype"></span><br />alexandr_bur</a></li>
                                                        <li className="col-xs-12 col-sm-6 col-md-3"><a href="https://github.com/buralex" className="" target="_blank" rel="noopener noreferrer"><span className="fa fa-github"></span><br />buralex</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <span className="visit__shadow"></span>
                                            <span className="bord"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="night"></div>


                <footer className="container-fluid bg-5 text-center">
                    <div className="row">

                        <p> Made By <a href="#myPage"> Alexandr </a></p>
                        <div className="line-foot"></div>
                    </div>
                </footer>


            </div>
        );
    }
}
