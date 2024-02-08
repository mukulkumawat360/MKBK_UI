
 import React from 'react';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import  '../../../App.js';
import Account from '../Images/Account.jpg';
import Credit_card from '../Images/Credit_card.jpg';
import loan from '../Images/loan.png';
import { Link, useNavigate } from "react-router-dom"



  export default function HomePageView() {

    const navigate=useNavigate();
    function onloanClick(){
      navigate("/usd");
    }
    return (
    
    <>
    <nav className="navbar bg-body-tertiary">
  <div className="container-fluid  justify-content-center align-items-center">
    <span className="navbar-brand mb-40 h1 ">Welcome To  MKBK</span>
  </div>
</nav>

          <div className='ImageTable'>
            <table>
             <th>
              <Link to="/usd"><img src={Account} alt="Logo" height={'300px'} width={'500px'} /></Link>
              </th> 
             <th><img src={Credit_card} alt="Logo" height={'300px'} width={'500px'} /></th>
             <th><img src={loan} alt="Logo" height={'300px'} width={'500px'} /></th>
            </table>

          </div>
        
          </>
    );
  }
  