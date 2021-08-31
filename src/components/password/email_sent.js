import React from 'react-dom';
import {useState, useEffect} from 'react'
import  { Redirect } from 'react-router-dom'


function Reset(){
 const [password, setPassword] = useState(null);
 const url1 = '';


console.log('hi');

  function handleSubmit(){

    console.log('hi');


  }

   return(
     <div>
        <div> Enter Code </div>
        <form onSubmit={handleSubmit}>
            <div> Enter Code </div>
            <input type="password" name="password" />
            <input type="password" name="password_again" />
            <div > Submit </div>
        </form>
     </div>
   )
}
export default Reset;
