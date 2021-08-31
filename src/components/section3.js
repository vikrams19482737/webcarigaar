import React from 'react-dom'
import cimg3  from './cimg3.svg';
import clogo1 from './logo.svg';
import cimg4  from './cimg4.svg';


function Section3(){
  return (
       <div className='section3_container'>
           <div className='section3'>
                  <div className='s3-c1'>
                      <img  className='cimg3' src={cimg3} alt="cimg3"  />
                  </div>
                  <div className='s3-c2'>
                        <div className="ctext1"> Looking for Handyman ? </div>
                        <div className='cline1'> <img className='clogo1' src={clogo1} alt="clogo1"  /> <div> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </div> </div>
                        <div className='cline1'> <img className='clogo1' src={clogo1} alt="clogo1"  /> <div> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </div> </div>
                        <div className='cline1'> <img className='clogo1' src={clogo1} alt="clogo1"  /> <div> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </div> </div>
                        <div className='cbox1'>
                            <div>
                               <div> <img src={cimg4} alt="cimg4" /> </div>
                               <div> Heading1 </div>
                               <div> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </div>
                            </div>
                            <div>
                               <div> <img src={cimg4} alt="cimg4" /> </div>
                               <div> Heading1 </div>
                               <div> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </div>
                            </div>
                        </div>
                  </div>
            </div>
        </div>
     )
}

export default Section3;
