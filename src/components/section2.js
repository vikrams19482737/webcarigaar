import React  from 'react-dom';
import cimg2  from './cimg2.svg';
import clogo1 from './logo.svg';
import cimg4  from './cimg4.svg';

function Section2(){
  return (
       <div className='section2_container'>
           <div className='section2'>
                  <div className='s2-c1'>
                        <div className="ctext1"> Looking for Customers ? </div>
                        <div className='cline1'> <img className='clogo1' src={clogo1} alt="clogo1" /> <div> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </div> </div>
                        <div className='cline1'> <img className='clogo1' src={clogo1} alt="clogo1" /> <div> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </div> </div>
                        <div className='cline1'> <img className='clogo1' src={clogo1} alt="clogo1" /> <div> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </div> </div>
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
                  <div className='s2-c2'>
                        <img className='cimg2' src={cimg2} alt="cimg2"  />
                  </div>
            </div>
        </div>
     )
}

export default Section2;
