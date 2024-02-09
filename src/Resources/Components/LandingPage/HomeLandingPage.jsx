import logoimage from "../Images/logo.jpg";
import slid from "../Images/slid.png";
import a1 from "../Images/a1.jpg";
import a2 from "../Images/a2.jpg";
import blog_03 from "../Images/blog/blog_03.jpg"
import appstore from "../Images/appstore.png";
import googleplay from "../Images/google-play.png";
import mobileapp from "../Images/moble-app.png";
import blog_01 from "../Images/blog/blog_01.jpg"
import blog_02 from "../Images/blog/blog_02.jpg"
import  '../../../App.js';

import { useNavigate } from "react-router-dom";

export default function HomeLanding() {
    const navigate =useNavigate();
      return (
        <div>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <title>Digital Money Banking | Smarteyeapps.com</title>
          <link rel="shortcut icon" href="assets/images/fav.png" type="image/x-icon" />
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
          <link rel="shortcut icon" href="assets/images/fav.jpg" />
          <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css" />
          <link rel="stylesheet" type="text/css" href="assets/css/style.css" />
          <div className="header container-fluid bg-white shadow">
            <div className="hed-top bg-primary">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 d-none d-lg-block">
                    <ul className="text-white">
                      <li className="float-start p-3"><i className="bi bi-envelope" /> mukulkumawat180@gmail.com</li>
                      <li className="float-start p-3"><i className="bi bi-telephone" /> +91 978-298-3249</li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <ul className="text-white float-end">
                      <li className="float-start p-3"><i className="bi bi-facebook" /></li>
                      <li className="float-start p-3"><i className="bi bi-twitter" /></li>
                      <li className="float-start p-3"><i className="bi bi-instagram" /></li>
                      <li className="float-start p-3"><i className="bi bi-linkedin" /></li>
                      <li className="float-start pt-2 ms-4">
                        <button className="btn btn-light" onClick={()=>{navigate("/login")}}>Login / Sign Up</button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="nav-col bg-white">
              <div className="container">
                <div className="row">
                  <div className="col-lg-3 pt-1 pb-2 align-items-center">
                    <img className="max-230" src={logoimage} alt="" />
                    <a data-bs-toggle="collapse" data-bs-target="#menu" className="float-end d-lg-none pt-1 ps-3"><i className="bi pt-1 fs-1 cp bi-list" /></a>
                  </div>
                  <div id="menu" className="col-lg-9 d-none d-lg-block">
                    <ul className="float-end mul d-inline-block">
                      <li className="float-md-start p-4"><a href="index.html">Home</a></li>
                      <li className="float-md-start p-4"><a href="about.html">About US</a></li>
                      <li className="float-md-start p-4"><a href="services.html">Account opening</a></li>
                      <li className="float-md-start p-4"><a href="case_study.html">Loan</a></li>
            
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section-conten big-padding">
            <div className="container py-3">
              <div className="row">
                <div className="col-md-6 align-self-center">
                  <h1 className="fs-11 dfr fw-bold">Connect All your <span className="text-primary">Banking Needs</span> and Grow </h1>
                  <p className="fs-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae nulla quis felis semper interdum a et dui. Curabitur a odio condimentum augue ultricies posuere. In et felis laoreet</p>
                  <div className=" d-inline-block pt-4">
                    <button className="btn btn-light shadow-md p-3 px-5 fs-7 fw-bold">Get Quote</button>
                    <button className="btn btn-primary ms-3 fs-7 shadow-md p-3 px-5 fw-bold">Get Quote</button>
                  </div>
                </div>
                <div className="col-md-6 pt-4">
                  <img className="w-100" src={slid} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="what-we-do big-padding bg-white container-fluid">
            <div className="container">
              <div className="section-title row">
                <h2>Our Services</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac accumsan ante. Proin ac lectus porttitor, pharetra lorem sit amet, euismod tortor. Donec blandit accumsan elit</p>
              </div>
              <div className="row mt-4 whd">
                <div className="col-md-4 text-start mb-5">
                  <i className="bi text-primary fs-1 bi-bank" />
                  <h4 className="fs-6 fw-bold mt-3">Online Banking</h4>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla  consectetur adipiscing elit. Sed ac accumsan hic deserunt facere et animi</p>
                </div>
                <div className="col-md-4 text-start mb-5">
                  <i className="bi fs-1 text-primary bi-phone-flip" />
                  <h4 className="fs-6 fw-bold mt-3">Mobile Banking</h4>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla  consectetur adipiscing elit. Sed ac accumsan hic deserunt facere et animi</p>
                </div>
                <div className="col-md-4 text-start mb-5">
                  <i className="bi fs-1 text-primary bi-book-half" />
                  <h4 className="fs-6 fw-bold mt-3">Business Plan</h4>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla  consectetur adipiscing elit. Sed ac accumsan hic deserunt facere et animi</p>
                </div>
                <div className="col-md-4 text-start mb-5">
                  <i className="bi fs-1 text-primary bi-currency-dollar" />
                  <h4 className="fs-6 fw-bold mt-3">Online Business</h4>
                  <p>Lorem ipsum dolor sit amet consectetur,  consectetur adipiscing elit. Sed ac accumsan adipisicing elit. Nulla hic deserunt facere et animi</p>
                </div>
                <div className="col-md-4 text-start mb-5">
                  <i className="bi fs-1 text-primary bi-piggy-bank" />
                  <h4 className="fs-6 fw-bold mt-3">Online Deposit</h4>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla  consectetur adipiscing elit. Sed ac accumsan hic deserunt facere et animi</p>
                </div>
                <div className="col-md-4 text-start mb-5">
                  <i className="bi  fs-1 text-primary bi-shield-shaded" />
                  <h4 className="fs-6 fw-bold mt-3">Business Insurance</h4>
                  <p>Lorem ipsum dolor sit amet consectetur,  consectetur adipiscing elit. Sed ac accumsan adipisicing elit. Nulla hic deserunt facere et animi</p>
                </div>
              </div>
            </div>
          </div>
          <div className="what-we-do big-padding bg-white container-fluid">
            <div className="container">
              <div className="section-title row">
                <h2>Our Services</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac accumsan ante. Proin ac lectus porttitor, pharetra lorem sit amet, euismod tortor. Donec blandit accumsan elit</p>
              </div>
              <div className="row mt-4 whd">
                <div className="col-md-4 text-start mb-5">
                  <i className="bi text-primary fs-1 bi-bank" />
                  <h4 className="fs-6 fw-bold mt-3">Online Banking</h4>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla  consectetur adipiscing elit. Sed ac accumsan hic deserunt facere et animi</p>
                </div>
                <div className="col-md-4 text-start mb-5">
                  <i className="bi fs-1 text-primary bi-phone-flip" />
                  <h4 className="fs-6 fw-bold mt-3">Mobile Banking</h4>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla  consectetur adipiscing elit. Sed ac accumsan hic deserunt facere et animi</p>
                </div>
                <div className="col-md-4 text-start mb-5">
                  <i className="bi fs-1 text-primary bi-book-half" />
                  <h4 className="fs-6 fw-bold mt-3">Business Plan</h4>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla  consectetur adipiscing elit. Sed ac accumsan hic deserunt facere et animi</p>
                </div>
                <div className="col-md-4 text-start mb-5">
                  <i className="bi fs-1 text-primary bi-currency-dollar" />
                  <h4 className="fs-6 fw-bold mt-3">Online Business</h4>
                  <p>Lorem ipsum dolor sit amet consectetur,  consectetur adipiscing elit. Sed ac accumsan adipisicing elit. Nulla hic deserunt facere et animi</p>
                </div>
                <div className="col-md-4 text-start mb-5">
                  <i className="bi fs-1 text-primary bi-piggy-bank" />
                  <h4 className="fs-6 fw-bold mt-3">Online Deposit</h4>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla  consectetur adipiscing elit. Sed ac accumsan hic deserunt facere et animi</p>
                </div>
                <div className="col-md-4 text-start mb-5">
                  <i className="bi  fs-1 text-primary bi-shield-shaded" />
                  <h4 className="fs-6 fw-bold mt-3">Business Insurance</h4>
                  <p>Lorem ipsum dolor sit amet consectetur,  consectetur adipiscing elit. Sed ac accumsan adipisicing elit. Nulla hic deserunt facere et animi</p>
                </div>
              </div>
            </div>
          </div>
          <div className="features big-padding container-fluid">
            <div className="container">
              <div className="row">
                <div className="col-md-6 p-4">
                  <img className="shadow" src={a1} alt="" />
                </div>
                <div className="col-md-6 align-self-center">
                  <h2 className="fs-2 fw-bolder mb-3">Privacy, Innovation and Security in the Digital Payments World</h2>
                  <p className="mb-2">Integer vulputate vehicula dolor a eleifend. Duis aliquam condimentum sapien, eget tempor justo. Aenean porttitor nibh metus, sollicitudin egestas metus posuere et . Fusce egestas volutpat metus, in sodales sem bibendum porta. Nunc hendrerit nunc sit.</p>
                  <p>
                    Amet tellus posuere, at malesuada sem gravida. Integer maximus ultricies augue, at dapibus elit bibendum consequat. Cras faucibus tellus eleifend, fermentum purus in, dapibus sapien. Praesent nec ornare risus. Etiam iaculis, ligula vel gravida vestibulum, urna justo posuere ante, id pretium massa arcu sed mi. Nunc a sollicitudin sem. Duis tempus
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="features big-padding container-fluid bg-white">
            <div className="container">
              <div className="row">
                <div className="col-md-6 align-self-center">
                  <h2 className="fs-2 fw-bolder mb-3">Privacy, Innovation and Security in the Digital Payments World</h2>
                  <p className="mb-2">Amet tellus posuere, at malesuada sem gravida. Integer maximus ultricies augue, at dapibus elit bibendum consequat. Praesent nec ornare risus. Etiam iaculis, ligula vel gravida vestibulum, urna justo posuere ante, id pretium massa arcu sed mi. Nunc a sollicitudin sem. Duis tempus</p>
                  <p>
                    Integer vulputate vehicula dolor a eleifend. Duis aliquam condimentum sapien, eget tempor justo. Aenean porttitor nibh metus, sollicitudin egestas metus posuere et . Fusce egestas volutpat metus, in sodales sem bibendum porta. Nunc hendrerit nunc sit
                  </p>
                </div>
                <div className="col-md-6 p-4">
                  <img className="shadow bg-white p-2" src={a2} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="mobile-cart container-fluid big-padding">
            <div className="container">
              <div className="row">
                <div className="col-md-8 align-self-center">
                  <h4 className="fs-2 fw-bold mb-3">Stay connected,  <br />enjoy peace of mind on the Go</h4>
                  <p>Aenean porttitor nibh metus, sollicitudin egestas metus posuere et . Fusce egestas volutpat metus, in sodales sem bibendum porta. Nunc hendrerit nunc sit</p>
                  <div className="btnrow mt-4">
                    <img src={appstore} alt="" />
                    <img className="ms-3" src={googleplay} alt="" />
                  </div>
                </div>
                <div className="col-md-4 mt-4">
                  <img src={mobileapp} alt="" />
                </div>
              </div>
            </div>
          </div>
          {/*########################## Blog Starts Here ############################# */}
          <div id="blog" className="service container-fluid px-4 bg-white py-5">
            <div className="container">
              <div className="section-title row mb-3">
                <h2 className="fw-bolder">Blog</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ipsum sit nibh amet egestas tellus.</p>
              </div>
              <div className="row mt-5">
                <div className="col-lg-4 col-md-6 mb-4">
                  <div className="serv-cove rounded bg-white p-2">
                    <img src={blog_01} alt="" />
                    <div className="p-2">
                      <h5 className="mt-3 fs-7 fw-bold">Top 10 Trends in  Webdesign sit nibh amet  Mauris ipsum sit nibh</h5>
                      <span className="fs-8">22 May 2015</span>
                      <span className="float-end fs-8"><i className="bi bi-person" /> Sam Anderson</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                  <div className="serv-cove rounded bg-white p-2">
                    <img src={blog_02} alt="" />
                    <div className="p-2">
                      <h5 className="mt-3 fs-7 fw-bold">Top 10 Trends in  Webdesign sit nibh amet  Mauris ipsum sit nibh</h5>
                      <span className="fs-8">22 May 2015</span>
                      <span className="float-end fs-8"><i className="bi bi-person" /> Sam Anderson</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                  <div className="serv-cove rounded bg-white p-2">
                    <img src={blog_03} alt="" />
                    <div className="p-2">
                      <h5 className="mt-3 fs-7 fw-bold">Top 10 Trends in  Webdesign sit nibh amet  Mauris ipsum sit nibh</h5>
                      <span className="fs-8">22 May 2015</span>
                      <span className="float-end fs-8"><i className="bi bi-person" /> Sam Anderson</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer>
            <div className="inner">
              <div className="container">
                <div className="row">
                  <div className="col-md-3 foot-about">
                    <h4>About US</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras hendrerit libero pellentesque libero interdum, id mattis felis dictum. Praesent eget lacus tempor justo efficitur malesuada. Cras ut suscipit nisi.</p>
                    <ul>
                      <li>23 Rose Stren Melbourn</li>
                      <li>sales@smarteyeapps.com</li>
                      <li>+91 876 766 554</li>
                    </ul>
                  </div>
                  <div className="col-md-3 foot-post">
                    <h4>Latest Posts</h4>
                    <div className="post-row">
                      <div className="image">
                        <img src={blog_01} alt="" />
                      </div>
                      <div className="detail">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras hendrerit </p>
                      </div>
                    </div>
                    <div className="post-row">
                      <div className="image">
                        <img src={blog_02} alt="" />
                      </div>
                      <div className="detail">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras hendrerit </p>
                      </div>
                    </div>
                    <div className="post-row">
                      <div className="image">
                        <img src={blog_03} alt="" />
                      </div>
                      <div className="detail">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras hendrerit </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 foot-services">
                    <h4>Top Category</h4>
                    <ul>
                      <li><a href>Target Statergy</a></li>
                      <li><a href>Web Analytics</a></li>
                      <li><a href>Page Monitering</a></li>
                      <li><a href>Page Optimization</a></li>
                      <li><a href>Target Statergy</a></li>
                      <li><a href>Email Marketing</a></li>
                    </ul>
                  </div>
                  <div className="col-md-3 foot-news">
                    <h4>News Letter</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam justo neque, vehicula eget eros. </p>
                    <div className="input-group mb-3">
                      <input type="text" className="form-control mb-0" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                      <div className="input-group-append">
                        <span className="input-group-text bg-primary" id="basic-addon2"><i className="bi text-white bi-send" /></span>
                      </div>
                    </div>
                    <ul>
                      <li><i className="bi bi-facebook" /></li>
                      <li><i className="bi bi-twitter" /></li>
                      <li><i className="bi bi-instagram" /></li>
                      <li><i className="bi bi-linkedin" /></li>
                      <li><i className="bi bi-pinterest" /></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </footer>
          <div className="copy">
            <div className="container">
              <a href="https://www.smarteyeapps.com/">2022 © All Rights Reserved | Designed and Developed by Smarteyeapps.com</a>
              <span>
                <a href><i className="fab fa-github" /></a>
                <a href><i className="fab fa-google-plus-g" /></a>
                <a href="https://in.pinterest.com/prabnr/pins/"><i className="fab fa-pinterest-p" /></a>
                <a href="https://twitter.com/prabinraja89"><i className="fab fa-twitter" /></a>
                <a href="https://www.facebook.com/freewebtemplatesbysmarteye"><i className="fab fa-facebook-f" /></a>
              </span>
            </div>
          </div>
        </div>
      );
    };