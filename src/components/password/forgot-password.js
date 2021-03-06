import React from 'react-dom';
import {useState, useEffect} from 'react'
import Navbar from '../navbar.js'
// Forgot password enter email

function EnterEmail(){
 const [email, setEmail] = useState("");
 const [mytoken, setToken] = useState(false);
 const [error, setError] = useState(false);

 const url1 = 'http://localhost:8000/users/forgot-password/';


function send_data(e){
  e.preventDefault();
  const req_options = {
    method : 'POST',
    headers : { 'Content-Type' : 'application/json', 'Authorization' : 'Token 7f7ea5d832d915cfd276597ac1ff5141b04ceefe'},
    body: JSON.stringify({ email: email})
  };
      fetch(url1, req_options)
      .then(response => response.json())
      .then(response => setToken(response));


}

useEffect(() => {
  if(mytoken === 'error1')
  {
    setError('Email Does not exist');
    alert(mytoken);
  }
  else if(mytoken === 'error2'){
    setError('Not a valid email');
  }
}, [mytoken]);

if(mytoken !== 'done'){


   return(
     <div className="creset">
     <Navbar />
     <div className="ch1"> Carigaar </div>
     <div className="creset-box">
       <div> Reset your password here please enter your email address and a link will be sent to your email. Click on the link and follow instructions. </div>
        <form onSubmit={send_data}>
            <p> {error} </p>
            <div className='ctext4'> Enter Email </div>
            <input type="text" name='email' onChange={(e) => { setEmail(e.target.value)}} />
            <button onClick={send_data} > Submit </button>
        </form>
      </div>
     </div>
   )
 }
 else{
   return <div> An email has been sent at {email}. Please check this email and click on the provided link to reset password. </div>
 }
}
export default EnterEmail;

// Token required.
// Take code
// Send it to the db:: Fetch
// Responsoe Yes/No



//   if (mytoken){
//   }
