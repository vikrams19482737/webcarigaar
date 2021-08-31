import React from 'react-dom'
import homeimage1  from './cimg4.svg';

function Section4(){
  return (
       <div className='section4_container'>
           <div className='section4'>
              <div className='s4-r0'>
               <img src={homeimage1} alt="homeimage1" />
               <div className='ch1'> GALLERY. DESIGNER. </div>
               <div className='ctext3'> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </div>
              </div>
              <div className='s4-r1'>
                 <div   id="carouselExampleControls" className="carousel slide ch-gallery" data-ride="carousel">
                      <div className="carousel-inner chinner">
                       <div className="carousel-item active">
                         <img className='s4img' src={homeimage1} alt="First slide" />
                       </div>
                       <div className="carousel-item">
                         <img className='s4img'src={homeimage1}  alt="Second slide" />
                       </div>
                       <div className="carousel-item">
                         <img className='s4img' src={homeimage1}  alt="Third slide" />
                       </div>
                      </div>
                      <a className="carousel-control-prev rra" href="#carouselExampleControls" role="button" data-slide="prev">
                       <span className="carousel-control-prev-icon " aria-hidden="true"></span>
                       <span className="sr-only rra">Previous</span>
                      </a>
                      <a className="carousel-control-next rra" href="#carouselExampleControls" role="button" data-slide="next">
                       <span className="carousel-control-next-icon"  aria-hidden="true"></span>
                       <span className="sr-only rra">Next</span>
                      </a>
                </div>
                <div>
                    <div className='ch3'> Heading 2 </div>
                    <div className='ctext2'> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </div>
                    <div> </div>
                </div>
              </div>
            </div>
        </div>
     )}

export default Section4;
