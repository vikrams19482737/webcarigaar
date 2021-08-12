import React from 'react-dom'
import homeimage1 from '../cimg1.jpg';

function Section4(){
  return (
       <div className='section4_container'>
           <div className='section4'>
               <div className='ch1'> Gallery </div>

               <div  id="carouselExampleControls" class="carousel slide ch-gallery" data-ride="carousel">
                    <div class="carousel-inner chinner">
                     <div class="carousel-item active">
                       <img className='s4img' src={homeimage1} alt="First slide" />
                     </div>
                     <div class="carousel-item">
                       <img className='s4img'src={homeimage1}  alt="Second slide" />
                     </div>
                     <div class="carousel-item">
                       <img className='s4img' src={homeimage1}  alt="Third slide" />
                     </div>
                    </div>
                    <a class="carousel-control-prev rra" href="#carouselExampleControls" role="button" data-slide="prev">
                     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                     <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                     <span class="carousel-control-next-icon" aria-hidden="true"></span>
                     <span class="sr-only rra">Next</span>
                    </a>
              </div>

            </div>
        </div>
     )}

export default Section4;
