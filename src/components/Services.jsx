import React, {Fragment,useState}from 'react';
import '../css/services.css'
import immiImage from '../assets/images/hand-background.jpeg'
import signing from '../assets/images/signing-background.jpeg'
import books from '../assets/images/books-background.jpg'
//! ---------animations------------
import AOS from 'aos'
import 'aos/dist/aos.css'//this line must be included to load the styles
const Services=()=>{
AOS.init({duration:2000})
  return(
    <Fragment>
      <div  className='container d-flex flex-column justify-content-center mt-2 mb-2'>
        <h2 className="h1 text-center">Welcome to Adimir Solicitors</h2>
      <section className="container d-flex justify-content-center">
        <div className="row">
          <article data-aos="zoom-in-right" className="services__article__container col-12 col-lg-4 col-md-6">
              <div className="card" >
                <div style={{position:'relative'}}>
                  {/* overlay */}
                  <a href="#">
                  <div class="overlay">
                        <h3 class='overlay-title'>MORE INFO</h3>
                        <p class='overlay-subtitle'></p>
                      </div>
                  </a>
                {/* end overlay` */}
                      <img src={immiImage} className="card-img-top" alt="..."/>
                </div>
                  <div className="card-body">
                    <h5 className="card-title">Family Law</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">More Info</a>
                  </div>
                </div>  
          </article>
          <article data-aos="zoom-in-right" className="services__article__container col-12 col-lg-4 col-md-6">
                <div className="card" >
                <div style={{position:'relative'}}>
                  {/* overlay */}
                  <a href="#">
                  <div class="overlay">
                        <h3 class='overlay-title'>MORE INFO</h3>
                        <p class='overlay-subtitle'></p>
                      </div>
                  </a>
                {/* end overlay` */}
                    <img src={signing} className="card-img-top" alt="..."/>
                  </div>
                      <div className="card-body">
                        <h5 className="card-title">Divorce Law</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">More Info</a>
                      </div>
                </div>  
          </article>
          <article data-aos="zoom-in-right" className="services__article__container col-12 col-lg-4 col-md-12">
                <div className="card" >
                <div style={{position:'relative'}}>
                  {/* overlay */}
                  <a href="#">
                  <div class="overlay">
                        <h3 class='overlay-title'>MORE INFO</h3>
                        <p class='overlay-subtitle'></p>
                      </div>
                  </a>
                {/* end overlay` */}
                    <img src={books} className="card-img-top" alt="..."/>
                  </div>
                      <div className="card-body">
                        <h5 className="card-title">Immigration Law</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">More Info</a>
                  </div>
                </div>  
          </article>
        </div>  
      </section>
      </div>
    </Fragment>
)
}

export default Services