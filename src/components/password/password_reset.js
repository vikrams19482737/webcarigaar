import React from 'react-dom';
import {useState} from 'react'
import  { Redirect } from 'react-router-dom'


function Reset(){
 const [password1, setPassword1] = useState(null);
 const [password2, setPassword2] = useState(null);
 const [validurl, setValidUrl] = useState(false);
 const [error1, setError1] = useState();
 const [res1, setRes1] = useState('');

 const [res2, setRes2] = useState('');


 const url1 = 'http://localhost:8000/users/forgot-password/check-token';
 const url2 = 'http://localhost:8000/users/forgot-password/reset';


 let myurl = window.location.href;
 let reset_token = myurl.split('/')[5];



 const req_options = {
   method : 'POST',
   headers : { 'Content-Type' : 'application/json', 'Authorization' : 'Token 7f7ea5d832d915cfd276597ac1ff5141b04ceefe'},
   body: JSON.stringify({ email: reset_token})
 };

 if(!validurl){
   fetch(url1, req_options)
   .then(response => response.json())
   .then(response =>  ab(response));
 }

function ab(res1){
 if(res1 === 'error'){
     setRes1('error');
 }
 else{
   setValidUrl('good');
 }
}

if(res1 === 'error'){
  return   <Redirect to='/'  />;
}

function submitPassword(e){
  e.preventDefault();

  if(password1 && password2){



    if(password1 === password2){
        const req_pass = {
          method : 'POST',
          headers : { 'Content-Type' : 'application/json', 'Authorization' : 'Token 7f7ea5d832d915cfd276597ac1ff5141b04ceefe'},
          body: JSON.stringify({ reset_token: reset_token, password : password1}),
        };

        fetch(url2, req_pass)
        .then((response) => response.json())
        .then((response) => setRes2(response));
    }
    else{
      setError1('Password are not same.')
    }
  }
}


  if(res2 === 'error'){
    alert("Could not update password");
  }
  else if(res2 === 'done'){
    alert("Password Changed");
    return   <Redirect to='/'  />;
  }




   return(
     <div>
        <div> Enter Code </div>
        {error1}
        <form onSubmit={submitPassword}>
            <div> Enter Code </div>
            <input type="password" name="password1" onChange={(e) => {setPassword1(e.target.value)}} />
            <input type="password" name="password2" onChange={(e) => {setPassword2(e.target.value)}}/>
            <input type="submit" value="Submit" />
             {password1}
             {password2}
        </form>
     </div>
   )
}
export default Reset;

// Token required.
// Take code
// Send it to the db:: Fetch
// Responsoe Yes/No

// If Yes here
// Enter password
// Token,
