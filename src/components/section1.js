import React from 'react-dom'
import homeimage1 from '../cimg1.jpg'
import imgApp1 from '../a.png'
import imgApp2 from '../app2.png'

function Section1(){
  return (
       <div className='section1_container'>
           <div className='section1'>


                 <div className='s1-c1'>
                     <div> Let us do the work for you </div>
                     <div className="ch1"> Carigaar </div>
                     <div className='ch3'>  Why do the unwanted work. </div>
                     <div className='ctext4'>
                      Carigaar.com will help you to get everything done in an easy & quickest way. Just check our available services,
                       look for your required service and rest our web-platform will find best match for your required services.
                     </div>
                     <div className='myicons1'>
                        <img src={imgApp1} alt="Image1"/>
                        <img src={imgApp2} alt="Image2" />
                     </div>
                 </div>
                 <div className='s1-c2'>
                      <img   className='cimg1' src={homeimage1}  />
                 </div>

            </div>
        </div>
     )
}

export default Section1;
