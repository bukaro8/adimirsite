import React, {Fragment}from 'react';
import '../css/hero.css'
const Hero=()=>{

  return(
    <Fragment>
        <header className='container-fluid d-flex flex-column justify-content-center align-items-center  min-vh-100 hero'>
          <h1 className=' hero__title text-light
          mb-lg-2 text-center'>Top Solicitors Firm in London</h1>
          <h2 className="fs-5 hero__subtitle text-light text-center">We offer services in areas of Immigration and Family Law</h2>
          <div className="container d-flex flex-wrap  justify-content-center">
           
            <button className="margin-2 fs-3 hero__title  btn btn-primary rounded-pill text-light text-center"> Free Consultation</button>
             <button className="margin-2 btn btn-secondary  fs-3 hero__title rounded-pill  ">
              <a  className='text-dark text-decoration-none'href="tel:+4402033020074">
                free Consultation call
              </a>
            </button>
          </div>
        </header>
    </Fragment>
)
}

export default Hero