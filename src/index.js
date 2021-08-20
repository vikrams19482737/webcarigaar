import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


import './fonts/Epilogue-Black.ttf';
import './fonts/Epilogue-Bold.ttf';
import './fonts/Epilogue-Regular.ttf';
import './fonts/Nunito-Black.ttf';
import './fonts/Nunito-Bold.ttf';
import './fonts/Nunito-Regular.ttf';



import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
