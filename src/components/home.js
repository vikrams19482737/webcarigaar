import React from 'react-dom';

import Navbar   from './navbar';
import Section1 from './section1';
import Section2 from './section2';
import Section3 from './section3';
import Footer from './footer';

function Home(){

  return(
         <div className='abc'>
                <Navbar />
                <Section1 />
                <Section2 />
                <Section3 />
                <Footer />
         </div>)
}

export default Home;
